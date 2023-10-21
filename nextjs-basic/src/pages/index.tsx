import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getSortedPostsData } from "../../lib/posts";
import { GetStaticProps } from "next";

export default function Home({
  allpostsData,
}: {
  allpostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}) {
  allpostsData.map(({ id, date, title }) => {
    console.log(id, date, title);
  });
  return (
    <div>
      <Head>
        <title>Kim Jihoon</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[Kim Jihoon Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allpostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={styles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allpostsData = getSortedPostsData();

  return {
    props: {
      allpostsData,
    },
  };
};
