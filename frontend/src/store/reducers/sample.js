import { createSlice } from "@reduxjs/toolkit";
import { getSample } from "../actions/sample";

const initialState = {
  sample: [],
  loading: false,
  error: null,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSample.pending, (state) => {
        if (state.loading === false) {
          state.loading = true;
        }
      })
      .addCase(getSample.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.sample = action.payload;
        }
      })
      .addCase(getSample.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = action.error;
        }
      });
  },
});

export default sampleSlice.reducer;
