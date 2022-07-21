import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import { MainHeader } from "../components/mainHeader";

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container">
      <Head>
        <title>Кафедра ВТ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <Loader />
      <h1>
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}
