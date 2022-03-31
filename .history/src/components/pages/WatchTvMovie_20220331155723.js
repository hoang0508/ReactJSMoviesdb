import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
const WatchTvMovie = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);
  console.log(
    "🚀 ~ file: WatchTvMovie.js ~ line 8 ~ WatchTvMovie ~ data",
    data?.seasons
  );
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default WatchTvMovie;
