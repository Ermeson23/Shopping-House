import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import homeReducer from "./home/homeSlice";
import favoriteReducer from "./favorite/favoriteSlice";

import { loginUserApi } from "./login/loginSlice";
import { registerUserApi } from "./register/registerSlice";
import { loggedUserApi } from "./logged/loggedSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  [loginUserApi.reducerPath]: loginUserApi.reducer,
  [registerUserApi.reducerPath]: registerUserApi.reducer,
  [loggedUserApi.reducerPath]: loggedUserApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
