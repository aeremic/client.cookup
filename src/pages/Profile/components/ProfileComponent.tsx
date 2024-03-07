import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IUser } from "../models/IUser";
import { HttpStatusCode } from "axios";
import { getUserByEmail } from "../../../services/axios/endpoint-calls/users/users";
import useCurrentUserIdentifier from "../../../hooks/UseCurrentUserIdentifier";

const ProfileComponent = () => {
  const { t } = useTranslation();

  const currentUserEmail = useCurrentUserIdentifier();

  const [user, setUser] = useState<IUser>();
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUserEmail) {
        getUserByEmail(currentUserEmail).then((res) => {
          if (res && res.status === HttpStatusCode.Ok && res.data) {
            setUser(res.data);
            setUserLoaded(true);
          }
        });
      }
    };

    fetchUser();
  }, [currentUserEmail]);

  return (
    <div className="w-auto sm:w-1/2 container">
      <div className="prose lg:prose-lg text-center sm:text-left">
        <h3>{t("Profile")}</h3>
      </div>
      <div className="gap-6 grid grid-cols-1">
        <div className="bg-base-100 shadow-xl card">
          <div className="mx-auto card-body container">
            {userLoaded ? (
              <div className="sm:flex sm:flex-row text-center sm:text-left">
                <div className="mb-3 sm:mb-0 sm:basis-1/5 avatar placeholder">
                  <div className="bg-primary rounded-xl w-20 text-neutral-content">
                    <span className="text-xl">
                      {user?.username[0]?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="sm:basis-4/5">
                  <div className="prose lg:prose-lg">
                    <h3>{user?.username}</h3>
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
            ) : (
              <span className="m-auto loading loading-lg loading-spinner"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
