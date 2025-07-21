import { configureStore } from "@reduxjs/toolkit";
import fetchRepos from "../redux/thunks/reposThunk";
import resposReducer from "../redux/features/repos/reposSlice";

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ items: [{ id: 1, name: "aje" }] }),
}));

describe("Test fethcing repos", () => {
  let store;
  
  beforeAll(async () => {
    store = configureStore({
      reducer: {
        repos: resposReducer
      }
    });
    
    await store.dispatch(fetchRepos());
  });

  it("Test repos length", async () => {
    const state = store.getState().repos;
    expect(state.repos.length).toBeGreaterThan(0);
  });

  it("Test repo name", async () => {
    const state = store.getState().repos;
    const item = state.repos[0];

    expect(item.name).toBe("aje");
    expect(item.id).toBe(1);
  });
});
