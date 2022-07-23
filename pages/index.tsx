import Head from "next/head";
import Link from "next/link";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Loader } from "../components/loader";
import { MainHeader } from "../components/mainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { AppearanceWords } from "../components/appearanceWords";

const serverUrl: string = "http://localhost:1337";
interface ISlider {
  data: IAttribute;
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

export default function Home(): JSX.Element {
  // const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
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
  useLayoutEffect(() => {
    getImgs();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Кафедра ВТ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <div>
        <Suspense fallback={<Loader />}>
          <Swiper navigation={true} modules={[Navigation]}>
            {imgs.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <AppearanceWords text="Кафедра Вычислительной Техники" />
                  <div style={{ margin: `auto`, width: `50vw` }}>
                    <Image
                      key={i}
                      src={serverUrl + el.attributes.url}
                      // layout="fill"
                      width="50vw"
                      height="30vh"
                      alt="imgSlider"
                      style={{ display: `flex`, margin: `auto` }}
                      layout="responsive"
                    />
                  </div>
                  <br />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Suspense>
      </div>
    </div>
  );
}
