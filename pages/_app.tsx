import { AppProps } from "next/app";

import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import "./global.scss";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta content="true" name="HandheldFriendly" />
        <meta content="width" name="MobileOptimized" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="keywords"
          content="кафедра ВТ, вычислительная техника, ЮЗГУ, Юго-Западный государственный университет, сайт юзгу"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
