import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
    increaseByValue: (state, { payload: number }) => {
      state.number += number;
    },
  },
});

export const { increase, decrease, increaseByValue } = counterSlice.actions;

export default counterSlice.reducer;
