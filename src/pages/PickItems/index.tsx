import { ErrorBoundary } from "react-error-boundary";
import PickItemsComponent from "./components/PickItemsComponent";
import ErrorComponent from "../../components/ErrorComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const PickItemsPage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="sm:flex sm:h-screen sm:items-center">
          <PickItemsComponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default PickItemsPage;
