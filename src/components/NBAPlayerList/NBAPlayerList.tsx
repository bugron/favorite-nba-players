import { FC, ReactNode } from "react";
import styles from "./NBAPlayerList.module.css";

export interface NBAPlayerListProps {
  title: ReactNode;
  children?: ReactNode;
}

export const NBAPlayerList: FC<NBAPlayerListProps> = ({ title, children }) => (
  <article className={styles.list}>
    <div className={styles.listTitleContainer}>{title}</div>
    {children}
  </article>
);
