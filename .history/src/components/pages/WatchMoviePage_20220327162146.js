import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./WatchMoviePage.scss";
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
    <div className="watchMovie">
      <div className="container">
        <h3 className="movie-heading">Watch Movie</h3>
        <div className="watchMovie-main">
          <div className="watchMovie-video">
            <iframe
              id="iframe"
              src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="watchMovie-content">
            <div className="watchMovie-images">
              <img src={tmdbAPI.imagesOriginal(poster_path)} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchMoviePage;
