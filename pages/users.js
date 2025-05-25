import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

export default function Users({users}) {
  return (
    <MainContainer title='Пользователи'>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/users/${item.id}`}>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  
  return {
    props: {users},
  }
}
