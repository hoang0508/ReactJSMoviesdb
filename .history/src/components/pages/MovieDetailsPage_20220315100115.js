import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import "./MovieDetailsPage.scss";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  // APi get details
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (!data) return null;
    setMovie(data);
  }, [data]);
  console.log(movie);
  return (
    <div className="pageDetails">
      <div className="pageDetails-bg--big">
        <div className="pageDetails-overlay"></div>
      </div>
      <div className="pageDetails-bg--small"></div>
    </div>
  );
};

export default MovieDetailsPage;
