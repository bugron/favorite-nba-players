import { FC } from "react";
import logo from "../../assets/images/nba-logo.svg";
import styles from "./PageTitle.module.css";

export const PageTitle: FC = () => (
  <header className={styles.title}>
    <img src={logo} className={styles.logo} alt="NBA logo" />
    <p className={styles.headerText}>Browse your favorite NBA players</p>
  </header>
);
