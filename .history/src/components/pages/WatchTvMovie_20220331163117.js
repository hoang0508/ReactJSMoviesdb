import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./WatchTVMovie.scss";
const WatchTvMovie = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);

  return (
    <>
      <div className="watchTV">
        <div className="container">
          <h3 className="movie-heading">WatchTV Movie</h3>
          <div className="watchMovie-video watchTV-video">
            <div className="watchMovie-video--iframe watchTV-video--iframe">
              <iframe
                id="iframe"
                src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <select className="watchTV-select">
            <option className="watchTV-option">1</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default WatchTvMovie;
