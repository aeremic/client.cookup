import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import CookingComponent from "./components/CookingComponent";
import CommentsComponent from "./components/CommentsComponent";

const CookingPage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div>
          <CookingComponent />
        </div>
        <div>
          <CommentsComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default CookingPage;
