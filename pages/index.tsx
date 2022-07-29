import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Loader } from "../components/loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { AppearanceWords } from "../components/appearanceWords";
import { Tab, Tabs } from "@mui/material";
import MagistracyTable from "../components/studyAreas/magistracy";
import PhdTable from "../components/studyAreas/phd";
import BachelorTable from "../components/studyAreas/bachelor";
import { AdvangatesSwsu } from "../components/advantagesSwsu";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import ReactPlayer from "react-player";
const serverUrl: string = "https://swsu.herokuapp.com";

export default function Home(): JSX.Element {
  // const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("one");
  const [studyAreas, setStudyAreas] = useState(1);
  const [pageLoaded, setPageLoaded] = useState(false);
  const handleChange = (event: SyntheticEvent<Element>, newValue: string) => {
    setValue(newValue);
  };
  const [imgs, setImgs] = useState([]);
  interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
  }
  // get images from Strapi Headless CMS
  const getImgs = async () => {
    try {
      const sliderResp: Response = await fetch(
        `${serverUrl}/api/sliders?populate=images`
      );

      const jsonSlider = await sliderResp.json();
      const [images] = jsonSlider.data.map(
        (el: IAttribute) => el.attributes.images.data
      );
      setImgs(images);
    } catch (err) {
      return "Error - " + err;
    }
  };

  useEffect(() => {
    setPageLoaded(true);
    getImgs();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Кафедра ВТ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Suspense fallback={<Loader />}>
          <Swiper navigation={true} modules={[Navigation]}>
            {imgs.map((el: IElement, i) => {
              return (
                <SwiperSlide key={i}>
                  <AppearanceWords text="Кафедра Вычислительной Техники" />
                  <div
                    style={{ margin: `auto`, width: `50vw`, height: `30vw` }}
                  >
                    <Image
                      key={i}
                      src={serverUrl + el.attributes.url}
                      width="50vw"
                      layout="responsive"
                      height="30vh"
                      alt="imgSlider"
                      style={{ display: `flex`, margin: `auto` }}
                    />
                  </div>
                  <br />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Suspense>
        <div className="bgDefault">
          <AppearanceWords text="Направления" />

          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              aria-label="secondary tabs example"
              style={{
                backgroundImage: `url(/images/bgDefault.svg)`,
              }}
            >
              <Tab
                value="one"
                label="Бакалавриат"
                style={{ margin: `auto` }}
                onClick={() => setStudyAreas(1)}
                id="Бакалавриат"
              />

              <Tab
                value="two"
                label="Магистратура"
                style={{ margin: `auto` }}
                onClick={() => setStudyAreas(2)}
                id="Магистратура"
              />
              <Tab
                value="three"
                label="Аспирантура"
                style={{ margin: `auto` }}
                onClick={() => setStudyAreas(3)}
                id="Аспирантура"
              />
            </Tabs>
          </div>
        </div>
      </div>
      <div
        style={{
          display: `flex`,
          backgroundImage: `url(/images/bgDefault.svg)`,
          gap: `6vw`,
          paddingBottom: `10px`,
        }}
      >
        <div>{""}</div>
        {setStudyTable(studyAreas)}
        <div>{""}</div>
      </div>
      <div
        style={{
          backgroundImage: `url(/images/bgDefault.svg)`,
          textAlign: `center`,
          paddingBottom: `10px`,
        }}
      >
        <AppearanceWords text="Студент кафедры ВТ получает" />
        <AdvangatesSwsu />
      </div>
      <div
        style={{
          backgroundImage: `url(/images/bgDefault.svg)`,
          textAlign: `center`,
          paddingBottom: `10px`,
          paddingTop: `10px`,
        }}
      >
        <AppearanceWords text="Местонахождение кафедры" />
        <div style={{ display: `flex`, marginTop: `30px` }}>
          <YMaps>
            <div style={{ margin: `auto` }}>
              <Map
                defaultState={{
                  center: [51.745147, 36.199474],
                  zoom: 13,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                <Placemark defaultGeometry={[51.745147, 36.199474]} />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
      <div
        style={{
          display: `flex`,
          backgroundImage: `url(/images/bgDefault.svg)`,
        }}
      >
        <div
          style={{ margin: `auto`, textAlign: `center`, marginBottom: `30px` }}
        >
          <AppearanceWords text="ОБ УНИВЕРСИТЕТЕ" />
          {
            // We have to add player after mount/useEffect, other way you get error
            pageLoaded ? (
              <ReactPlayer url="https://www.youtube.com/watch?v=9W0xG8SpMCk" />
            ) : (
              0
            )
          }
        </div>
      </div>
    </div>
  );
}

interface IAttribute {
  attributes: IImages;
}
interface IImages {
  images: IData;
}
interface IData {
  data: object[];
}
interface IElement {
  attributes: IURL;
}
interface IURL {
  url: string;
}
const setStudyTable = (number: number): JSX.Element => {
  switch (number) {
    case 1:
      return <BachelorTable />;
    case 2:
      return <MagistracyTable />;
    case 3:
      return <PhdTable />;
    default:
      return <BachelorTable />;
  }
};
