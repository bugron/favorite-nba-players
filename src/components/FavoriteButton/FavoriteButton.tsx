import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { StarIcon } from "../StarIcon/StarIcon";
import styles from "./FavoriteButton.module.css";

export interface FavoriteButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  filled?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  filled,
  ...buttonProps
}) => (
  <button
    {...buttonProps}
    className={classNames(buttonProps.className, styles.starButton)}
  >
    <StarIcon filled={filled} />
  </button>
);
