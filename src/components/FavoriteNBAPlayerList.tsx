import { FC } from "react";
import { EmptyListPlaceholder } from "./EmptyListPlaceholder/EmptyListPlaceholder";
import { NBAPlayerList } from "./NBAPlayerList/NBAPlayerList";
import {
  NBAPlayerItem,
  NBAPlayerListItem,
} from "./NBAPlayerListItem/NBAPlayerListItem";

export interface FavoriteNBAPlayerListProps {
  players: NBAPlayerItem[];
  setFavoritePlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
}

export const FavoriteNBAPlayerList: FC<FavoriteNBAPlayerListProps> = ({
  players,
  setFavoritePlayers,
  setPlayers,
}) => (
  <NBAPlayerList title={<p className="list-title">Favorite NBA Players</p>}>
    {players.length ? (
      players.map((player) => (
        <NBAPlayerListItem
          key={player.id}
          player={player}
          onClick={() => {
            setPlayers((players) => [...players, player]);
            setFavoritePlayers((players) =>
              players.filter((nbaPlayer) => nbaPlayer.id !== player.id)
            );
          }}
          filled
        />
      ))
    ) : (
      <EmptyListPlaceholder />
    )}
  </NBAPlayerList>
);
