import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCart from "../movies/MovieCart";
import "./MoviePage.scss";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  useEffect(() => {
    setMovie(data?.results);
  }, [data]);
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="page-search">
            <input type="text" className="page-input" />
            <button className="paga-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
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
