/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import fetchRepos from "../../thunks/reposThunk";

const initialState = {
  loading: false,
  repos: [],
  pageNum: "1",
  error: "",
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action.payload.items;
        state.pageNum = action.payload.pageNum;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export default reposSlice.reducer;
