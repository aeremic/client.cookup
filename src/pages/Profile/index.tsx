import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileComponent from "./components/ProfileComponent";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div>
          <ProfileComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default ProfilePage;
