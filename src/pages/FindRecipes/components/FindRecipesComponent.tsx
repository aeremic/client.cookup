import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getRecommendedRecipes } from "../../../services/axios/endpoint-calls/recipes/recipes";
import { IGetRecommendedRecipes } from "../models/IGetRecommendedRecipes";
import { IRecipeItem } from "../../../models/IRecipeItem";
import { Trans } from "react-i18next";
import RecipesListComponent from "../../../components/RecipesListComponent";

const FindRecipesComponent = () => {
  const [queryParameters] = useSearchParams();

  const picksParam: string | null = queryParameters.get("picks");
  const ingredientPicks =
    picksParam != null
      ? picksParam.split(",").map((pick: string) => Number.parseInt(pick))
      : [];
  const getRecommendedRecipesModel: IGetRecommendedRecipes = {
    pickedIngredients: ingredientPicks,
  };

  const [recommendedRecipes, setRecommendedRecipes] = useState<IRecipeItem[]>(
    []
  );
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

  return (
    <div className="w-auto sm:w-1/2 min-h-screen container">
      {recommendedRecipesLoaded ? (
        <div className="gap-6 grid grid-cols-1">
          <div className="p-4 sm:p-4 prose lg:prose-lg text-center sm:text-left">
            <h3>
              <Trans i18nKey="RecommendedRecipesSubtitle" />
            </h3>
          </div>
          <RecipesListComponent recipes={recommendedRecipes} />
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
