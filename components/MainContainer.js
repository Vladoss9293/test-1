import Head from "next/head";
import React from "react";
import A from "./A";

export default function MainContainer({ children, keywords, title }) {
  return (
    <>
      <Head>
        <meta keywords={"vladislav zgonnyk" + keywords}></meta>
        <title>{title}</title>
      </Head>

      <div className="navbar">
        <A href={`/`} text="Главная"></A>
        <A href={`/users`} text="Пользователи"></A>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
}
