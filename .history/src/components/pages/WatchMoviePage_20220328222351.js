import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./WatchMoviePage.scss";
const WatchMoviePage = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(id), fetcher);
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="watchMovie-content">
            <div className="watchMovie-images">
              <img src={tmdbAPI.imagesOriginal(poster_path)} alt="" />
            </div>
            <div>
              <h3 className="watchMovie-title">{title}</h3>
              <p className="watchMovie-desc">{overview}</p>
              <div>
                <h3 className="watchMovie-title">Info</h3>
                <div>Status: {status}</div>
                <div>Time: {runtime}M</div>
                <div>Date: {release_date}</div>
                <div>
                  <span>Cats:</span>
                  <CreditWatch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WatctMovieUpdate />
      </div>
    </div>
  );
};

const CreditWatch = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieInfo(id, "credits"), fetcher);
  if (!data) return null;
  const casts = data?.cast;
  return (
    <>
      {casts &&
        casts.length > 0 &&
        casts
          .slice(0, 6)
          .map((item) => (
            <span className="watchMovie-cast"> {item.name}, </span>
          ))}
    </>
  );
};

const WatctMovieUpdate = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieInfo(id, "recommendations"), fetcher);
  if (!data) return null;
  const dataUpdate = data?.results;
  return (
    <>
      <div className="watchMovie-update">
        {dataUpdate &&
          dataUpdate.length > 0 &&
          dataUpdate.slice(0, 5).map((item) => (
            <div className="watchMovie-update--images">
              <img src={tmdbAPI.imagesOriginal(item.poster_path)} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};

export default WatchMoviePage;
