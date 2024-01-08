import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

const LoginCommponent = () => {
  return (
    <div className="container w-auto">
      <div className="card sm:w-96 sm:h-auto bg-base-100 shadow-xl">
        <div className="card-body container mx-auto">
          <h2 className="card-title">Welcome!</h2>
          <p>To explore our recipes, please log in.</p>

          <div className="m-7 mx-auto">
            <GoogleOAuthProvider clientId="479489983758-kr8tqh381pv2ep7l15nku5ihnpatoato.apps.googleusercontent.com">
              <GoogleLoginComponent />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCommponent;
