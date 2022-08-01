import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import { AppearanceWords } from "../components/appearanceWords/appearanceWords";
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
  // if not SSG
  // useEffect(() => {
  //   axios
  //     .get("https://swsu.herokuapp.com/api/staffs?populate=imageStaff")
  //     .then((response) => setStaffList(response.data.data));
  // }, []);

  // const [staffList, setStaffList] = useState([]);
  return (
    <div>
      <Head>
        <title>Кадровый состав</title>
      </Head>
      <AppearanceWords text="Кадровый состав кафедры ВТ" />
      <br />
      <div className={styles.staffWrap}>
        {staff.map((el: IStaff, i: number) => {
          let academicDegree = el.attributes.academicDegree;
          let academicTitle = el.attributes.academicTitle;
          let name = el.attributes.name;
          let subjectsInSystem = el.attributes.subjectsInSystem;
          let positionUniversity = el.attributes.positionUniversity;
          let scienceIndex = el.attributes.scienceIndex;
          let imageStaff = el.attributes.imageStaff.data.attributes.name;
          return (
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
          );
        })}
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
