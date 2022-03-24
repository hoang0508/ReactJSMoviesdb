import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import MovieCart from "../movies/MovieCart";
import { FaSearch } from "react-icons/fa";
import lodash from "lodash";
import "./MoviePage.scss";

const MoviePage = () => {
  // movie
  const [movie, setMovie] = useState([]);
  // url
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`
  );
  // Call API , data
  const { data } = useSWR(url, fetcher);
  // query
  const [search, setSearch] = useState("");
  // Function search onchange
  const handleSearchMovie = lodash.debounce((e) => {
    setSearch(e.target.value);
  }, 500);
  // Xử lý useEffect
  useEffect(() => {
    setMovie(data?.results);
    if (search) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`
      );
    }
  }, [data, search]);
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="page-search">
            <div className="page-input">
              <input
                type="text"
                placeholder="Search movie..."
                onChange={(e) => handleSearchMovie(e)}
              />
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
