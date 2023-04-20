import axios from 'axios';
import Head from 'next/head'
import useSWR from 'swr';

import styles from '@/styles/GetAll.module.css';

const fetcher=(url:string)=>axios(url).then((res)=>res.data);

export async function getServerSideProps()
{
  const API=process.env.NEXT_DOMAIN_GET_ALL!
  console.log(API);
  return {
    props: 
    {
      API: API
    }
  };
}

export default function GetAll({API}:any)
{
  console.log(API);
  const {data,error}=useSWR(API,fetcher);
  
  return (
    <>
      <Head>
        <title>Get list names</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1>Names</h1>
        {(!data) && <span>Loading...</span>}
        {(error) && <span>An error has occurred.</span>}
        {data?.list.map((item:any,index:number)=><li key={index}>{item.name}</li>)}
      </main>
    </>
  )
}