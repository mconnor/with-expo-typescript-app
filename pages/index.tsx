/* eslint-disable no-debugger */
import React, { useState } from "react";
import Link from "next/link";
import Layout from "components/Layout";
import Button from "components/Button";

export default function IndexPage(): JSX.Element {
  //const [time, setTiem] = useState(new Date());
  const [copy, setCopy] = useState("click me");

  const handleClick = () => {
    debugger;
console.log('clicked')
    setCopy(`clicked at ${Math.floor(Math.random()*100)}`);
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button clickHandler={handleClick} copy={copy}></Button>
    </Layout>
  );
}
