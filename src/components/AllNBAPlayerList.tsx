import { FC, useState } from "react";
import { EmptyListPlaceholder } from "./EmptyListPlaceholder/EmptyListPlaceholder";
import { NBAPlayerList } from "./NBAPlayerList/NBAPlayerList";
import {
  NBAPlayerItem,
  NBAPlayerListItem,
} from "./NBAPlayerListItem/NBAPlayerListItem";

export interface AllNBAPlayerListProps {
  players: NBAPlayerItem[];
  setFavoritePlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
}

export const AllNBAPlayerList: FC<AllNBAPlayerListProps> = ({
  players,
  setFavoritePlayers,
  setPlayers,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = players.filter(
    (player) =>
      player.first_name.toLowerCase().includes(searchTerm) ||
      player.last_name.toLowerCase().includes(searchTerm)
  );

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </>
      }
    >
      {filteredPlayers.length ? (
        filteredPlayers.map((player) => (
          <NBAPlayerListItem
            key={player.id}
            player={player}
            onClick={() => {
              setFavoritePlayers((players) => [...players, player]);
              setPlayers((players) =>
                players.filter((nbaPlayer) => nbaPlayer.id !== player.id)
              );
            }}
          />
        ))
      ) : (
        <EmptyListPlaceholder />
      )}
    </NBAPlayerList>
  );
};
