import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import styles from "./mainHeader.module.scss";
import { BurgerWindow } from "../burgerWindow/burgerWindow";

export const MainHeader = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleButton = (): void => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className={styles.upHeader}>
        <a target="_blank" href="https://swsu.ru" rel="noopener noreferrer">
          <span>
            {" "}
            SWSU{" "}
            <Image
              src="/images/link.svg"
              width="10"
              height="10"
              alt="imgLink"
            />
          </span>
        </a>
        <a href="tel:+7 (471) 251-50-24">
          <span>+7 (471) 251-50-24</span>
        </a>
        <a href="mailto:rector@swsu.ru">
          <span>rector@swsu.ru</span>
        </a>
      </header>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          backgroundImage: `url(images/bgDefault.svg)`,
          borderBottom: `1px solid #fff`,
          paddingLeft: `10%`,
          paddingRight: `10%`,
          overflow: "auto",
          width: "100%",
        }}
      >
        <a
          target="_blank"
          href="https://swsu.ru"
          rel="noopener noreferrer"
          className={styles.hidden}
        >
          <Image src="/images/logo.svg" alt="logo" width="150" height="100" />
        </a>
        <div className={styles.headerText}>
          <p>
            <Link href={`/`}>
              <span style={{ textDecoration: `none` }}> Главная</span>
            </Link>
          </p>
          <p>
            <Link href={`/#Бакалавриат`}>
              <span style={{ textDecoration: `none` }}> Бакалавриат </span>
            </Link>
          </p>
          <p>
            <Link href={`/#Магистратура`}>
              <span style={{ textDecoration: `none` }}> Магистратура </span>
            </Link>
          </p>
          <p>
            <Link href={`/#Аспирантура`}>
              <span style={{ textDecoration: `none` }}>Аспирантура</span>
            </Link>
          </p>
          <p>
            <Link href={`/staff`}>
              <span style={{ textDecoration: `none` }}>Кадровый состав</span>
            </Link>
          </p>
        </div>
        <HamburgerSqueeze
          isActive={isActive}
          barColor="white"
          toggleButton={toggleButton}
          className={styles.hamburgerInner}
        />
      </div>
      <div>
        {isActive === true ? (
          <BurgerWindow toggleButton={toggleButton} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
