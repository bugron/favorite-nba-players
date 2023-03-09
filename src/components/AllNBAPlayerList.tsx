import { FC, useState } from "react";
import { Pagination } from "../App";
import { constructReactKey } from "../utils/constructReactKey";
import { EmptyListPlaceholder } from "./EmptyListPlaceholder/EmptyListPlaceholder";
import { Loader } from "./Loader/Loader";
import { NBAPlayerList } from "./NBAPlayerList/NBAPlayerList";
import {
  NBAPlayerItem,
  NBAPlayerListItem,
} from "./NBAPlayerListItem/NBAPlayerListItem";

export interface AllNBAPlayerListProps {
  players: NBAPlayerItem[];
  setFavoritePlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<{ data: NBAPlayerItem[] }>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  pagination: Pagination;
  requestPlayers: (...args: any) => Promise<any>;
  loading?: boolean;
}

export const AllNBAPlayerList: FC<AllNBAPlayerListProps> = ({
  players,
  setFavoritePlayers,
  setPlayers,
  loading,
  requestPlayers,
  pagination,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NBAPlayerList
      title={
        <>
          <p className="list-title">All NBA Players</p>
          <input
            type="search"
            placeholder="Search for a player..."
            className="list-search-input"
            value={searchTerm}
            onChange={(e) => {
              const term = e.target.value.toLowerCase();
              setSearchTerm(term);
              requestPlayers({
                ...pagination,
                search: term,
              });
            }}
          />
        </>
      }
    >
      {!loading ? (
        players?.length ? (
          players.map((player) => (
            <NBAPlayerListItem
              key={constructReactKey(player)}
              player={player}
              onClick={() => {
                setFavoritePlayers((players) => [...players, player]);
                setPlayers({
                  data: players.filter(
                    (nbaPlayer) =>
                      constructReactKey(nbaPlayer) !== constructReactKey(player)
                  ),
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
