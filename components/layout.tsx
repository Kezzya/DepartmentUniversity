import React from "react";
import styles from ".//layout.module.scss";
interface IChildren {
  children: React.ReactNode;
}
export const Layout = ({ children }: IChildren): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
