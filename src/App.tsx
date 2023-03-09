import { useEffect, useState } from "react";
import { AllNBAPlayerList } from "./components/AllNBAPlayerList";
import { FavoriteNBAPlayerList } from "./components/FavoriteNBAPlayerList";
import { NBAPlayerItem } from "./components/NBAPlayerListItem/NBAPlayerListItem";
import { PageTitle } from "./components/PageTitle/PageTitle";

import "./App.css";
import { useApi } from "./hooks/useApi";
import { getPlayers } from "./api/players";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [favoritePlayers, setFavoritePlayers] = useState<NBAPlayerItem[]>([]);

  const playersApi = useApi(getPlayers);

  useEffect(() => {
    playersApi.request({
      per_page: 10,
      page: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <PageTitle />
        <div className="player-list-container">
          <AllNBAPlayerList
            players={playersApi.data as any}
            setFavoritePlayers={setFavoritePlayers}
            setPlayers={playersApi.setData as any}
            loading={playersApi.loading}
            requestPlayers={playersApi.request}
          />
          <FavoriteNBAPlayerList
            players={favoritePlayers}
            setFavoritePlayers={setFavoritePlayers}
            setPlayers={playersApi.setData as any}
          />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
