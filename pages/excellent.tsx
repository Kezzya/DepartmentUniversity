import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Excellent = () => {
  return (
    <>
      <Head>
        <title>Дипломы с отличием</title>
      </Head>
      <AppearanceWords text="Дипломы с отличием" />
    </>
  );
};

export default Excellent;
