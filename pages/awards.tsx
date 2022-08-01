import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Awards = () => {
  return (
    <>
      <Head>
        <title>Награды</title>
      </Head>
      <AppearanceWords text="Награды" />
    </>
  );
};

export default Awards;
