import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  console.log(data);
  return <></>;
};

export default MoviePage;
