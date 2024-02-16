import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserLoginData, UserLoginResponse } from "../../types/types";

export const loginUserApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<UserLoginResponse, UserLoginData>({
            query: (userData) => ({
                url: "login",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = loginUserApi;