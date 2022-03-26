import React, { useEffect, useState } from "react";
import { FaEye, FaPlay, FaStar } from "react-icons/fa";
import { apiKey, fetcher, tmdbAPI } from "../../config";
import useSWRInfinite from "swr/infinite";
import { v4 } from "uuid";
import loadash from "lodash";
import "./TVPage.scss";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const TVPage = () => {
  // const { data } = useSWR(
  //   `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${nextpage}`,
  //   fetcher
  // );
  // query
  const [query, setQuery] = useState("");
  // url
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`
  );
  // Data useSWRinfinite => load more data , call API
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  // Kiểm tra daadtaa , error
  const loading = !data && !error;
  // Note , reduce, concat
  const tvMovie = data ? data.reduce((a, b) => a.concat(b.results), []) : [];

  // Next Page
  const handleLoadMore = (e) => {
    e.preventDefault();
    setSize(size + 1);
  };

  // search
  const handleChangeQuery = loadash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  // useEffect , xét lại url khi query
  useEffect(() => {
    if (query) {
      setUrl(`
      https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=1&query=${query}`);
    } else {
      setUrl(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`
      );
    }
  }, [query]);
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-search">
            <div className="tvPage-input">
              <input
                type="text"
                placeholder="Search tv movie..."
                onChange={(e) => handleChangeQuery(e)}
              />
            </div>
          </div>
          <div className="tvPage-list">
            {loading && (
              <>
                <tvItemSkeleton />
                <tvItemSkeleton />
                <tvItemSkeleton />
                <tvItemSkeleton />
              </>
            )}
            {!loading &&
              tvMovie &&
              tvMovie.length > 0 &&
              tvMovie.map((item, index) => (
                <TvPageItem key={v4()} item={item} />
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
            <span className="text">{Math.floor(popularity)}</span>
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

const tvItemSkeleton = () => {
  return (
    <div className="tvPage-item">
      <div className="tvPage-watch">
        <LoadingSkeleton width="100%" height="300px" radius="10px" />
        <div className="tvPage-play">
          <FaPlay />
        </div>
      </div>
      <div className="tvPage-content">
        <h3 className="tvPage-title">
          <LoadingSkeleton width="100%" height="10px" />
        </h3>
        <div className="tvPage-popular">
          <div className="tvPage-popular--eye">
            <span className="icon">
              <LoadingSkeleton width="20px" height="20px" />
            </span>
            <span className="text">
              <LoadingSkeleton width="30px" height="10px" />
            </span>
          </div>
          <div className="tvPage-popular--rate">
            <LoadingSkeleton width="20px" height="10px" />
            <span className="icon">
              <LoadingSkeleton width="10px" height="10px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
