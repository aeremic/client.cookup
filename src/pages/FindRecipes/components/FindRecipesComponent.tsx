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
    navigate(`/cooking/${id}`);
  };

  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      {recommendedRecipesLoaded ? (
        <div className="grid grid-cols-1 gap-6">
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
                      <div className="badge badge-ghost m-1">
                        {t("AndMore")}
                      </div>
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
          <span className="loading loading-spinner loading-lg flex h-screen items-center m-auto"></span>
        </>
      )}
    </div>
  );
};

export default FindRecipesComponent;
