import moment from "moment";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchRepos = createAsyncThunk("repos/fetchRepos", async (pageNum) => {
  const date = moment().subtract(30, "days").format("YYYY-MM-DD");
  const res = await fetch(
    `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${pageNum}`
  );
  const result = await res.json();
  return { ...result, pageNum };
});

export default fetchRepos;
