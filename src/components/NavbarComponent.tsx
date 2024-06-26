import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { removeCurrentUserData } from "../store/local-storage-auth-helper";

const NavbarComponent = () => {
  const { t } = useTranslation();

  const onLogoutClick = () => {
    removeCurrentUserData();
  };

  return (
    <div className="bg-base-100 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm"
          >
            <li>
              <Link to="/">{t("Homepage")}</Link>
            </li>
            <li>
              <Link to="/pickitems">{t("PickItems")}</Link>
            </li>
            <li>
              <Link to="/profile">{t("Profile")}</Link>
            </li>
            <li>
              <Link to="/" onClick={onLogoutClick}>
                {t("Logout")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl btn btn-ghost">{t("Title")}</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {/* <button className="btn btn-circle btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-primary badge-xs indicator-item"></span>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default NavbarComponent;
