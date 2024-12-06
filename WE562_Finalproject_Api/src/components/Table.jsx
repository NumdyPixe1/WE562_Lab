import React from "react";

function TableInfo({ film, tvShow, shortFilm, parkAttraction, videoGame }) {
  return (
    <div>
      <table style={{ border: "1px solid" }}>
        <tr>
          <th style={{ textalign: "left", border: "1px solid" }}>film</th>
          <td style={{ textalign: "left", border: "1px solid" }}>{film}</td>
        </tr>

        <tr>
          <th style={{ textalign: "left", border: "1px solid" }}>tvShow</th>
          <td style={{ textalign: "left", border: "1px solid" }}>{tvShow}</td>
        </tr>
        <tr>
          <th style={{ textalign: "left", border: "1px solid" }}>shortFilm</th>
          <td style={{ textalign: "left", border: "1px solid" }}>
            {shortFilm}
          </td>
        </tr>
        <tr>
          <th style={{ textalign: "left", border: "1px solid" }}>
            parkAttraction
          </th>
          <td style={{ textalign: "left", border: "1px solid" }}>
            {parkAttraction}
          </td>
        </tr>
        <tr>
          <th style={{ textalign: "left", border: "1px solid" }}>videoGame</th>
          <td style={{ textalign: "left", border: "1px solid" }}>
            {videoGame}
          </td>
        </tr>
      </table>
    </div>
  );
}
export default TableInfo;
