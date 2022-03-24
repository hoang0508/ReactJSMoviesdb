import React from "react";
import { FaEye, FaPlay } from "react-icons/fa";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";
import "./TVPage.scss";
const TVPage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const tvMovie = data?.results || [];
  console.log(tvMovie);
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-list">
            {tvMovie &&
              tvMovie.length > 0 &&
              tvMovie.map((item) => <TvPageItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TvPageItem = ({ item }) => {
  const { original_name, poster_path, popularity } = item;
  return (
    <div className="tvPage-item">
      <div className="tvPage-watch">
        <div className="tvPage-images">
          <img src={tmdbAPI.imagesOriginal(poster_path)} alt="" />
        </div>
        <div className="tvPage-play">
          <FaPlay />
        </div>
      </div>
      <div className="tvPage-content">
        <h3 className="tvPage-title">{original_name}</h3>
        <div className="tvPage-popular">
          <span>
            <FaEye />
          </span>
          <span>{Math.floor(popularity)}</span>
        </div>
      </div>
    </div>
  );
};

export default TVPage;