import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth";
import counterReducer from "./reducers/counter";
import sampleReducer from "./reducers/sample";

export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, sample: sampleReducer },
});
