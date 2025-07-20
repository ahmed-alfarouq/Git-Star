import { configureStore } from "@reduxjs/toolkit";

import ReposReducer from "./features/repos/reposSlice";

const store = configureStore({
  reducer: {
    repos: ReposReducer,
  },
});

export default store;
