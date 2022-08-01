import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Publications = () => {
  return (
    <>
      <Head>
        <title>Публикации</title>
      </Head>
      <AppearanceWords text="Публикации" />
    </>
  );
};

export default Publications;
