import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppearanceWords } from "../components/appearanceWords";
import { StaffCard } from "../components/staffCard";
import styles from "../components/staffCard.module.scss";
const Staff = () => {
  useEffect(() => {
    axios
      .get("https://swsu.herokuapp.com/api/staffs?populate=imageStaff")
      .then((response) => setStaffList(response.data.data));
    console.log(staffList);
    console.log(staffList);
  }, []);

  const [staffList, setStaffList] = useState([]);
  return (
    <div>
      <AppearanceWords text="Кадровый состав кафедры ВТ" />
      <br />
      <div className={styles.staffWrap}>
        {staffList.map((el: IStaff, i: number) => {
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
