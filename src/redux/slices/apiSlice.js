// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "",
// });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["User", "House"],
//   endpoints: (builder) => ({}),
// });

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "House"],
  endpoints: (builder) => ({}),
});
