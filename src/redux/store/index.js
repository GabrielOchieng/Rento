const { configureStore } = require("@reduxjs/toolkit");
const { default: authSlice } = require("./auth-slice");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
