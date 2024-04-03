import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from "./local-storage";

export const setCurrentUserData = (token: string) => {
  setInLocalStorage("accessToken", token);
};

export const getCurrentUserData = () => {
  const token = getFromLocalStorage("accessToken");

  let parsedToken = undefined;
  if (token) {
    parsedToken = JSON.parse(token);
  }

  return parsedToken != undefined ? parseJwt(parsedToken) : undefined;
};

export const removeCurrentUserData = () => {
  removeFromLocalStorage("accessToken");
};

const parseJwt = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
