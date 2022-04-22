import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "./Main";
import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Achyuth Jois M</title>
        <meta name="description" content="Full stack developer 😎" />
        <link rel="icon" href="/icon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Main />
    </div>
  );
}
