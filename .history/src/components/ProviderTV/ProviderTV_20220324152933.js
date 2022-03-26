import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const ProviderTV = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/watch/providers/movie?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  console.log(data?.results);
  return <div></div>;
};

export default ProviderTV;
