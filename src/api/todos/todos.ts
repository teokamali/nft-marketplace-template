import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";
import { Todo } from "src/types/types";

export const todoAPI = createApi({
    reducerPath: "todoAPI",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    tagTypes: ["Todo"],
    endpoints: builder => ({
        getTodoList: builder.query<Todo[], void>({
            query: () => ({
                url: `/todos`,
                method: "Get",
                sendAuthorization: false,
            }),
        }),
        getTodoById: builder.query<Todo, number>({
            query: id => ({
                url: `/todos/${id}`,
                method: "Get",
                sendAuthorization: false,
                data: { id: id },
            }),
        }),
    }),
});

export const { useGetTodoByIdQuery, useGetTodoListQuery } = todoAPI;
