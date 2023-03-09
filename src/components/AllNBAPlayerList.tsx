import { FC, useCallback, useState } from "react";
import { constructReactKey } from "../utils/constructReactKey";
import { EmptyListPlaceholder } from "./EmptyListPlaceholder/EmptyListPlaceholder";
import { Loader } from "./Loader/Loader";
import { NBAPlayerList } from "./NBAPlayerList/NBAPlayerList";
import {
  NBAPlayerItem,
  NBAPlayerListItem,
} from "./NBAPlayerListItem/NBAPlayerListItem";
import debounce from "lodash.debounce";

interface PlayersResponse {
  data: NBAPlayerItem[];
  meta: {
    current_page: number | null;
    per_page: number | null;
    total_pages: number | null;
  };
}

export interface AllNBAPlayerListProps {
  players: PlayersResponse;
  setFavoritePlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<PlayersResponse>>;
  requestPlayers: (...args: any) => Promise<any>;
  loading?: boolean;
}

export const AllNBAPlayerList: FC<AllNBAPlayerListProps> = ({
  players,
  setFavoritePlayers,
  setPlayers,
  loading,
  requestPlayers,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: any) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    handleSearch(term);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value) => {
      const pagination = {
        page: players.meta.current_page,
        per_page: players.meta.per_page,
      };
      requestPlayers({
        ...pagination,
        search: value,
      });
    }, 500),
    []
  );

  return (
    <NBAPlayerList
      title={
        <>
          <p className="list-title">All NBA Players</p>
          <input
            type="search"
            disabled={loading}
            placeholder="Search for a player..."
            className="list-search-input"
            value={searchTerm}
            onChange={handleChange}
          />
          <div>
            <label
              style={{
                fontSize: ".5em",
              }}
            >
              Per page:{" "}
              <select
                disabled={loading}
                onChange={(e) => {
                  const pagination = {
                    page: players.meta.current_page,
                    per_page: Number(e.target.value),
                  };
                  requestPlayers({
                    ...pagination,
                    search: searchTerm,
                  });
                }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </label>
            <label
              style={{
                marginLeft: ".5em",
                fontSize: ".5em",
              }}
            >
              Current page:{" "}
              <select
                disabled={loading}
                onChange={(e) => {
                  const pagination = {
                    page: Number(e.target.value),
                    per_page: players.meta.per_page,
                  };
                  requestPlayers({
                    ...pagination,
                    search: searchTerm,
                  });
                }}
              >
                {[...new Array(players.meta?.total_pages ?? 0)].map(
                  (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  )
                )}
              </select>
            </label>
          </div>
        </>
      }
    >
      {!loading ? (
        players?.data.length ? (
          players?.data.map((player) => (
            <NBAPlayerListItem
              key={constructReactKey(player)}
              player={player}
              onClick={() => {
                setFavoritePlayers((players) => [...players, player]);
                setPlayers({
                  data: players?.data.filter(
                    (nbaPlayer) =>
                      constructReactKey(nbaPlayer) !== constructReactKey(player)
                  ),
                  meta: players.meta,
                });
              }}
            />
          ))
        ) : (
          <EmptyListPlaceholder />
        )
      ) : (
        <Loader />
      )}
    </NBAPlayerList>
  );
};
