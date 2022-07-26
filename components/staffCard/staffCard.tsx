import Image from "next/image";
import React from "react";

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
    <>
      <Image src={imageStaff} alt="imgStaff" width="300" height="330" />
      <div>{positionUniversity}</div>
      <div>{name}</div>
      <div>{academicDegree}</div>
      <div>{academicTitle}</div>
      <div>
        {
          <a href={subjectsInSystem} target="_blank" rel="noopener noreferrer">
            Преподаваемые дисциплины в ЭИОС
          </a>
        }
      </div>
      <div>
        <a href={scienceIndex} target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://i.imgur.com/qPtkbjA.png"}
            alt="imgScienceiNDEX"
            width="130"
            height="40"
          />
        </a>
      </div>
    </>
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
