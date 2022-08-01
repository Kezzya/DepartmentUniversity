import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const History = () => {
  return (
    <>
      <Head>
        <title>История кафедры</title>
      </Head>
      <AppearanceWords text="История кафедры" />
    </>
  );
};

export default History;
