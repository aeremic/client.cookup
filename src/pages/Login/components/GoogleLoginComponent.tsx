import { useGoogleLogin } from "@react-oauth/google";
import { HttpStatusCode } from "axios";
import { externalLogin } from "../../../services/axios/endpoint-calls/users/auth";
import { Trans } from "react-i18next";
import { setItemByKey } from "../../../services/store/localStorage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const GoogleLoginComponent = () => {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(false);
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      externalLogin({
        authorizationCode: code,
      }).then((res: any) => {
        if (res && res.status === HttpStatusCode.Ok && res.data) {
          setItemByKey("accessToken", JSON.stringify(res.data.token));

          setUser({
            email: "test",
            role: "test",
            username: "test",
            isAuthenticated: true,
          });
        }

        setLoading(false);
      });
    },
    flow: "auth-code",
  });

  return (
    <>
      {!loading ? (
        <div>
          <button
            className="btn btn-wide"
            onClick={() => {
              setLoading(true);
              googleLogin();
            }}
          >
            <Trans i18nKey="SignInWithGoogle" />
          </button>
        </div>
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </>
  );
};

export default GoogleLoginComponent;
