import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { FormEvent } from "react";
import { ChangeEvent } from "react";
interface ISearcher {
  info: any;
  setState: React.Dispatch<React.SetStateAction<object[]>>;
}
export const Searcher = ({ info, setState }: ISearcher): ReactJSXElement => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return setState(info);

    const resultsArray = info.filter(
      //@ts-ignore
      (staff) => {
        const nameInLowerCase = staff.attributes.name.toLowerCase();
        const positionInLowerCase =
          staff.attributes.positionUniversity.toLowerCase();
        return (
          nameInLowerCase.includes(e.target.value.toLowerCase()) ||
          positionInLowerCase.includes(e.target.value.toLowerCase())
        );
      }
    );
    console.log(resultsArray);

    setState(resultsArray);
  };
  return (
    <header>
      <input
        className="search__input"
        type="text"
        id="search"
        placeholder="Поиск"
        onChange={handleSearchChange}
      />
    </header>
  );
};
