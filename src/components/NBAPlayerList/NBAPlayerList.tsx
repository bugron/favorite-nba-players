import { CSSProperties, FC, ReactNode } from "react";
import styles from "./NBAPlayerList.module.css";

export interface NBAPlayerListProps {
  title: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

export const NBAPlayerList: FC<NBAPlayerListProps> = ({
  title,
  children,
  style,
}) => (
  <article className={styles.list} style={style}>
    <div className={styles.listTitleContainer} style={style}>
      {title}
    </div>
    {children}
  </article>
);
