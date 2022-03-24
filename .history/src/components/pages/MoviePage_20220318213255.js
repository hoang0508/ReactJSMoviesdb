import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import MovieCart from "../movies/MovieCart";
import { FaSearch } from "react-icons/fa";
import lodash from "lodash";
import ReactPaginate from "react-paginate";
import "./MoviePage.scss";

const itemsPerPage = 20;
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
  }, 1000);
  // NextPage
  const [nextPage, setNextPage] = useState(1);
  // Xử lý useEffect
  useEffect(() => {
    setMovie(data?.results);
    if (search) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d&page=${nextPage}`
      );
    }
  }, [data, nextPage, search]);
  // Phân trang thư viện pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    if (!data || !data.total_results) return null;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
