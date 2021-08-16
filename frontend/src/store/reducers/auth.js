import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth";

const initialState = {
  loginLoaindg: false,
  loginDone: false,
  loginError: null,

  registerLoaindg: false,
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
        if (state.loginLoaindg === false) {
          state.loginLoaindg = true;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if (state.loginLoaindg === true) {
          state.loginLoaindg = false;
          state.auth = action.payload.auth;
        }
      })
      .addCase(login.rejected, (state, action) => {
        if (state.loginLoaindg === true) {
          state.loginLoaindg = false;
          state.loginError = action.error;
        }
      })
      // REGISTER
      .addCase(register.pending, (state) => {
        if (state.registerLoaindg === false) {
          state.registerLoaindg = true;
        }
      })
      .addCase(register.fulfilled, (state, action) => {
        if (state.registerLoaindg === true) {
          state.registerLoaindg = false;
          state.auth = action.payload.auth;
        }
      })
      .addCase(register.rejected, (state, action) => {
        if (state.registerLoaindg === true) {
          state.registerLoaindg = false;
          state.registerError = action.error;
        }
      });
  },
});

export default authSlice.reducer;
