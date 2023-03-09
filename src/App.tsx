import { useEffect, useState } from "react";
import { AllNBAPlayerList } from "./components/AllNBAPlayerList";
import { FavoriteNBAPlayerList } from "./components/FavoriteNBAPlayerList";
import { NBAPlayerItem } from "./components/NBAPlayerListItem/NBAPlayerListItem";
import { PageTitle } from "./components/PageTitle/PageTitle";

import "./App.css";
import { useApi } from "./hooks/useApi";
import { getPlayers } from "./api/players";
import { ErrorBoundary } from "./components/ErrorBoundary";

export interface Pagination {
  page: number;
  per_page: number;
  search?: string;
}

function App() {
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 10,
  });
  const [favoritePlayers, setFavoritePlayers] = useState<NBAPlayerItem[]>([]);

  const playersApi = useApi(getPlayers);

  useEffect(() => {
    playersApi.request(pagination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <div className="App">
      <ErrorBoundary>
        <PageTitle />
        <div className="player-list-container">
          <AllNBAPlayerList
            players={playersApi.data.data}
            setFavoritePlayers={setFavoritePlayers}
            setPlayers={playersApi.setData as any}
            loading={playersApi.loading}
            setPagination={setPagination}
            requestPlayers={playersApi.request}
            pagination={pagination}
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
