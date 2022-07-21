import { AppProps } from "next/app";
import React from "react";
import "./global.scss";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
