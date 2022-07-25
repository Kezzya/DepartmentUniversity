import Image from "next/image";
import React from "react";
import styles from "./advantagesSwsu.module.scss";

export const AdvangatesSwsu = (): JSX.Element => {
  return (
    <div className={styles.divWrap}>
      <div></div>
      {srcImgs.map((el, i) => {
        return (
          <div key={i}>
            <Image
              src={el}
              width="50px"
              height="50px"
              alt="img"
              key={i}
              className={styles.imgs}
            />
            <p>{textAdvantages[i]}</p>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

const srcImgs = [
  "/images/science/atom.svg",
  "/images/science/magnet.svg",
  "/images/science/satellite.svg",
  "/images/science/science-axis.svg",
  "/images/science/statistics-graph.svg",
  "/images/science/molecule.svg",
];
const textAdvantages = [
  "Актуальные знания",
  "Современное оборудование",
  "Помощь в обучении",
  "Получение научной работы",
  "Помощь в трудоустройстве",
  "Повышенную стипендию, общежитие рядом с главным корпусом",
];
