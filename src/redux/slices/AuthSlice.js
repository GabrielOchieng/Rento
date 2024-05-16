// const { createSlice } = require("@reduxjs/toolkit");

// const initialState = {
//   userInfo: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       console.log(action);
//       localStorage.setItem("userInfo", JSON.stringify(action.payload));
//     },
//     logOut: (state, action) => {
//       state.userInfo = null;
//       localStorage.removeItem("userInfo");
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

// const initialState = {
//   userInfo:
//     typeof window !== "undefined"
//       ? localStorage.getItem("userInfo")
//         ? JSON.parse(localStorage.getItem("userInfo"))
//         : null
//       : null,
// };

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
