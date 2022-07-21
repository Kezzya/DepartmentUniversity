import Image from "next/image";
import React, { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
export const MainHeader = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = (): void => {
    setIsActive(!isActive);
  };
  return (
    <div style={{ display: `flex`, flexDirection: `row` }}>
      <Image src="/images/logo.svg" alt="logo" width="150px" height="100px" />
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          margin: `auto`,
          gap: `30px`,
        }}
      >
        <p>Бакалавриат</p>
        <p>Магистратура</p>
        <p>Аспирантура</p>
        <p>Кадровый состав</p>

        <HamburgerSqueeze
          isActive={isActive}
          barColor="white"
          toggleButton={toggleButton}
        />
      </div>
    </div>
  );
};
