import React, { useState } from "react";
import { FaEye, FaPlay, FaStar } from "react-icons/fa";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";
import "./TVPage.scss";
const TVPage = () => {
  // page
  const [nextpage, setNextPage] = useState(1);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${nextpage}`,
    fetcher
  );
  if (!data) return null;
  const tvMovie = data?.results || [];
  // Next Page
  const handleLoadMore = () => {
    setNextPage((...nextpage) => nextpage + 1);
  };
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-list">
            {tvMovie &&
              tvMovie.length > 0 &&
              tvMovie.map((item) => <TvPageItem key={item.id} item={item} />)}
          </div>
          <button onClick={() => handleLoadMore()} className="tvPage-load">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

const TvPageItem = ({ item }) => {
  const { original_name, poster_path, popularity, vote_average } = item;
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
          <div className="tvPage-popular--eye">
            <span className="icon">
              <FaEye />
            </span>
            <span>{Math.floor(popularity)}</span>
          </div>
          <div className="tvPage-popular--rate">
            <span>{vote_average}</span>
            <span className="icon">
              <FaStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
