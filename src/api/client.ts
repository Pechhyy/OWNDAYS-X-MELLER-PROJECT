import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/constants/constants";

const REQUEST_TIMEOUT_MS = 10000;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: { Accept: "application/json" },
});

apiClient.interceptors.request.use((config) => {
  if (import.meta.env.DEV) {
    console.debug(
      `[api] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
    );
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(new Error(getErrorMessage(error)));
    }

    return Promise.reject(error);
  },
);

const getErrorMessage = (error: AxiosError): string => {
  if (error.code === "ECONNABORTED") {
    return "The request timed out. Please try again.";
  }

  if (!error.response) {
    return "Network error. Please check your connection.";
  }

  const status = error.response.status;

  if (status >= 500) {
    return `Server error (${status}). Please try again later.`;
  }

  return `Request failed (${status}).`;
};
