import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./appearanceWords.module.scss";
interface IText {
  text: string;
}
export const AppearanceWords = ({ text }: IText): JSX.Element => {
  return <span className={styles.animatedText}>{text}</span>;
};
