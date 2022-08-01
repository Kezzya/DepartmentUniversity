import Head from "next/head";
import Image from "next/image";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Contacts = () => {
  return (
    <div style={{ backgroundImage: `url(/images/bgDefault.svg)` }}>
      <Head>
        <title>Контактная информация</title>
      </Head>
      <div>
        <AppearanceWords text="Контактная информация" />
        <p style={{ textAlign: `center` }}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%84%D0%B0%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B5%D1%82+%D0%AE%D0%97%D0%93%D0%A3/@51.7451952,36.1981329,18.25z/data=!4m13!1m7!3m6!1s0x412f03c735aa4343:0x1578a68e5463c22d!2z0YPQuy4g0KfQtdC70Y7RgdC60LjQvdGG0LXQsiwgMTksINCa0YPRgNGB0LosINCa0YPRgNGB0LrQsNGPINC-0LHQuy4sIDMwNTAwNA!3b1!8m2!3d51.7451976!4d36.1980427!3m4!1s0x412f03c0cfb06de7:0xe31c756047002c50!8m2!3d51.745167!4d36.1995859"
          >
            Адрес: Россия, г. Курск, ул. Челюскинцев, д. 19/2, ауд. а-307
          </a>
          <br /> Телефон кафедры:{" "}
          <a href="tel:+7 (4712) 22-26-65">8 (4712) 22-26-65</a> <br /> Телефон
          (заведующий кафедрой):{" "}
          <a href="tel:+7 (4712) 22-26-83">8 (4712) 22-26-83</a> <br />
          Факс: <a href="tel:+7 (4712) 22-26-70">8 (4712) 22-26-70</a> <br />
          e-mail: <a href="mailto: vt.swsu@yandex.ru">vt.swsu@yandex.ru</a>
          <br />
          <a
            target="_blank"
            href=" https://www.swsu.ru/structura/up/fivt/kvt/index.php"
          >
            https://www.swsu.ru/structura/up/fivt/kvt/index.php
          </a>
          <br />
          и.о. заведующего кафедрой, д.т.н., доцент Чернецкая Ирина Евгеньевна
        </p>
      </div>
      <div
        style={{ margin: `5vw`, backgroundImage: `url(/images/bgDefault.svg)` }}
      >
        Сегодня Вы стоите перед решением очень важного вопроса – выбор
        жизненного пути. Берем на себя смелость утверждать – Вы не ошибетесь,
        если придете к нам. Направления, по которым кафедра ведет подготовку,
        всегда считались престижными и пользовались высоким спросом на рынке
        труда. Кафедра, образованная в 1968 году, выпустила более 2500
        квалифицированных специалистов, многие в настоящее время – руководители,
        ведущие специалисты различных организаций, фирм, банков и т.д.
        Правильность выбора профессии подтверждается тем, что у нас учатся дети
        наших выпускников, знающих, что кафедра дает хорошие знания и навыки, и
        мы становимся одним коллективом, одной семьей не только на время учебы,
        но и на всю жизнь. Мы будем рады видеть Вас в нашем коллективе!
        <br />
        <br />
        Приглашаем Вас получить образование по направлениям подготовки
        <br />
        <br />
        {/* <Image
          src="/images/awards/year2005.jpg"
          width={`70px`}
          height={`100px`}
          alt="imgAwards"
        />
        Лучшая кафедра 2005 года среди кафедр вузов России */}
      </div>
    </div>
  );
};

export default Contacts;
