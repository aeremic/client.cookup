import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileComponent from "./components/ProfileComponent";
import SavedRecipesComponent from "./components/SavedRecipesComponent";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="min-h-screen">
          <div className="mb-6 sm:mb-9">
            <ProfileComponent />
          </div>
          <div>
            <SavedRecipesComponent />
          </div>
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default ProfilePage;
