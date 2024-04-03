import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import FindRecipesComponent from "./components/FindRecipesComponent";

const FindRecipesPage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div>
          <FindRecipesComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default FindRecipesPage;
