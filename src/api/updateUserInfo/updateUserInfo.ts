import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";
import { UserInfo, Response } from "src/types/types";

export const updateUserInfoAPI = createApi({
    reducerPath: "updateUserInfoAPI",
    baseQuery: axiosBaseQuery({
        baseUrl: "",
    }),
    tagTypes: ["updateUserInfoAPI"],
    endpoints: builder => ({
        getListPosts: builder.mutation<Response, UserInfo>({
            query: data => ({
                url: "/profiles/update",
                method: "POST",
                sendAuthorization: true,
                data: data,
            }),
        }),
    }),
});

export const { useGetListPostsMutation } = updateUserInfoAPI;
