import Image from "next/image";
import React, { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import styles from "./mainHeader.module.scss";
export const MainHeader = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = (): void => {
    setIsActive(!isActive);
  };
  return (
    <div style={{ display: `flex`, flexDirection: `row` }}>
      <Image src="/images/logo.svg" alt="logo" width="150px" height="100px" />
      <div className={styles.headerText}>
        <p>Бакалавриат</p>
        <p>Магистратура</p>
        <p>Аспирантура</p>
        <p>Кадровый состав</p>
      </div>
      <HamburgerSqueeze
        isActive={isActive}
        barColor="white"
        toggleButton={toggleButton}
        className={styles.hamburgerInner}
      />
    </div>
  );
};
