import { apiSlice } from "./apiSlice";

const HOUSES_URL = "http://localhost:5000/api/houses";

export const housesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: (houses) => ({
        url: `${HOUSES_URL}`,
        params: {
          houses,
        },
      }),
    }),
    getHouse: builder.query({
      query: (id) => ({
        url: `${HOUSES_URL}/${id}`,
      }),
    }),
    createHouse: builder.mutation({
      query: (house) => ({
        url: `${HOUSES_URL}`,
        method: "POST",
        body: house,
      }),
    }),
    updateHouse: builder.mutation({
      query: (house) => ({
        url: `${HOUSES_URL}/${house._id}`,
        method: "PUT",
        body: house,
      }),
    }),
    deleteHouse: builder.mutation({
      query: (id) => ({
        url: `${HOUSES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetHousesQuery,
  useGetHouseQuery,
  useCreateHouseMutation,
  useUpdateHouseMutation,
  useDeleteHouseMutation,
} = housesApiSlice;
