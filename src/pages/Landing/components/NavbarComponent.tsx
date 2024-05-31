import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useCurrentUserIdentifier from "../../../hooks/UseCurrentUserIdentifier";

// TODO: Make this common component for landing page
const NavbarComponent = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const currentUserGuid = useCurrentUserIdentifier();

  const landingPageClick = () => {
    navigate({
      pathname: "/",
    });
  };

  const loginClick = () => {
    navigate({
      pathname: "/login",
    });
  };

  return (
    <div className="bg-base-100 navbar">
      <div className="flex-1">
        <a className="text-xl btn btn-ghost">{t("Title")}</a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a onClick={landingPageClick}>
              <u>{t("Homepage")}</u>
            </a>
          </li>
          <li>
            <a onClick={loginClick}>
              {currentUserGuid ? t("PickItems") : t("Login")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
