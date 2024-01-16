import { getCurrentUserData } from "../store/local-storage-auth-helper";

const useCurrentUserIdentifier = (): string | null => {
  const userData = getCurrentUserData();
  return userData != null
    ? userData[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ]
    : null;
};

export default useCurrentUserIdentifier;
