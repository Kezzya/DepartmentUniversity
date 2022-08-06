import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";
import ExcellentStudentsTable from "../components/excellentStudentsTable/excellentStudentTable";

const Excellent = () => {
  return (
    <>
      <Head>
        <title>Дипломы с отличием</title>
      </Head>
      <AppearanceWords text="Дипломы с отличием" />
      <div
        style={{
          display: `flex`,
          backgroundImage: `url(/images/bgDefault.svg)`,
          gap: `6vw`,
          paddingBottom: `10px`,
        }}
      >
        <div>{""}</div>
        {<ExcellentStudentsTable />}
        <div>{""}</div>
      </div>
    </>
  );
};

export default Excellent;
