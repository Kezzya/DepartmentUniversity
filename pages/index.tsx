import Head from "next/head";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { Loader } from "../components/loader";
import { MainHeader } from "../components/mainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

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
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {imgs.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  key={i}
                  src={serverUrl + el.attributes.url}
                  width={`1050px`}
                  height={`650px`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <h1>
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}
