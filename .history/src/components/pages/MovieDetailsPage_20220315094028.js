import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // const [movie, setMovie] = useState([]);
  // const { data } = useSWR(
  //   `https://api.themoviedb.org/3/movie/${id}?api_key=6dc4483c77b849ecbf002144ee64855d`,
  //   fetcher
  // );
  // useEffect(() => {
  //   setMovie(data?.results);
  // }, [data]);
  const param = useParams();
  console.log(param);
  return <div>Deatails</div>;
};

export default MovieDetailsPage;
