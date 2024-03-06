import { useTranslation } from "react-i18next";

const ProfileComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-auto sm:w-1/2 min-h-screen container">
      <div className="prose lg:prose-lg text-center sm:text-left">
        <h3>{t("Profile")}</h3>
      </div>
      <div className="gap-6 grid grid-cols-1">
        <div className="bg-base-100 shadow-xl card">
          <div className="mx-auto card-body container">
            <div className="sm:flex sm:flex-row text-center sm:text-left">
              <div className="mb-3 sm:mb-0 sm:basis-1/5 avatar placeholder">
                <div className="bg-primary rounded-xl w-20 text-neutral-content">
                  <span className="text-xl">AE</span>
                </div>
              </div>
              <div className="sm:basis-4/5">
                <div className="prose lg:prose-lg">
                  <h3>andrija.eremic</h3>
                </div>
                <div className="gap-1 sm:mt-1 rating">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
