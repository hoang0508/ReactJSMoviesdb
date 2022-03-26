import React from "react";
import { useParams } from "react-router-dom";

const TvPageDetails = () => {
  const param = useParams();
  console.log(
    "🚀 ~ file: TvPageDetails.js ~ line 6 ~ TvPageDetails ~ param",
    param
  );

  return <div>Hello word</div>;
};

export default TvPageDetails;
