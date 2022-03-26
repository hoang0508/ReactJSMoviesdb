import React from "react";
import { useParams } from "react-router-dom";

const TvPageDetails = () => {
  const { id } = useParams();
  console.log(
    "🚀 ~ file: TvPageDetails.js ~ line 6 ~ TvPageDetails ~ param",
    id
  );

  return <div>Hello word</div>;
};

export default TvPageDetails;
