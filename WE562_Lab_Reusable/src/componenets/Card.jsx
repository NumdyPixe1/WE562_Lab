import React from "react";

function Card({ img, title, desc, remove, color, size, fontColor }) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: color,
        margin: "50px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <button
        onClick={remove}
        style={{
          position: "absolute",
          right: "80px",
          backgroundColor: "red",
          width: "30px",
          height: "30px",
        }}
      >
        X
      </button>

      <img
        src={img}
        alt={title}
        width="200px"
        height="200px"
        style={{
          padding: size === "large" ? "30px 30px" : "5px 5px",
        }}
      />

      <h3
        style={{
          fontSize: size === "large" ? "30px" : "20px",
          color: fontColor,
        }}
      >
        {title}
      </h3>

      <p>{desc}</p>
    </div>
  );
}
export default Card;
