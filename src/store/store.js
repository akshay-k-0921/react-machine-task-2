import { configureStore } from "@reduxjs/toolkit";
import listReducer from './data';
import cartReducer from "./cart";

const store = configureStore({
    reducer: {
      list: listReducer,
      cart: cartReducer,
    },
  });
  
export default store;