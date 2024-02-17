import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loggedUserApi = createApi({
    reducerPath: "loggedApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
    endpoints: (builder) => ({
        getLoggedUser: builder.query({
            query: () => "users/2",
        }),
    }),
});

export const { useGetLoggedUserQuery } = loggedUserApi;
