import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/reducer/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
