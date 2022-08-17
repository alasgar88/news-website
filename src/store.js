import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./features/news/newsSlice";
import categorySlice from "./features/category/categorySlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    category: categorySlice,
  },
});
