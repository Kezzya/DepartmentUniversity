import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

export const Searcher = (
  userInput: string,
  ulElement: HTMLElement
): ReactJSXElement => {
  const fixedUserInput = userInput.trim().toLowerCase();
  const liElements = ulElement.children;
  return <div>{/* {console.log(fullText.match(fixedUserInput))} */}</div>;
};
