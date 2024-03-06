import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRecommendedRecipes } from "../../../services/axios/endpoint-calls/recipes/recipes";
import { IGetRecommendedRecipes } from "../models/IGetRecommendedRecipes";
import { IRecommendedRecipe } from "../models/IRecommendedRecipe";
import { Trans, useTranslation } from "react-i18next";

const FindRecipesComponent = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [queryParameters] = useSearchParams();

  const picksParam: string | null = queryParameters.get("picks");
  const ingredientPicks =
    picksParam != null
      ? picksParam.split(",").map((pick: string) => Number.parseInt(pick))
      : [];
  const getRecommendedRecipesModel: IGetRecommendedRecipes = {
    pickedIngredients: ingredientPicks,
  };

  const [recommendedRecipes, setRecommendedRecipes] = useState<
    IRecommendedRecipe[]
  >([]);
  const [recommendedRecipesLoaded, setRecommendedRecipesLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    getRecommendedRecipes(getRecommendedRecipesModel).then((res) => {
      if (res && res.status === HttpStatusCode.Ok && res.data) {
        setRecommendedRecipes(res.data ?? []);
        setRecommendedRecipesLoaded(true);
      }
    });
  }, []);

  const handleLetsCookClick = (id: number): void => {
    navigate(`/cooking?recipeId=${id}`);
  };

  return (
    <div className="w-auto sm:w-1/2 min-h-screen container">
      {recommendedRecipesLoaded ? (
        <div className="gap-6 grid grid-cols-1">
          <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
            <h3>
              <Trans i18nKey="RecommendedRecipesSubtitle" />
            </h3>
          </div>
          <>
            {recommendedRecipes.length > 0 ? (
              recommendedRecipes.map((recipe, index) => (
                <div
                  key={index}
                  className="card sm:card-side bg-base-100 shadow-xl"
                >
                  {recipe.thumbnailPath && (
                    <figure>
                      <img
                        className="w-96 sm:w-80 h-full"
                        src={recipe.thumbnailPath}
                      />
                    </figure>
                  )}
                  <div className="sm:max-w-md card-body">
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
                      <div className="m-1 badge badge-ghost">
                        {t("AndMore")}
                      </div>
                    </div>
                    <div className="gap-1 rating">
                      <input
                        type="radio"
                        name="rating-3"
                        className="bg-red-400 mask mask-heart"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="bg-red-400 mask mask-heart"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="bg-red-400 mask mask-heart"
                        checked
                        readOnly
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="bg-red-400 mask mask-heart"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="bg-red-400 mask mask-heart"
                      />
                    </div>
                    <div className="justify-end card-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleLetsCookClick(recipe.id);
                        }}
                      >
                        {t("LetsCook")}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card sm:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{t("NoRecipesFound")}</h2>
                  <p>{t("WeDidntFindAnyRecepiesWithThoseIngredients")}</p>
                </div>
              </div>
            )}
          </>
        </div>
      ) : (
        <>
          <span className="flex items-center m-auto h-screen loading loading-lg loading-spinner"></span>
        </>
      )}
    </div>
  );
};

export default FindRecipesComponent;
