import Link from "next/link";
import React from "react";

import styles from "./burgerWindow.module.scss";

interface IToggleBurger {
  toggleButton: () => void;
}
export const BurgerWindow = ({ toggleButton }: IToggleBurger): JSX.Element => {
  return (
    <div className={`${styles.blur} ${styles.burger}`} onClick={toggleButton}>
      <Link href="/contacts">
        <div>Контактная информация</div>
      </Link>
      <Link href="/grants">
        <div>Гранты</div>
      </Link>
      <Link href="/excellent">
        <div>Дипломы с отличием</div>
      </Link>
      <Link href="/history">
        <div>История кафедры</div>
      </Link>
      <Link href="/awards">
        <div>Награды</div>
      </Link>
      <Link href="/contest">
        <div>Конкурсы</div>
      </Link>
      <Link href="/science">
        <div>Наука</div>
      </Link>
      <Link href="/news">
        <div>Новости кафедры</div>
      </Link>
      <Link href="/publications">
        <div>Публикации</div>
      </Link>
      <Link href="/recognition">
        <div>Распознавание - 2021</div>
      </Link>
      <Link href="/cooperation">
        <div>Сотрудничество</div>
      </Link>
      <Link href="/anniversary">
        <div>Юбилей кафедры</div>
      </Link>
      <Link href="/studentcircle">
        <div>Студенческий научный кружок</div>
      </Link>
      <Link href="/journals">
        <div>Журналы, монографии, учебные пособия</div>
      </Link>
    </div>
  );
};
