import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { productAPI } from "./productAPI";
export const store = configureStore({
  reducer: {
    product: productReducer,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});
