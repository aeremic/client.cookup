import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const CommentsComponent = () => {
  const { t } = useTranslation();

  const [queryParameters] = useSearchParams();

  const recipeIdQueryParam: string | null = queryParameters.get("recipeId");
  const recipeId: number =
    recipeIdQueryParam != null ? parseInt(recipeIdQueryParam) : -1;

  return (
    <div className="w-auto sm:w-1/2 container">
      <div className="prose lg:prose-lg mb-3 text-center sm:text-left">
        <h3>{t("Comments")}</h3>
      </div>
      <div className="gap-6 grid grid-cols-1">
        <div className="bg-base-100 shadow-xl card">
          <div className="mx-auto card-body container">
            <div>
              <div className="flex flex-row sm:mb-3 text-left">
                <div className="mb-3 sm:mb-0 sm:basis-1/6 avatar placeholder">
                  <div className="bg-primary rounded-xl w-12 sm:w-16 text-neutral-content">
                    <span className="text-xl">E</span>
                  </div>
                </div>
                <div className="ml-5 sm:ml-0">
                  <div className="prose lg:prose-lg">
                    <h4>eremic andrija</h4>
                  </div>
                  <div className="sm:mt-1 rating rating-sm sm:rating-md">
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-base-200 card">
                <div className="mx-auto card-body container">
                  <div className="prose lg:prose-base">
                    <p>
                      <i>
                        "Adding a splash of red wine to your bolognese sauce not
                        only enhances the flavor but also adds touch of
                        sophistication to your pasta dish! Bon appétit!"
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <div className="flex flex-row sm:mb-3 text-left">
                <div className="mb-3 sm:mb-0 sm:basis-1/6 avatar placeholder">
                  <div className="bg-primary rounded-xl w-12 sm:w-16 text-neutral-content">
                    <span className="text-xl">A</span>
                  </div>
                </div>
                <div className="ml-5 sm:ml-0">
                  <div className="prose lg:prose-lg">
                    <h4>andrija</h4>
                  </div>
                  <div className="sm:mt-1 rating rating-sm sm:rating-md">
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="bg-red-400 mask mask-heart"
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-base-200 card">
                <div className="mx-auto card-body container">
                  <div className="prose lg:prose-base">
                    <p>
                      <i>
                        "Adding a splash of red wine to your bolognese sauce
                        enhances flavor!"
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsComponent;
