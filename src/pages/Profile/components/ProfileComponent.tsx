import { useTranslation } from "react-i18next";

const ProfileComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="container min-h-screen w-auto sm:w-1/2">
      <div className="prose lg:prose-lg text-center sm:text-left">
        <h3>{t("Profile")}</h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body container mx-auto">
            <div className="sm:flex sm:flex-row text-center sm:text-left">
              <div className="mb-3 sm:mb-0 sm:basis-1/5 avatar placeholder">
                <div className="bg-primary text-neutral-content rounded-xl w-20">
                  <span className="text-xl">AE</span>
                </div>
              </div>
              <div className="sm:basis-4/5">
                <div className="prose lg:prose-lg">
                  <h3>andrija.eremic</h3>
                </div>
                <div className="rating gap-1 sm:mt-1">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
