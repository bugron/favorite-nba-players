import { useState } from "react";
import { AllNBAPlayerList } from "./components/AllNBAPlayerList";
import { FavoriteNBAPlayerList } from "./components/FavoriteNBAPlayerList";
import { NBAPlayerItem } from "./components/NBAPlayerListItem/NBAPlayerListItem";
import { PageTitle } from "./components/PageTitle/PageTitle";

import "./App.css";

function App() {
  const [favoritePlayers, setFavoritePlayers] = useState<NBAPlayerItem[]>([]);
  const [players, setPlayers] = useState<NBAPlayerItem[]>([
    {
      id: 1,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 2,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 3,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 4,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 5,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 6,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 7,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 8,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 9,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
    {
      id: 10,
      first_name: "Vardan",
      last_name: "Karakhanyan",
    },
  ]);

  return (
    <div className="App">
      <PageTitle />
      <div className="player-list-container">
        <AllNBAPlayerList
          players={players}
          setFavoritePlayers={setFavoritePlayers}
          setPlayers={setPlayers}
        />
        <FavoriteNBAPlayerList
          players={favoritePlayers}
          setFavoritePlayers={setFavoritePlayers}
          setPlayers={setPlayers}
        />
      </div>
    </div>
  );
}

export default App;
