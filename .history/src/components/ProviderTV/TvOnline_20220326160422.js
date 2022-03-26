import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const TvOnline = () => {
  const { data } = useSWR(tmdbAPI.getMovieTV("on_the_air"), fetcher);
  if (!data) return null;
  const tvOnline = data?.results;
  console.log(
    "🚀 ~ file: TvOnline.js ~ line 9 ~ TvOnline ~ tvOnline",
    tvOnline
  );
  return <div></div>;
};

export default TvOnline;
