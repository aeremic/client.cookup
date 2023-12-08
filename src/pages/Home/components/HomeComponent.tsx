import { useState } from "react";
import { Ingredient } from "../models/IIngredient";

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
                <i>Choose</i> what you have in fridge and craft your next
                culinary <b>masterpiece</b>!
              </h3>
            </div>
          </div>
          <div>
            <div className="card w-96 h-auto bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Pick items that you already have</h2>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                  <div className="mt-3 h-56 overflow-y-auto">
                    {ingredients && ingredients.length > 0 ? (
                      ingredients.map((ingredient) => (
                        <label className="label cursor-pointer">
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
                <h2 className="card-title">Picked items</h2>
                <div className="form-control mt-2 mb-2">
                  <div className="h-56 overflow-y-auto">
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 1</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 2</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Item 3</span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-md btn-primary">Buy Now</button>
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
