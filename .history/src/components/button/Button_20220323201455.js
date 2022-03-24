import React from "react";
import { FaPlay } from "react-icons/fa";
const Button = () => {
  return (
    <>
      <button className="movie-btn button button--primary button--secondary">
        <span>Watch now</span>
        <FaPlay />
      </button>
    </>
  );
};

export default Button;
