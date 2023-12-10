import { useState } from "react";
import { Ingredient } from "../models/IIngredient";
import { Trans, useTranslation } from "react-i18next";

const tempIngredients: Ingredient[] = [
  { name: "Spinach", visible: false },
  { name: "Quinoa", visible: false },
  { name: "Chickpeas", visible: false },
  { name: "Salmon", visible: false },
  { name: "Avocado", visible: false },
  { name: "Sweet potatoes", visible: false },
  { name: "Tomatoes", visible: false },
  { name: "Basil", visible: false },
  { name: "Feta cheese", visible: false },
  { name: "Almonds", visible: false },
  { name: "Tofu", visible: false },
  { name: "Bell peppers", visible: false },
  { name: "Black beans", visible: false },
  { name: "Greek yogurt", visible: false },
  { name: "Brown rice", visible: false },
];

const HomeComponent = () => {
  const { t } = useTranslation();

  const [ingredients, setIngredients] = useState<Ingredient[]>(tempIngredients);
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
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                  <div className="mt-3 h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map((ingredient) => (
                        <label className="label cursor-pointer mr-1">
                          <span className="label-text">{ingredient.name}</span>
                          <input type="checkbox" className="checkbox" />
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
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
                    <div className="bg-base-300 p-3 mb-2 mr-1 rounded-lg">
                      <p className="label-text">Item 1</p>
                    </div>
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
