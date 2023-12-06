import { ErrorBoundary } from "react-error-boundary";
import HomeComponent from "./components/HomeComponent";
import ErrorComponent from "../../components/ErrorComponent";

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <HomeComponent />
    </ErrorBoundary>
  );
};

export default HomePage;
