import { createRef } from "react";
import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const cancelTokenSource: any = createRef();

// @ts-ignore
cancelTokenSource.current = axios.CancelToken.source();

interface OptionsModel {
  headers?: AxiosRequestHeaders | {};
  data?: {};
  needAccessToken?: boolean;
  podService?: boolean;
  coreService?: boolean;
}

const defaultOptions: OptionsModel = {
  headers: {},
  data: {},
};

const ApiCaller = (options = defaultOptions) => {
  const axiosInstance = axios.create({
    headers: {
      ...options?.headers,
      "content-type": "application/json",
    },
    data: {
      ...options?.data,
    },
    // responseType: 'json',
    cancelToken: cancelTokenSource.current && cancelTokenSource.current.token,
  });

  axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<any> => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { response } = error;

      return Promise.reject(response ?? error);
    },
  );

  return axiosInstance;
};

export type ApiResponseModel<T> = AxiosResponse<T>;

export default ApiCaller;
