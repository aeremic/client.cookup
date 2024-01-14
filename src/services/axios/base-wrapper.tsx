import { HttpStatusCode } from "axios";
import { axiosGet, axiosGetById, axiosPost, axiosRemove } from "./base";

export const get = async (endpoint: string, useAuthHeader = true) => {
  const res = await axiosGet(endpoint, useAuthHeader);
  if (res && res.status === HttpStatusCode.Forbidden) {
  }

  return res;
};

export const getById = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const res = await axiosGetById(endpoint, id, useAuthHeader);
  if (res && res.status === HttpStatusCode.Forbidden) {
  }

  return res;
};

export const post = async (
  endpoint: string,
  modelToPost: any,
  useAuthHeader = true,
  contentType = "application/json"
) => {
  const res = await axiosPost(
    endpoint,
    modelToPost,
    useAuthHeader,
    contentType
  );
  if (res && res.status === HttpStatusCode.Forbidden) {
  }

  return res;
};

export const remove = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const res = await axiosRemove(endpoint, id, useAuthHeader);
  if (res && res.status === HttpStatusCode.Forbidden) {
  }

  return res;
};
