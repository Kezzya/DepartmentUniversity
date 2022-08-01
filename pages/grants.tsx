import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const Grants = () => {
  return (
    <>
      <Head>
        <title>Гранты</title>
      </Head>
      <AppearanceWords text="Гранты" />
    </>
  );
};

export default Grants;
