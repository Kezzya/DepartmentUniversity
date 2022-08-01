import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Recognition = () => {
  return (
    <>
      <Head>
        <title>Распознавание - 2021</title>
      </Head>
      <AppearanceWords text="Распознавание - 2021" />
    </>
  );
};

export default Recognition;
