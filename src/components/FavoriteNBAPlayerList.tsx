import { FC, useState } from "react";
import { constructReactKey } from "../utils/constructReactKey";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { EmptyListPlaceholder } from "./EmptyListPlaceholder/EmptyListPlaceholder";
import { NBAPlayerList } from "./NBAPlayerList/NBAPlayerList";
import {
  NBAPlayerItem,
  NBAPlayerListItem,
} from "./NBAPlayerListItem/NBAPlayerListItem";

export interface FavoriteNBAPlayerListProps {
  players: NBAPlayerItem[];
  setFavoritePlayers: React.Dispatch<React.SetStateAction<NBAPlayerItem[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<{ data: NBAPlayerItem[] }>>;
}

export const FavoriteNBAPlayerList: FC<FavoriteNBAPlayerListProps> = ({
  players,
  setFavoritePlayers,
  setPlayers,
}) => {
  const [backgroundColor, setBackGroundColor] = useState("#3d4148");

  return (
    <NBAPlayerList
      style={{
        backgroundColor,
      }}
      title={
        <div>
          <p className="list-title">Favorite NBA Players</p>
          <ColorPicker color={backgroundColor} setColor={setBackGroundColor} />
        </div>
      }
    >
      {players.length ? (
        players.map((player) => (
          <NBAPlayerListItem
            key={constructReactKey(player)}
            player={player}
            onClick={() => {
              setPlayers((players) => ({
                data: players.data.find(
                  (nbaPlayer) =>
                    constructReactKey(nbaPlayer) === constructReactKey(player)
                )
                  ? players.data
                  : [...players.data, player],
              }));
              setFavoritePlayers((players) =>
                players.filter(
                  (nbaPlayer) =>
                    constructReactKey(nbaPlayer) !== constructReactKey(player)
                )
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
};
