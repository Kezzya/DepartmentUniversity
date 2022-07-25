import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "./global.scss";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta content="true" name="HandheldFriendly" />
        <meta content="width" name="MobileOptimized" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
