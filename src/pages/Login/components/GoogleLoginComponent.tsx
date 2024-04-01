import { useGoogleLogin } from "@react-oauth/google";
import { HttpStatusCode } from "axios";
import { externalLogin } from "../../../services/axios/endpoint-calls/users/auth";
import { Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { setCurrentUserData } from "../../../store/local-storage-auth-helper";
import { useNavigate } from "react-router-dom";

const GoogleLoginComponent = () => {
  const navigate = useNavigate();

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
          setCurrentUserData(JSON.stringify(res.data.token));

          navigate(`/pickitems`, {
            replace: true,
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
            className="shadow-xl btn btn-wide"
            onClick={() => {
              setLoading(true);
              googleLogin();
            }}
          >
            <Trans i18nKey="SignInWithGoogle" />
          </button>
        </div>
      ) : (
        <span className="loading loading-lg loading-spinner"></span>
      )}
    </>
  );
};

export default GoogleLoginComponent;
