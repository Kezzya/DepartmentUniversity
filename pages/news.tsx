import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const News = () => {
  return (
    <>
      <Head>
        <title>Новости кафедры</title>
      </Head>
      <AppearanceWords text="Новости кафедры" />
    </>
  );
};

export default News;
