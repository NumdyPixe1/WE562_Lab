import React from "react";

function Button({
  text,
  onClick,
  color = "#f4c979",
  size = "medium",
  margin = "5px",
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        cursor: "pointer",
        fontSize: size,
        margin: margin,
        size: size,
      }}
    >
      {text}
    </button>
  );
}
export default Button;
