import React, { useEffect, useRef, useState } from "react";
import styles from "./appearanceWords.module.scss";
interface IText {
  text: string;
}
export const AppearanceWords = ({ text }: IText): JSX.Element => {
  const [letters, setLetters] = useState([""]);

  //   const [newLetters, setNewLetters] = useState(letters);
  const refContainer = useRef(null);
  useEffect(() => {
    setLetters(getEachLetter(text));

    //   letters.map((el: string) => setTimeout(createElement, 1000, el))
  }, []);
  return (
    <p className={styles.animatedText} ref={refContainer}>
      {refContainer.current === null ? (
        <></>
      ) : (
        // newLetters.map((el) => createElement(el))
        letters.map(
          (el: string) =>
            //   setTimeout(createElement, 100, el)
            createElement(el)
          //   React.createElement("span", { className: styles.animatedText }, el)
        )
      )}
    </p>
  );
};

const getEachLetter = (text: string): string[] => {
  let letters = text.split("");
  return letters;
};
const createElement = (el: string) => {
  return <span className={styles.animatedText}>{el}</span>;
};
