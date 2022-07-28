import Image from "next/image";
import React from "react";
import styles from "./staffCard.module.scss";
export const StaffCard = ({
  positionUniversity,
  name,
  academicDegree,
  academicTitle,
  subjectsInSystem,
  scienceIndex,
  imageStaff,
}: ITeacherCard) => {
  return (
    <div className={styles.staffWrap}>
      <Image src={imageStaff} alt="imgStaff" width="300px" height="400px" />
    </div>
  );
};

interface ITeacherCard {
  positionUniversity: string;
  name: string;
  academicDegree: string;
  academicTitle: string;
  subjectsInSystem: string;
  scienceIndex: string;
  imageStaff: string;
}
