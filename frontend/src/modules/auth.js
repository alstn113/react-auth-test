import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: () => {
      return initialState;
    },
    login: (state, { payload: { auth } }) => {
      state.auth = auth;
    },
    register: (state, { payload: { auth } }) => {
      state.auth = auth;
    },
  },
});

export const { changeField, initializeForm, login, register } = authSlice.actions;

export default authSlice.reducer;
