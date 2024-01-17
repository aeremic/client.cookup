import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { createAuthHeader } from "./headers";
import { removeCurrentUserData } from "../../store/local-storage-auth-helper";

export const API = import.meta.env.VITE_API_URL;

export const get = async (endpoint: string, useAuthHeader = true) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.get(URL, { headers: header });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

export const getFile = async (endpoint: string, useAuthHeader = true) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.get(URL, {
    headers: header,
    responseType: "blob",
  });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

export const getFileById = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.get(`${URL}/${id}`, {
    headers: header,
    responseType: "blob",
  });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

export const getById = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.get(`${URL}/${id}`, {
    headers: header,
  });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

export const post = async (
  endpoint: string,
  modelToPost: any,
  useAuthHeader = true,
  contentType = "application/json"
) => {
  const header = { Authorization: "", "Content-Type": contentType };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.post(URL, modelToPost, {
    headers: header,
  });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

export const remove = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  const endpointCallResult = await axios.delete(`${URL}/${id}`, {
    headers: header,
  });

  checkCurrentUserData(endpointCallResult);

  return endpointCallResult;
};

const checkCurrentUserData = (res: AxiosResponse<any, any>) => {
  if (res && res.status === HttpStatusCode.Unauthorized) {
    removeCurrentUserData();
  }
};
