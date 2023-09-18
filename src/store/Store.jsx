// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer

    // Add other reducers if needed
  },

});

export default store; 

