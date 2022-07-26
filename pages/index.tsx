import Head from "next/head";
import Link from "next/link";
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

const serverUrl: string = "https://swsu.herokuapp.com";

export default function Home(): JSX.Element {
  // const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("one");
  const [studyAreas, setStudyAreas] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [imgs, setImgs] = useState([]);

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
            {imgs.map((el, i) => {
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
              textColor="text"
              indicatorColor="secondary"
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
              />
              <Tab
                value="two"
                label="Магистратура"
                style={{ margin: `auto` }}
                onClick={() => setStudyAreas(2)}
              />
              <Tab
                value="three"
                label="Аспирантура"
                style={{ margin: `auto` }}
                onClick={() => setStudyAreas(3)}
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
