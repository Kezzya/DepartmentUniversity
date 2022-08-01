import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Journals = () => {
  return (
    <>
      <Head>
        <title>Журналы, монографии, учебные пособия</title>
      </Head>
      <AppearanceWords text="Журналы, монографии, учебные пособия" />
    </>
  );
};

export default Journals;
