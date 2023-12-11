import { ErrorBoundary } from "react-error-boundary";
import HomeComponent from "./components/HomeComponent";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="sm:flex sm:h-screen sm:items-center">
          <HomeComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default HomePage;
