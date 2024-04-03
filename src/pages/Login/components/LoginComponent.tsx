import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { useTranslation } from "react-i18next";

const LoginCommponent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-auto container">
      <div className="bg-base-100 shadow-xl sm:w-96 sm:h-auto card">
        <div className="mx-auto card-body container">
          <h2 className="card-title">{t("Welcome")}</h2>
          <p>{t("ToExploreOurEecipesPleaseLogIn")}</p>
          <div className="m-7 mx-auto">
            <GoogleOAuthProvider clientId="479489983758-kr8tqh381pv2ep7l15nku5ihnpatoato.apps.googleusercontent.com">
              <GoogleLoginComponent />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCommponent;
