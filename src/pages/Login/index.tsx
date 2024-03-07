import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import LoginCommponent from "./components/LoginComponent";

const LoginPage = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="flex items-center min-h-screen">
          <LoginCommponent />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default LoginPage;
