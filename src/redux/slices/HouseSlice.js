const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  houses: [],
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    getHousesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getHousesSuccess: (state, action) => {
      state.loading = false;
      state.houses = action.payload;
    },
    getHousesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addHouse: (state, action) => {
      state.houses.push(action.payload);
    },
    deleteHouse: (state, action) => {
      state.houses = state.houses.filter(
        (house) => house.id !== action.payload
      );
    },
    updateHouse: (state, action) => {
      // Find the house to update by its ID
      const houseIndex = state.houses.findIndex(
        (house) => house.id === action.payload.id
      );

      // Update the house if found
      if (houseIndex !== -1) {
        state.houses[houseIndex] = action.payload;
      }
    },
  },
});

export const { addHouse, removeHouse } = houseSlice.actions;

export default houseSlice.reducer;
