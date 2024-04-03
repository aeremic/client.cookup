import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IRecipeItem } from "../../../models/IRecipeItem";
import RecipesListComponent from "../../../components/RecipesListComponent";
import { HttpStatusCode } from "axios";
import useCurrentUserIdentifier from "../../../hooks/UseCurrentUserIdentifier";
import { getSavedRecipes } from "../../../services/axios/endpoint-calls/recipes/recipes";

const SavedRecipesComponent = () => {
  const { t } = useTranslation();

  const currentUserGuid = useCurrentUserIdentifier();

  const [savedRecipes, setSavedRecipes] = useState<IRecipeItem[]>([]);
  const [savedRecipesLoaded, setSavedRecipesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (currentUserGuid) {
        getSavedRecipes(currentUserGuid).then((res) => {
          if (res && res.status === HttpStatusCode.Ok && res.data) {
            setSavedRecipes(res.data);
            setSavedRecipesLoaded(true);
          }
        });
      }
    };

    fetchSavedRecipes();
  }, [currentUserGuid]);

  return (
    <>
      {savedRecipesLoaded && (
        <div className="w-auto sm:w-1/2 container">
          <div className="prose lg:prose-lg mb-3 text-center sm:text-left">
            <h3>{t("SavedRecipes")}</h3>
          </div>
          <RecipesListComponent recipes={savedRecipes} />
        </div>
      )}
    </>
  );
};

export default SavedRecipesComponent;
