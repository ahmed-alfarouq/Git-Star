import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { render, screen } from "@testing-library/react";
import fetchRepos from "../../../redux/thunks/reposThunk";
import ReposReducer from "../../../redux/features/repos/reposSlice";

import Repo from "../../../components/Repo";

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    items: [{
      id: 1,
      name: "git-star",
      owner: { login: "Ahmed", avatar_url: "image_link" },
      description: "description",
      stargazers_count: 22,
      has_issues: true,
      open_issues_count: 12
    }]
  }),
}));

describe("Integration Testing for repositories list", () => {
  let store;
  beforeAll(async () => {
    store = configureStore({
      reducer: {
        repos: ReposReducer,
      },
    });
    await store.dispatch(fetchRepos(1));
  });

  it("fetches and displays repos from Redux", () => {
    const { repos } = store.getState().repos;

    render(
      <Provider store={store}>
        <>
          {repos.map((repo) => (
            <Repo
              key={repo.id}
              ownerName={repo.owner.login}
              avatar={repo.owner.avatar_url}
              repoName={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              issues={repo.has_issues ? repo.open_issues_count : 0}
            />
          ))}
        </>
      </Provider>
    );

    expect(screen.getByText(/Ahmed/i)).toBeInTheDocument();
    expect(screen.getByText(/git-star/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});
