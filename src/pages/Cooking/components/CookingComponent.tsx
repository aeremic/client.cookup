import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { useSearchParams } from "react-router-dom";
import { HttpStatusCode } from "axios";
import { getRecipe } from "../../../services/axios/endpoint-calls/recipes/recipes";

const CookingComponent = () => {
  const [queryParameters] = useSearchParams();

  const recipeIdQueryParam: string | null = queryParameters.get("recipeId");
  const recipeId: number =
    recipeIdQueryParam != null ? parseInt(recipeIdQueryParam) : -1;

  const [recipe, setRecipe] = useState<IRecipe>();
  const [isRecipeLoaded, setIsRecipeLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (recipeId > 0) {
      getRecipe(recipeId).then((res) => {
        if (res && res.status === HttpStatusCode.Ok && res.data) {
          setRecipe(res.data);
          setIsRecipeLoaded(true);
        }
      });
    }
  }, [recipeId]);

  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      {recipe && isRecipeLoaded ? (
        <div className="grid grid-cols-1 gap-6">
          <div className="text-center"></div>
          <div className="card sm:card-side bg-base-100 shadow-xl">
            <div className="card-body container mx-auto">
              <h2 className="card-title">{recipe.name}</h2>
              <div>
                <div className="badge badge-ghost mr-1">15 min</div>
                <div className="badge badge-ghost mr-1">Medium</div>
                <div className="badge badge-ghost mr-1">325 kcal</div>
              </div>
              <div className="divider"></div>
              <div>
                {recipe.ingredients.length > 0 ? (
                  <>
                    <div>Ingredients</div>
                    <div className="m-1 border-2 rounded-2xl overflow-x-auto">
                      <table className="table table-zebra">
                        <tbody>
                          {recipe.ingredients.map((ingredient, index) => (
                            <tr key={index}>
                              <th>{index + 1}</th>
                              <td>{ingredient.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="divider"></div>
              <div>
                {recipe.steps.length > 0 ? (
                  <>
                    <div>Procedure</div>
                    <div className="m-1 border-2 rounded-2xl overflow-x-auto">
                      <table className="table table-zebra">
                        <tbody>
                          {recipe.steps.map((step, index) => (
                            <tr key={index}>
                              <th>{index + 1}</th>
                              <td>{step.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <span className="loading loading-spinner loading-lg flex h-screen items-center m-auto"></span>
        </>
      )}
    </div>
  );
};

export default CookingComponent;
