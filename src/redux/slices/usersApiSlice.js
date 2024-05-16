// import { apiSlice } from "./apiSlice";
// const USERS_URL = "/api/users";

// // const USERS_URL = "http://localhost:5000/api/users";

// export const usersApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/signup`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/login`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: `${USERS_URL}/logout`,
//         method: "POST",
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
//   usersApiSlice;

const USERS_URL = "http://localhost:5000/api/users";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = usersApiSlice;
