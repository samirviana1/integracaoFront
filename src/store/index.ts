import {configureStore} from "@reduxjs/toolkit";
import combineReducer from "./rootReducer";

const store = configureStore({
  reducer: combineReducer,
  devTools: process.env.NODE_ENV! === "production",
});

export type storeStates = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export {store};
