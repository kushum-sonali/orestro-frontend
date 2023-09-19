// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice";
import {persistReducer} from "redux-persist";
import storage from  "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig={
  key:"root",
  storage,
  version:1,
 
}
const reducers=combineReducers({
  cart:cartReducer,
  user:userReducer,
});
const persistedReducer=persistReducer(persistConfig,reducers);
const store = configureStore({
  reducer: persistedReducer,

});

export default store; 

