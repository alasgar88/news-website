import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "all",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryName: (state, { payload }) => {
      state.categoryName = payload;
    },
  },
});

export const { setCategoryName } = categorySlice.actions;
export default categorySlice.reducer;
