import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import LandingComponent from "./components/LandingComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const LandingPage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="sm:flex sm:items-center sm:h-screen">
          <LandingComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default LandingPage;
