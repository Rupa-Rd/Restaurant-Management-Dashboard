import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.REACT_APP_BASE_URL);

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL || "https://admin-dashboard-server-mssm.onrender.com"}),
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
