import { getItemByKey } from "../store/localStorage";

export const createAuthHeader = () => {
  const accessToken = getItemByKey("accessToken");
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
