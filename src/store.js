import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginSlice";
import registerReducer from "./reducers/registerSlice";

const reducer = combineReducers({
  login: loginReducer,
  user: registerReducer
});

export const store = configureStore({
  reducer: reducer,
});