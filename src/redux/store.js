import { configureStore } from "@reduxjs/toolkit";

import ReposReducer from "./features/repos/reposSlice";
import { saveState } from "../utils/localStorage";

const store = configureStore({
  reducer: {
    repos: ReposReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().repos);
});

export default store;
