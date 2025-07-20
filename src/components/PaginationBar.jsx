import { useDispatch, useSelector } from "react-redux";

import fetchRepos from "../redux/thunks/reposThunk";

function PaginationBar() {
  const pageNum = useSelector((state) => state.repos.pageNum);
  const repos = useSelector((state) => state.repos.repos);

  const dispatch = useDispatch();

  const handelPagination = (e) => {
    dispatch(fetchRepos(e.target.value));
  };
  console.log(pageNum);
  // 34 pages because only the first 1000 repos are available
  const btns = Array.from({ length: 34 }, (_, i) => {
    const num = i + 1;
    return (
      <button
        key={num}
        type="button"
        onClick={handelPagination}
        value={num}
        className={parseFloat(pageNum) === num ? "pagination-btn active" : "pagination-btn"}
      >
        {num}
      </button>
    );
  });

  return <div className="pagination">{repos ? btns : null}</div>;
}

export default PaginationBar;
