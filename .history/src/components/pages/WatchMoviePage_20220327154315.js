import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const WatchMoviePage = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(id), fetcher);
  console.log(
    "🚀 ~ file: WatchMoviePage.js ~ line 9 ~ WatchMoviePage ~ data",
    data
  );
  if (!data) return null;
  const { poster_path, title, overview, status, runtime, release_date } = data;
  return (
    <div>
      <div className="container">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default WatchMoviePage;
