import { ChangeEvent, useState } from "react";
import { Ingredient } from "../models/IIngredient";
import { Trans, useTranslation } from "react-i18next";

const tempIngredients: Ingredient[] = [
  { id: 1, name: "Spinach", visible: false },
  { id: 2, name: "Quinoa", visible: false },
  { id: 3, name: "Chickpeas", visible: false },
  { id: 4, name: "Salmon", visible: false },
  { id: 5, name: "Avocado", visible: false },
  { id: 6, name: "Sweet potatoes", visible: false },
  { id: 7, name: "Tomatoes", visible: false },
  { id: 8, name: "Basil", visible: false },
  { id: 9, name: "Feta cheese", visible: false },
  { id: 10, name: "Almonds", visible: false },
  { id: 11, name: "Tofu", visible: false },
  { id: 12, name: "Bell peppers", visible: false },
  { id: 13, name: "Black beans", visible: false },
  { id: 14, name: "Greek yogurt", visible: false },
  { id: 15, name: "Brown rice", visible: false },
];

const HomeComponent = () => {
  const { t } = useTranslation();

  const [ingredients, setIngredients] = useState<Ingredient[]>(tempIngredients);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value;

    let changedIngredients = [...tempIngredients];

    changedIngredients = changedIngredients.filter((ingredient) => {
      return ingredient.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

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

      changedIngredients[ingredientIndex].visible =
        !changedIngredients[ingredientIndex].visible;

      setIngredients(changedIngredients);
    }
  };

  return (
    <>
      <div className="container w-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 w-auto h-24">
            <div className="p-4 prose lg:prose-lg">
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
            <div className="card w-96 h-auto bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{t("PickItems")}</h2>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchChange}
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                  <div className="mt-3 h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map((ingredient) => (
                        <label
                          className="label cursor-pointer mr-1"
                          key={ingredient.id}
                        >
                          <span className="label-text">{ingredient.name}</span>
                          <input
                            type="checkbox"
                            value={ingredient.id}
                            className="checkbox"
                            onChange={handleIngredientPickChange}
                          />
                        </label>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 h-auto bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{t("PickedItems")}</h2>
                <div className="form-control mt-2 mb-2">
                  <div className="h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map((ingredient) => (
                        <div
                          className="bg-base-300 p-3 mb-2 mr-1 rounded-lg"
                          key={ingredient.id}
                          hidden={!ingredient.visible}
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
                  <button className="btn btn-md btn-primary">
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

export default HomeComponent;
