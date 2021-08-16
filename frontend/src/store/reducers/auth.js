import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth";

const initialState = {
  loginLoading: false,
  loginDone: false,
  loginError: null,

  registerLoading: false,
  registerDone: false,
  registerError: null,

  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        if (state.loginLoading === false) {
          state.loginError = false;
          state.loginLoading = true;
        }
      })
      .addCase(login.fulfilled, (state, { payload: auth }) => {
        if (state.loginLoading === true) {
          state.loginLoading = false;
          state.auth = auth;
        }
      })
      .addCase(login.rejected, (state, { payload: error }) => {
        if (state.loginLoading === true) {
          state.loginLoading = false;
          state.loginError = error.error;
        }
      })
      // REGISTER
      .addCase(register.pending, (state) => {
        if (state.registerLoading === false) {
          state.registerError = false;
          state.registerLoading = true;
        }
      })
      .addCase(register.fulfilled, (state, { paylod: auth }) => {
        if (state.registerLoading === true) {
          state.registerLoading = false;
          state.auth = auth;
        }
      })
      .addCase(register.rejected, (state, { payload: error }) => {
        if (state.registerLoading === true) {
          state.registerLoading = false;
          state.registerError = error.error;
        }
      });
  },
});

export default authSlice.reducer;
