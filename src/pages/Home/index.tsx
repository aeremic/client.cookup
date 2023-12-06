import { ErrorBoundary } from "react-error-boundary";
import HomeComponent from "./components/HomeComponent";
import ErrorComponent from "../../components/ErrorComponent";

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <div className="flex h-screen items-center">
        <HomeComponent />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
