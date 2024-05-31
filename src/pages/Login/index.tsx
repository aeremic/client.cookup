import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ErrorComponent";
import LoginCommponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const LoginPage = () => {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <div className="flex items-center min-h-screen">
          <LoginCommponent />
        </div>
      </ErrorBoundary>
      <FooterComponent />
    </>
  );
};

export default LoginPage;
