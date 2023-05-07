import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./feature/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logger],
});
