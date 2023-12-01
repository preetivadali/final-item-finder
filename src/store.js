import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginSlice";
import registerReducer from "./reducers/registerSlice";
import itemReducer from "./reducers/itemSlice";

const reducer = combineReducers({
  login: loginReducer,
  user: registerReducer,
  items: itemReducer,
});

export const store = configureStore({
  reducer: reducer,
});