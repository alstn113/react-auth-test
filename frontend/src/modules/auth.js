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
  authError: null,
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
  },
});

export const { changeField, initializeForm } = authSlice.actions;

export default authSlice.reducer;
