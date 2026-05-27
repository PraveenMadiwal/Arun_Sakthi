import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import enquiryReducer from "./slices/enquirySlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    enquiries: enquiryReducer,
    ui: uiReducer,
  },
});