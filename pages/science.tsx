import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Science = () => {
  return (
    <>
      <Head>
        <title>Наука</title>
      </Head>
      <AppearanceWords text="Наука" />
    </>
  );
};

export default Science;
