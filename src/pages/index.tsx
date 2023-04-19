import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home()
{
  return (
    <>
      <Head>
        <title>Test Next App</title>
        <meta name="description" content="Test next app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <span>This app can:</span>
        <ul className={styles.main__ul}>
          <li>output list all names (<Link className={styles.main__link} href="/getAll">/getAll</Link>);</li>
          <li>output name by index (<Link className={styles.main__link} href="/getOne">/getOne</Link>).</li>
        </ul>
        <span className={styles.main__warning}>This app use async request.</span>
      </main>
    </>
  )
}
