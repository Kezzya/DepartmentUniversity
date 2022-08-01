import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Anniversary = () => {
  return (
    <>
      <Head>
        <title>Юбилей кафедры</title>
      </Head>
      <AppearanceWords text="Юбилей кафедры" />
    </>
  );
};

export default Anniversary;
