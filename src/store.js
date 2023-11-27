import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginSlice";

const reducer = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer: reducer,
});