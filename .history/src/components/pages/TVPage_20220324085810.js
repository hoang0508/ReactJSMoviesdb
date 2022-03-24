import React, { useEffect, useState } from "react";
import { FaEye, FaPlay, FaStar } from "react-icons/fa";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";
import "./TVPage.scss";
const TVPage = () => {
  // page
  const [nextpage, setNextPage] = useState(1);
  const [tvMovie, setTvMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${nextpage}`,
    fetcher
  );
  // New data
  // Next Page
  let newPageLoad = data?.results;
  const handleLoadMore = (e) => {
    e.preventDefault();
    // const page = nextpage;
    newPageLoad = [...tvMovie, ...data?.results];
    console.log(
      "🚀 ~ file: TVPage.js ~ line 24 ~ handleLoadMore ~ newPageLoad",
      newPageLoad
    );
    setNextPage(nextpage + 1);
    setTvMovie(newPageLoad);
  };
  useEffect(() => {
    if (!data) return null;
    setTvMovie(newPageLoad);
  }, [data, newPageLoad]);
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-list">
            {tvMovie &&
              tvMovie.length > 0 &&
              tvMovie.map((item, index) => (
                <TvPageItem key={item.origin_country} item={item} />
              ))}
          </div>
          <button onClick={(e) => handleLoadMore(e)} className="tvPage-load">
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
