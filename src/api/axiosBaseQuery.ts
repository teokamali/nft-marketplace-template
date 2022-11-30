/*
 *  create by Amin
 *  date 9/25/2021
 *  axiosBaseQuery
 *  customizing basicQuery for RTKToolkit query with axios
 */

import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import baseApi from "./axiosInstance";
import { RootState } from "src/redux/store";
// import store from "src/redux/store";

const axiosInstance = baseApi._apiCore;

const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: "" }
    ): BaseQueryFn<
        {
            url: string;
            headers?: { "Content-Type"?: string };
            sendAuthorization?: boolean;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
    async (
        { url, headers = {}, sendAuthorization = true, method, data, params },
        { getState }
    ) => {
        try {
            const token = (getState() as RootState).auth.accessToken;
            const auth = sendAuthorization
                ? { Authorization: `Bearer ${token}` }
                : {};
            const result = await axiosInstance({
                url: baseUrl + url,
                method,
                data,
                params,
                headers: {
                    ...auth,
                    ...headers,
                },
            });
            return {
                data: result.data,
                message: result.data.message,
                status: result.data.status,
            };
        } catch (axiosError) {
            let err = axiosError as AxiosError;
            // 👇️ ts-ignore ignores any ts errors on the next line
            // @ts-ignore
            const keysError = err.response?.data?.errors;
            const defaultError =
                "متاسفانه خطایی پیش آمده لطفا دوباره تلاش کنید.";
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                    message:
                        (keysError?.length > 0
                            ? // 👇️ ts-ignore ignores any ts errors on the next line
                              // @ts-ignore
                              err.response?.data?.errors[keysError[0]][0]
                            : null) ||
                        // 👇️ ts-ignore ignores any ts errors on the next line
                        // @ts-ignore
                        err.response?.data?.message ||
                        defaultError,
                },
            };
        }
    };

export default axiosBaseQuery;
