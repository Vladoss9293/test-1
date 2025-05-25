import { useRouter } from "next/router";
import styles from "../../styles/users.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  return (
    <MainContainer title={user.name} className={styles.user}>
      <h1>Айди - {user.id}</h1>
      <span>Зовут - {user.name}</span>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user},
  };
}
