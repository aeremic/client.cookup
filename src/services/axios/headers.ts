import { getFromLocalStorage } from "../../store/local-storage";

export const createAuthHeader = () => {
  const accessToken = getFromLocalStorage("accessToken");
  let parsedAccessToken = null;

  if (accessToken) {
    parsedAccessToken = JSON.parse(accessToken);
  }

  if (parsedAccessToken) {
    return "Bearer " + parsedAccessToken;
  } else {
    return "";
  }
};
