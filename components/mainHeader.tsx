import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import styles from "./mainHeader.module.scss";
export const MainHeader = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = (): void => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <header
        style={{
          borderBottom: `1px solid #fff`,
          backgroundImage: `url(images/bgHeader.svg)`,
          fontSize: `0.9em`,
          paddingLeft: `10%`,
          paddingRight: `10%`,
          gap: `2%`,
          display: `flex`,
          fontWeight: `400`,
        }}
      >
        <a target="_blank" href="https://swsu.ru" rel="noopener noreferrer">
          <span>
            {" "}
            SWSU <Image src="/images/link.svg" width={`10px`} height={`10px`} />
          </span>
        </a>
        <a href="tel:+7 (471) 251-50-24">+7 (471) 251-50-24</a>
        <a href="mailto:rector@swsu.ru">rector@swsu.ru</a>
      </header>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          backgroundImage: `url(images/bgHeader.svg)`,
          borderBottom: `1px solid #fff`,
          paddingLeft: `10%`,
          paddingRight: `10%`,
        }}
      >
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
    </div>
  );
};
