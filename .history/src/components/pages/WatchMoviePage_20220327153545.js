import React from "react";
import { useParams } from "react-router-dom";

const WatchMoviePage = () => {
  const { id } = useParams();
  console.log(
    "🚀 ~ file: WatchMoviePage.js ~ line 6 ~ WatchMoviePage ~ id",
    id
  );

  return <div></div>;
};

export default WatchMoviePage;
