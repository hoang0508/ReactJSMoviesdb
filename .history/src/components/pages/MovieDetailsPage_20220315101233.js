import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import "./MovieDetailsPage.scss";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  // APi get details
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { poster_path, backdrop_path } = data;
  console.log(data);
  return (
    <div className="pageDetails">
      <div
        className="pageDetails-bg--big"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
        }}
      >
        <div className="pageDetails-overlay"></div>
      </div>
      <div className="pageDetails-bg--small"></div>
    </div>
  );
};

export default MovieDetailsPage;
