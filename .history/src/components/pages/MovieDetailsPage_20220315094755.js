import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (!data) return null;
    setMovie(data);
  }, [data]);
  console.log(movie);
  return <div>Deatails</div>;
};

export default MovieDetailsPage;
