import { ChangeEvent, useEffect, useState } from "react";
import { IIngredient } from "../models/IIngredient";
import { Trans, useTranslation } from "react-i18next";
import { getIngredients } from "../../../services/axios/endpoint-calls/recipes/ingredient";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

const PickItemsComponent = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  let initialIngredients: IIngredient[] = [];
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  useEffect(() => {
    getIngredients().then((res) => {
      if (
        res &&
        res.status === HttpStatusCode.Ok &&
        res.data &&
        res.data.length > 0
      ) {
        initialIngredients = [];
        res.data.forEach((element: any) => {
          initialIngredients.push({
            id: element.id,
            name: element.name,
            checked: false,
            visible: true,
          });
        });

        setIngredients(initialIngredients);
      }
    });
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value;

    let changedIngredients = [...ingredients];

    const changedIngredientsIds = changedIngredients
      .filter((ingredient) => {
        return (
          ingredient.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      })
      .map((ingredient) => ingredient.id);

    changedIngredients = changedIngredients.map((ingredient) =>
      changedIngredientsIds.find(
        (changedIngredient) => ingredient.id === changedIngredient
      )
        ? { ...ingredient, visible: true }
        : { ...ingredient, visible: false }
    );

    setIngredients(changedIngredients);
  };

  const handleIngredientPickChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const ingredientId = Number.parseInt(event.target.value);
    if (ingredientId > 0) {
      const changedIngredients = [...ingredients];
      const ingredientIndex = changedIngredients.findIndex(
        (ingredient) => ingredient.id === ingredientId
      );

      changedIngredients[ingredientIndex].checked =
        !changedIngredients[ingredientIndex].checked;

      setIngredients(changedIngredients);
    }
  };

  const handleFindRecipesClick = (): void => {
    const pickedItems = ingredients.filter((ingredient) => ingredient.checked);
    const queryData = pickedItems
      .map((ingredient) => `${ingredient.id}`)
      .join(",");

    navigate({
      pathname: "/findrecipes",
      search: `?picks=${queryData}`,
    });
  };

  return (
    <>
      <div className="container w-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2 h-28 sm:h-24">
            <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
              {/* <h3 className="">
                <b>Unleash</b> your culinary creativity by discovering delicious
                recipes.
                <br />
              </h3> */}
              <h3>
                <Trans i18nKey="MainSubtitle" />
              </h3>
            </div>
          </div>
          <div>
            <div className="card w-auto sm:w-96 h-96 sm:h-auto bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{t("PickItems")}</h2>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchChange}
                    className="input input-bordered input-md w-full"
                  />
                  <div className="mt-3 h-56 sm:h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map(
                        (ingredient) =>
                          ingredient.visible && (
                            <label
                              className="label cursor-pointer mr-1"
                              key={ingredient.id}
                            >
                              <span className="label-text">
                                {ingredient.name}
                              </span>
                              <input
                                type="checkbox"
                                value={ingredient.id}
                                className="checkbox"
                                onChange={handleIngredientPickChange}
                                checked={ingredient.checked}
                              />
                            </label>
                          )
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card mt-8 sm:mt-0 mb-8 sm:mb-0 w-auto sm:w-96 h-96 sm:h-auto bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{t("PickedItems")}</h2>
                <div className="form-control mt-2 mb-2">
                  <div className="h-56 sm:h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map((ingredient) => (
                        <div
                          className="bg-base-300 p-3 mb-2 mr-1 rounded-lg"
                          key={ingredient.id}
                          hidden={!ingredient.checked}
                        >
                          <p className="label-text">{ingredient.name}</p>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="card-actions justify-end mr-1">
                  <button
                    className="btn btn-md btn-primary"
                    onClick={handleFindRecipesClick}
                  >
                    {t("FindRecipes")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickItemsComponent;
