import { useState, useEffect } from "react";
import CharCard from "./components/Card";
import { Button, Flex, Select } from "antd";

import "./styles.css";

function Fetch() {
  const [dataChar, setDataChar] = useState([]);
  const [valueChar, setValueChar] = useState(null);
  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const charKey = data.data.map((character) => ({
          value: character._id,
          label: character.name,
          imageUrl: character.imageUrl,
          sourceUrl: character.sourceUrl,
          film: character.films,
          shortFilm: character.shortFilms,
          tvShow: character.tvShows,
          parkAttraction: character.parkAttractions,
          videoGame: character.videoGames,
        }));
        setDataChar(charKey);
      });
  }, []);
  const linkSource = dataChar.find(
    (char) => char.value === valueChar
  )?.sourceUrl;
  return (
    <div style={{ margin: "auto" }}>
      <Select
        options={dataChar}
        value={valueChar}
        onChange={(value) => setValueChar(value)}
        showSearch
        placeholder={"Select a Disney character"}
        style={{ width: 180 }}
      />
      {/* ---------------------------------------------- */}
      <CharCard
        style={{ margin: "auto" }}
        videoGame={dataChar.find((char) => char.value === valueChar)?.videoGame}
        parkAttraction={
          dataChar.find((char) => char.value === valueChar)?.parkAttraction
        }
        film={dataChar.find((char) => char.value === valueChar)?.film}
        tvShow={dataChar.find((char) => char.value === valueChar)?.tvShow}
        shortFilm={dataChar.find((char) => char.value === valueChar)?.shortFilm}
        img={dataChar.find((char) => char.value === valueChar)?.imageUrl}
        name={dataChar.find((char) => char.value === valueChar)?.label}
        onClick={() => window.open(linkSource)}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Select a Disney characters</h1>
      <Fetch />
    </div>
  );
}
export default App;
