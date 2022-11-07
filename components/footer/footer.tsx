import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./footer.module.scss";
let vk: HTMLImageElement;
let tg: HTMLImageElement;

export const Footer = (): JSX.Element => {
  useEffect(() => {
    vk = document.querySelector("#vk")!;
    tg = document.querySelector("#tg")!;
  });
  return (
    <footer className={styles.footerWrap}>
      <a target="_blank" href="https://swsu.ru" rel="noopener noreferrer">
        <Image src="/images/logo.svg" alt="logo" width="150" height="100" />
      </a>
      <a
        target="_blank"
        href="https://vk.com/swsu_ru"
        rel="noopener noreferrer"
        className={styles.vk}
      >
        <Image
          src="/images/vk.svg"
          alt="logo"
          width="45"
          height="45"
          id="vk"
          onMouseEnter={setVkHover}
          onMouseLeave={rmVkHover}
        />
      </a>
      <a
        target="_blank"
        href="https://t.me/swsu_kursk"
        rel="noopener noreferrer"
        className={styles.tg}
      >
        <Image
          src="/images/tg.svg"
          alt="logo"
          width="50"
          height="50"
          id="tg"
          //   onMouseEnter={(tg.src = "/images/tgHover.svg")}
          onMouseEnter={setTgHover}
          onMouseLeave={rmTgHover}
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/maps/place/%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%84%D0%B0%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B5%D1%82+%D0%AE%D0%97%D0%93%D0%A3/@51.7451952,36.1981329,18.25z/data=!4m13!1m7!3m6!1s0x412f03c735aa4343:0x1578a68e5463c22d!2z0YPQuy4g0KfQtdC70Y7RgdC60LjQvdGG0LXQsiwgMTksINCa0YPRgNGB0LosINCa0YPRgNGB0LrQsNGPINC-0LHQuy4sIDMwNTAwNA!3b1!8m2!3d51.7451976!4d36.1980427!3m4!1s0x412f03c0cfb06de7:0xe31c756047002c50!8m2!3d51.745167!4d36.1995859"
      >
        ул. Челюскинцев, д.19, Курск, Курская обл., 305041 (Нижний корпус ЮЗГУ)
      </a>
    </footer>
  );
};

const setTgHover = () => {
  tg.srcset = "/images/tgHover.svg";
};
const rmTgHover = () => {
  tg.srcset = "/images/tg.svg";
};

const setVkHover = () => {
  vk.srcset = "/images/vkHover.svg";
};
const rmVkHover = () => {
  vk.srcset = "/images/vk.svg";
};
