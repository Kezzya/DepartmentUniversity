import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Contest = () => {
  return (
    <>
      <Head>
        <title>Конкурсы</title>
      </Head>
      <AppearanceWords text="Конкурсы" />
    </>
  );
};

export default Contest;
