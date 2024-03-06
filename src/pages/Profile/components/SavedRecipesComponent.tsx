import { useTranslation } from "react-i18next";

const SavedRecipesComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-auto sm:w-1/2 container">
      <div className="gap-6 grid grid-cols-1">
        <div className="bg-base-100 shadow-xl card">
          <div className="mx-auto card-body container">
            <div className="prose lg:prose-lg">
              <h4>Saved recipes</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipesComponent;
