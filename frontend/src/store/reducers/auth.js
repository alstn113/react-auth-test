import { createSlice } from "@reduxjs/toolkit";
import { login, register, check, logout } from "../actions/auth";

const initialState = {
  loginLoading: false,
  loginError: null,

  registerLoading: false,
  registerError: null,

  checkLoading: false,
  checkError: null,

  logoutLoading: false,
  logoutError: null,

  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tempSetUser: (state, { payload: user }) => {
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        if (state.loginLoading === false) {
          state.loginError = false;
          state.loginLoading = true;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if (state.loginLoading === true) {
          state.loginLoading = false;
          state.user = action.payload;
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
      .addCase(register.fulfilled, (state, action) => {
        if (state.registerLoading === true) {
          state.registerLoading = false;
          state.user = action.payload;
        }
      })
      .addCase(register.rejected, (state, { payload: error }) => {
        if (state.registerLoading === true) {
          state.registerLoading = false;
          state.user = null;
          state.registerError = error.error;
        }
      })
      // CHECK
      .addCase(check.pending, (state) => {
        if (state.checkLoading === false) {
          state.checkError = false;
          state.checkLoading = true;
        }
      })
      .addCase(check.fulfilled, (state, { payload: user }) => {
        if (state.checkLoading === true) {
          state.checkLoading = false;
          state.user = user;
        }
      })
      .addCase(check.rejected, (state, { payload: error }) => {
        if (state.checkLoading === true) {
          state.checkLoading = false;
          state.checkError = error.error;
        }
      })
      // LOGOUT
      .addCase(logout.pending, (state) => {
        if (state.logoutLoading === false) {
          state.logoutError = false;
          state.logoutLoading = true;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        if (state.logoutLoading === true) {
          state.logoutLoading = false;
          state.user = null;
        }
      })
      .addCase(logout.rejected, (state, { payload: error }) => {
        if (state.logoutLoading === true) {
          state.logoutLoading = false;
          state.logoutError = error.error;
        }
      });
  },
});

export const { tempSetUser } = authSlice.actions;

export default authSlice.reducer;
