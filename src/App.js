import "./css/app.css";
import { useEffect } from "react";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import Repo from "./components/Repo";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

import fetchRepos from "./redux/thunks/reposThunk";
import { loadState } from "./utils/localStorage";

function App() {
  const repos = useSelector((state) => state.repos.repos);
  const loading = useSelector((state) => state.repos.loading);
  const dispatch = useDispatch();

  const date = moment().subtract(30, "days").format("YYYY-MM-DD");

  useEffect(() => {
    const preloadedState = loadState();
    dispatch(fetchRepos(preloadedState?.pageNum || 1));
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <ul className="repos-list">
          {repos.length ? (
            repos.map((repo) => (
              <Repo
                key={repo.id}
                ownerName={repo.owner.login}
                avatar={repo.owner.avatar_url}
                repoName={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                issues={repo.has_issues ? repo.open_issues_count : 0}
              />
            ))
          ) : (
            <li className="no-repos">
              There are no repos provided in
              {date}
            </li>
          )}
        </ul>
      )}
      <Pagination />
    </main>
  );
}

export default App;
