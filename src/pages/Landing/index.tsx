import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import LandingComponent from "./components/LandingComponent";

const LandingPage = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="sm:flex sm:h-screen sm:items-center">
          <LandingComponent />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default LandingPage;
