import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const TvPageDetails = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);
  console.log(
    "🚀 ~ file: TvPageDetails.js ~ line 9 ~ TvPageDetails ~ data",
    data
  );
  return <div>Hello word</div>;
};

export default TvPageDetails;
