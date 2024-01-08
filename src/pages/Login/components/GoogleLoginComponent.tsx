import { useGoogleLogin } from "@react-oauth/google";
import { HttpStatusCode } from "axios";
import { externalLogin } from "../../../services/axios/endpoint-calls/users/auth";

const GoogleLoginComponent = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      externalLogin({
        authorizationCode: code,
      }).then((res: any) => {
        if (res && res.status === HttpStatusCode.Ok && res.data) {
          console.log("tokens");
        }
      });
      // const tokens = await axios.post("http://localhost:3001/auth/google", {
      //   code,
      // });
    },
    flow: "auth-code",
  });

  return (
    <div>
      <button className="btn btn-wide" onClick={() => googleLogin()}>
        Sign in with Google 🚀
      </button>
    </div>
  );
};

export default GoogleLoginComponent;
