import React from "react";
import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather Forecaster</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox placeholder={undefined} />
        </div>
      </div>
    </div>
  );
}
