import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { useSearchParams } from "react-router-dom";
import { HttpStatusCode } from "axios";
import {
  getRecipe,
  saveRecipe,
} from "../../../services/axios/endpoint-calls/recipes/recipes";
import { useTranslation } from "react-i18next";
import useCurrentUserIdentifier from "../../../hooks/UseCurrentUserIdentifier";

const CookingComponent = () => {
  const { t } = useTranslation();

  const [queryParameters] = useSearchParams();

  const recipeIdQueryParam: string | null = queryParameters.get("recipeId");
  const recipeId: number =
    recipeIdQueryParam != null ? parseInt(recipeIdQueryParam) : -1;

  const [recipe, setRecipe] = useState<IRecipe>();
  const [isRecipeSaved, setIsRecipeSaved] = useState<boolean>(false);
  const [isRecipeLoaded, setIsRecipeLoaded] = useState<boolean>(false);

  const currentUserGuid = useCurrentUserIdentifier();

  useEffect(() => {
    if (recipeId > 0 && currentUserGuid) {
      getRecipe(recipeId, currentUserGuid).then((res) => {
        if (res && res.status === HttpStatusCode.Ok && res.data) {
          setRecipe(res.data);
          setIsRecipeLoaded(true);
        }
      });
    }
  }, [recipeId, currentUserGuid]);

  useEffect(() => {
    if (recipe) {
      setIsRecipeSaved(recipe.isRecipeLiked);
    }
  }, [recipe]);

  const handleSaveRecipeClick = () => {
    if (recipeId > 0 && currentUserGuid) {
      setIsRecipeSaved(!isRecipeSaved);
      saveRecipe(recipeId, currentUserGuid).then((res) => {
        if (!res || res.status != HttpStatusCode.Ok || !res.data) {
          setIsRecipeSaved(!isRecipeLoaded);
        }
      });
    }
  };

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
      {isRecipeLoaded && recipe ? (
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
              <div>
                {isRecipeSaved ? (
                  <button
                    className="mt-1 btn btn-md btn-secondary"
                    onClick={() => {
                      handleSaveRecipeClick();
                    }}
                  >
                    <svg
                      className="w-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                    Saved
                  </button>
                ) : (
                  <button
                    className="mt-1 btn btn-md btn-outline btn-secondary"
                    onClick={() => {
                      handleSaveRecipeClick();
                    }}
                  >
                    <svg
                      className="w-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"
                      />
                    </svg>
                    Save
                  </button>
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
