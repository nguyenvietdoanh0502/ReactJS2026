
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

// TODO 1: Tạo store bằng configureStore
// Gợi ý: reducer cần có key là shop
export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
