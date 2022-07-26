import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { AppearanceWords } from "../components/appearanceWords/appearanceWords";
import { Searcher } from "../components/searcher/searcher";
import { StaffCard } from "../components/staffCard/staffCard";
import styles from "../components/staffCard/staffCard.module.scss";
export async function getStaticProps() {
  const res: Response = await fetch(
    "https://swsu.herokuapp.com/api/staffs?populate=imageStaff"
  );
  const resJson = await res.json();
  const staff = resJson.data;

  return {
    props: {
      staff,
    },
  };
}
const Staff = ({ staff }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [teacherInfo, setTeacherInfo] = useState<object[]>([]);
  const [searchResult, setSearchResult] = useState<object[]>(staff);
  useEffect(() => {
    setTeacherInfo(staff);
    setSearchResult(staff);
  }, []);

  return (
    <div>
      <Head>
        <title>Кадровый состав</title>
      </Head>
      <div>
        <Searcher info={teacherInfo} setState={setSearchResult} />
      </div>

      <AppearanceWords text="Кадровый состав кафедры ВТ" />
      <br />
      <div className={styles.staffWrap}>
        <ul className={styles.staff}>
          {searchResult.map((el: any, i: number) => {
            const academicDegree = el.attributes.academicDegree;
            const academicTitle = el.attributes.academicTitle;
            const name = el.attributes.name;
            const subjectsInSystem = el.attributes.subjectsInSystem;
            const positionUniversity = el.attributes.positionUniversity;
            const scienceIndex = el.attributes.scienceIndex;
            const imageStaff = el.attributes.imageStaff.data.attributes.name;

            return (
              <li key={i}>
                {" "}
                <StaffCard
                  key={i}
                  academicDegree={academicDegree}
                  academicTitle={academicTitle}
                  name={name}
                  subjectsInSystem={subjectsInSystem}
                  positionUniversity={positionUniversity}
                  scienceIndex={scienceIndex}
                  imageStaff={imageStaff}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Staff;

interface IStaff {
  attributes: IAttribute;
}
interface IAttribute {
  academicDegree: string;
  academicTitle: string;
  name: string;
  subjectsInSystem: string;
  positionUniversity: string;
  scienceIndex: string;
  imageStaff: IImage;
  url: string;
}

interface IImage {
  data: IStaff;
}
