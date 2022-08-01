import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";

const StudentCircle = () => {
  return (
    <>
      <Head>
        <title>Студенческий научный кружок</title>
      </Head>
      <AppearanceWords text="Студенческий научный кружок" />
    </>
  );
};

export default StudentCircle;
