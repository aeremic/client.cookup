import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getRecommendedRecipes } from "../../../services/axios/endpoint-calls/recipes/recipes";
import { IGetRecommendedRecipes } from "../models/IGetRecommendedRecipes";
import { IRecommendedRecipe } from "../models/IRecommendedRecipe";

const FindRecipesComponent = () => {
  const [queryParameters] = useSearchParams();

  const picksParam: string | null = queryParameters.get("picks");
  const ingredientPicks =
    picksParam != null
      ? picksParam.split(",").map((pick: string) => Number.parseInt(pick))
      : [];

  const [recommendedRecipes, setRecommendedRecipes] = useState<
    IRecommendedRecipe[]
  >([]);

  useEffect(() => {
    const modelToPost: IGetRecommendedRecipes = {
      pickedIngredients: ingredientPicks,
    };

    getRecommendedRecipes(modelToPost).then((res) => {
      if (
        res &&
        res.status === HttpStatusCode.Ok &&
        res.data &&
        res.data.length > 0
      ) {
        setRecommendedRecipes(res.data ?? []);
      }
    });
  }, []);

  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
          <h3>These are the recipe picks that we recommend for you.</h3>
        </div>
        {recommendedRecipes.length > 0 ? (
          recommendedRecipes.map((recipe, index) => (
            <div
              key={index}
              className="card sm:card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-96 sm:w-80 h-full"
                  src="https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg"
                />
              </figure>
              <div className="card-body sm:max-w-md">
                <h2 className="card-title">{recipe.name}</h2>
                <div>
                  <p className="mb-1">{recipe.description}</p>
                  {recipe.ingredients.length > 0 ? (
                    recipe.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className={
                          index < 2 ? "badge badge-accent m-1" : "hidden"
                        }
                      >
                        {ingredient.name}
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                  <div className="badge badge-ghost m-1">& more</div>
                </div>
                <div className="rating gap-1">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Let's cook!</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>No recipes found :(</>
        )}
      </div>
    </div>
  );
};

export default FindRecipesComponent;
