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
      <div className="page-list">
        {movie &&
          movie.length > 0 &&
          movie.map((item) => <MovieCart key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default MoviePage;
