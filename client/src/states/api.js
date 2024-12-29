import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Customers", "Menu", "Orders"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/api/general/user/${id}`,
      providesTags: ["User"],
    }),
    getCustomers: build.query({
      query: () => "/api/customer",
      providesTags: ["Customers"],
    }),
    getMenu: build.query({
      query: () => "/api/menu",
      providesTags: ["Menu"],
    }),
    getOrders: build.query({
      query: () => "/api/order",
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCustomersQuery,
  useGetMenuQuery,
  useGetOrdersQuery,
} = api;
