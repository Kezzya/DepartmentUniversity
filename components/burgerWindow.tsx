import React from "react";
import styles from "./burgerWindow.module.scss";
export const BurgerWindow = (): JSX.Element => {
  return (
    <div className={`${styles.blur} ${styles.burger}`}>
      <div>Контактная информация</div>
      <div>Гранты</div>
      <div>Дипломы с отличием</div>
      <div>История кафедры</div>
      <div>Награды</div>
      <div>Конкурсы</div>
      <div>Наука</div>
      <div>Новости кафедры</div>
      <div>Публикации</div>
      <div>Распознавание - 2021</div>
      <div>Сотрудничество</div>
      <div>Юбилей кафедры</div>
      <div>Студенческий научный кружок</div>
      <div>Журналы, монографии, учебные пособия</div>
    </div>
  );
};
