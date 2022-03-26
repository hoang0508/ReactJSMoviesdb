import React from "react";
import { useParams } from "react-router-dom";

const TvPageDetails = () => {
  const { id } = useParams();

  return <div>Hello word</div>;
};

export default TvPageDetails;
