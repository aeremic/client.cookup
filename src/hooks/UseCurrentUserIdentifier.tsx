import { getCurrentUserData } from "../store/local-storage-auth-helper";

const useCurrentUserIdentifier = (): string | null => {
  const userData = getCurrentUserData();
  return userData != null ? userData["identity/claims/userguid"] : null;
};

export default useCurrentUserIdentifier;
