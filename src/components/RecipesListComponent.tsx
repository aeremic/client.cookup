import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IRecipesListProps } from "../models/IRecipesListProps";

const RecipesListComponent = ({ recipes }: IRecipesListProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleLetsCookClick = (id: number): void => {
    navigate(`/cooking?recipeId=${id}`);
  };

  return (
    <div className="gap-6 grid grid-cols-1">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="card sm:card-side bg-base-100 shadow-xl">
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
                <div className="m-1 badge badge-ghost">{t("AndMore")}</div>
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
            <p>{t("WeDidntFindAnyRecepies")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesListComponent;
