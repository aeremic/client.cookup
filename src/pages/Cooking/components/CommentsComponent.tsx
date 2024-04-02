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
      <div className="bg-base-100 shadow-xl mt-4 card">
        <div className="mx-auto card-body container">
          <div>
            <div className="flex flex-row sm:mb-3 text-left"></div>
            <div className="bg-base-200 card">
              <div className="sm:text-right mx-auto text-center card-body container">
                <div>
                  <label className="form-control w-full">
                    <div className="label">
                      <div className="prose lg:prose-base">
                        <span className="label-text">Leave your comment</span>
                      </div>
                    </div>
                    <span>
                      <textarea
                        className="textarea-bordered w-full textarea"
                        placeholder="Comment"
                      ></textarea>
                      <div className="mt-4 sm:mt-4">
                        <div className="sm:mt-1 rating rating-md sm:rating-md">
                          <input
                            type="radio"
                            name="rating-5"
                            className="bg-red-400 mask mask-heart"
                            disabled={false}
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="bg-red-400 mask mask-heart"
                            disabled={false}
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="bg-red-400 mask mask-heart"
                            disabled={false}
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="bg-red-400 mask mask-heart"
                            disabled={false}
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="bg-red-400 mask mask-heart"
                            disabled={false}
                          />
                        </div>
                      </div>
                      <button
                        className="shadow-xl mt-4 btn btn-md btn-primary"
                        onClick={() => {}}
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
                        {t("Post comment")}
                      </button>
                    </span>
                  </label>
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
