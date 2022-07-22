import Head from "next/head";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { Loader } from "../components/loader";
import { MainHeader } from "../components/mainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const serverUrl: string = "http://localhost:1337/";
interface ISlider {
  data: IAttribute;
}
interface IAttribute {
  attributes: IImages;
}
interface IImages {
  images: string;
}
export default function Home(): JSX.Element {
  // const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const getImgs = async () => {
    try {
      const sliderResp: Response = await fetch(
        `${serverUrl}api/sliders?populate=images`
      );
      const jsonSlider = await sliderResp.json();
      const images = jsonSlider.data.map(
        (el: IAttribute) => el.attributes.images
      );
      setImgs(images);
    } catch (err) {
      return "Error - " + err;
    }

    // const imgs[] = getJson.images;
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
      {console.log(imgs)}
      <MainHeader />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h1>
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}
