import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import homeReducer from "./home/homeSlice";
import favoriteReducer from "./favorite/favoriteSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  favorite: favoriteReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;