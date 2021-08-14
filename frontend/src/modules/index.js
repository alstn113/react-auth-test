import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter";
import authReducer from "../modules/auth";
import userReducer from "../modules/user";

export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, user: userReducer },
});
