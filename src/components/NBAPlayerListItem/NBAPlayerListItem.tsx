import { FC, MouseEventHandler } from "react";
import {
  FavoriteButton,
  FavoriteButtonProps,
} from "../FavoriteButton/FavoriteButton";
import styles from "./NBAPlayerListItem.module.css";

export interface NBAPlayerItem {
  id: number;
  first_name: string;
  last_name: string;
}

export interface NBAPlayerListItemProps extends FavoriteButtonProps {
  player: NBAPlayerItem;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const NBAPlayerListItem: FC<NBAPlayerListItemProps> = ({
  player: { first_name, last_name },
  onClick,
  filled,
}) => (
  <div className={styles.nbaPlayerListItem}>
    <span>
      {first_name} {last_name}
    </span>
    <FavoriteButton onClick={onClick} filled={filled} />
  </div>
);
