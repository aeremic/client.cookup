import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IRecipeItem } from "../../../models/IRecipeItem";
import RecipesListComponent from "../../../components/RecipesListComponent";

const SavedRecipesComponent = () => {
  const { t } = useTranslation();

  const [savedRecipes, setsavedRecipes] = useState<IRecipeItem[]>([]);
  const [savedRecipesLoaded, setSavedRecipesLoaded] = useState<boolean>(false);

  return (
    <>
      {savedRecipesLoaded && (
        <div className="w-auto sm:w-1/2 container">
          <div className="gap-6 grid grid-cols-1">
            <div className="bg-base-100 shadow-xl card">
              <div className="mx-auto card-body container">
                <div className="prose lg:prose-lg">
                  <h4>{t("SavedRecipes")}</h4>
                  <RecipesListComponent recipes={savedRecipes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedRecipesComponent;
