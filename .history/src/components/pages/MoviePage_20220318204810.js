import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCart from "../movies/MovieCart";
import { FaSearch } from "react-icons/fa";
import "./MoviePage.scss";

const MoviePage = () => {
  // movie
  const [movie, setMovie] = useState([]);
  // url
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`
  );
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    setMovie(data?.results);
  }, [data]);
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="page-search">
            <div className="page-input">
              <input type="text" placeholder="Search movie..." />
            </div>
            <button className="page-btn">
              <FaSearch />
            </button>
          </div>
          <div className="page-list">
            {movie &&
              movie.length > 0 &&
              movie.map((item) => <MovieCart key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
