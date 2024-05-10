const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./slices/AuthSlice";
import { apiSlice } from "./slices/apiSlice";
import houseReducer from "./slices/HouseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    house: houseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
