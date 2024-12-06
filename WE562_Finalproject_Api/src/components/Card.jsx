import React from "react";
import Table from "./Table";

function CharCard({
  onClick,
  name,
  img,
  style,
  film,
  tvShow,
  shortFilm,
  parkAttraction,
  videoGame,
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "500px",
        height: "700px",
        borderRadius: "10px",
        ...style,
      }}
    >
      <h2 style={{ backgroundColor: "#ee105a" }}>{name}</h2>
      <img src={img} alt={name} style={{ margin: "5px auto" }} />
      <Table
        videoGame={videoGame}
        film={film}
        tvShow={tvShow}
        shortFilm={shortFilm}
        parkAttraction={parkAttraction}
      />
      <button
        style={{
          width: "50px",
          height: "30px",
          backgroundColor: "#10eea4",
          borderRadius: "5px",
          border: "0px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={onClick}
      >
        View
      </button>
    </div>
  );
}
export default CharCard;
