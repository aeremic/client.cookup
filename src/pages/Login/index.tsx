import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import LoginCommponent from "./components/LoginComponent";

const LoginPage = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="sm:flex sm:h-screen sm:items-center">
          <LoginCommponent />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default LoginPage;
