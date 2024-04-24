import { configureStore } from "@reduxjs/toolkit";
import listReducer from './data';
import {Api} from '../apiConfig/axiosConfig';

const store = configureStore({
    reducer: {
      list: listReducer,
      // Add other reducers here if any
    },
  });
  
export default store;