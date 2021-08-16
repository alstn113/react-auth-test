import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseByValue: (state, { payload: value }) => {
      state.number += value;
    },
  },
  extraReducers: (builder) => {},
});

export const { increaseByValue } = counterSlice.actions;

export default counterSlice.reducer;
