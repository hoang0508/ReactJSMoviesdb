import React from "react";
import { FaPlay } from "react-icons/fa";
const Button = ({ onClick, children, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`movie-btn button button--primary button--secondary ${className}`}
      >
        <span>{children}</span>
        <FaPlay />
      </button>
    </>
  );
};

export default Button;
