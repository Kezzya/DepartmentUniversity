import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Loader } from "../components/loader";

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader />
      <h1>
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}
