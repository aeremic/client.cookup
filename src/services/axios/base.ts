import axios from "axios";
import { AuthHeader } from "./headers";

export const API = import.meta.env.VITE_API_URL;

export const get = async (endpoint: string, useAuthHeader = true) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(URL, { headers: header });
};

export const getFile = async (endpoint: string, useAuthHeader = true) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(URL, { headers: header, responseType: "blob" });
};

export const getFileById = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(`${URL}/${id}`, { headers: header, responseType: "blob" });
};

export const getById = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.get(`${URL}/${id}`, { headers: header });
};

export const post = async (
  endpoint: string,
  modelToPost: never,
  useAuthHeader = true,
  contentType = "application/json"
) => {
  const header = { Authorization: "", "Content-Type": contentType };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.post(URL, modelToPost, { headers: header });
};

export const remove = async (
  endpoint: string,
  id: number,
  useAuthHeader = true
) => {
  const header = { Authorization: "" };
  if (useAuthHeader) {
    header.Authorization = AuthHeader();
  }

  const URL: string = API + endpoint;
  return axios.delete(`${URL}/${id}`, { headers: header });
};
