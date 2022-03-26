import React from "react";
import "./LoadingSkeleton.scss";
const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        width: props.width || "100%",
        height: props.height,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
