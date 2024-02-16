import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserRegisterData, UserRegistrationResponse } from "../../types/types";

export const registerUserApi = createApi({
    reducerPath: "registerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<UserRegistrationResponse, UserRegisterData>({
            query: (userData) => ({
                url: "register",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = registerUserApi;