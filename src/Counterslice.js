import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addData } = counterSlice.actions;
export default counterSlice.reducer;
