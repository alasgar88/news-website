import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { paginate } from "../../utils/utils";

const initialState = {
  isLoading: false,
  newsObject: [],
  data: [],
};

export const getData = createAsyncThunk(
  "news/getData",
  async (category = "all", thunkAPI) => {
    try {
      const resp = await axios(
        `https://inshorts.deta.dev/news?category=${category}`
      );

      return resp.data;
    } catch (error) {}
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNewsObject: (state, { payload }) => {
      state.newsObject = payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = paginate(payload.data);
    },
    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addNewsObject } = newsSlice.actions;
export default newsSlice.reducer;
