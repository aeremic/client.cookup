import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { useSearchParams } from "react-router-dom";
import { HttpStatusCode } from "axios";
import { getRecipe } from "../../../services/axios/endpoint-calls/recipes/recipes";
import { useTranslation } from "react-i18next";

const CookingComponent = () => {
  const { t } = useTranslation();

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

  const parseComplexity = (complexity: number): string => {
    let result: string;

    switch (complexity) {
      case 0: {
        result = "Easy";
        break;
      }
      case 1: {
        result = "Moderate";
        break;
      }
      case 2: {
        result = "Hard";
        break;
      }
      default: {
        result = "";
        break;
      }
    }

    return result;
  };

  return (
    <div className="w-auto sm:w-1/2 min-h-screen container">
      {recipe && isRecipeLoaded ? (
        <div className="gap-6 grid grid-cols-1">
          <div className="bg-base-100 shadow-xl card">
            {recipe.thumbnailPath && (
              <figure>
                <img
                  className="shadow-xl sm:rounded-md w-full sm:w-96"
                  src={recipe.thumbnailPath}
                />
              </figure>
            )}
            <div className="mx-auto card-body container">
              <h2 className="card-title">{recipe.name}</h2>
              <div>
                {/* <div className="mr-1 badge badge-ghost">15 min</div> */}
                {recipe.complexity && (
                  <div className="mr-1 badge badge-ghost">
                    {parseComplexity(recipe.complexity)}
                  </div>
                )}
                {recipe.calories && (
                  <div className="mr-1 badge badge-ghost">
                    {recipe.calories} {t("kcal")}
                  </div>
                )}
                {recipe.plateQuantity && (
                  <div className="mr-1 badge badge-ghost">
                    {recipe.plateQuantity} {t("persons")}
                  </div>
                )}
              </div>
              <div className="divider"></div>
              <div>
                {recipe.ingredients && recipe.ingredients.length > 0 ? (
                  <>
                    <p className="mb-3">{t("Ingredients")}</p>
                    <div className="border-2 m-1 rounded-2xl overflow-x-auto">
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
                {recipe.steps && recipe.steps.length > 0 ? (
                  <>
                    <p className="mb-3">{t("Procedure")}</p>
                    <div className="border-2 m-1 rounded-2xl overflow-x-auto">
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
          <span className="flex items-center m-auto h-screen loading loading-lg loading-spinner"></span>
        </>
      )}
    </div>
  );
};

export default CookingComponent;
