import axios from "axios";
import { createAuthHeader } from "./headers";

export const API = import.meta.env.VITE_API_URL;

export const axiosGet = async (endpoint: string, useAuthHeader: boolean) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(URL, { headers: header });
};

export const axiosGetById = async (
  endpoint: string,
  id: number,
  useAuthHeader: boolean
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(`${URL}/${id}`, { headers: header });
};

export const axiosPost = async (
  endpoint: string,
  modelToPost: any,
  useAuthHeader: boolean,
  contentType: string
) => {
  const header = { Authorization: "", "Content-Type": contentType };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.post(URL, modelToPost, { headers: header });
};

export const axiosRemove = async (
  endpoint: string,
  id: number,
  useAuthHeader: boolean
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = createAuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.delete(`${URL}/${id}`, { headers: header });
};
