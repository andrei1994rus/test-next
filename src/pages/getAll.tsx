import axios from 'axios';
import Head from 'next/head'
import useSWR from 'swr';
import dynamic from 'next/dynamic';

import styles from '@/styles/GetAll.module.css';
import Error from '@/components/error';
import IServerSideProps from '@/interfaces/IServerSideProps';
import IName from '@/interfaces/IName';

const Loading=dynamic(()=>import('@/components/loading'));

const fetcher=(url:string)=>axios(url).then(res=>res.data);

export async function getServerSideProps()
{
  const API=process.env.NEXT_DOMAIN_GET_ALL!
  
  return {
    props: 
    {
      API: API
    }
  };
}

export default function GetAll({API}:IServerSideProps)
{
  const {data,error,isLoading}=useSWR(API,fetcher,
  {
    revalidateOnFocus: false,
    refreshWhenOffline: true
  });
  
  if(error)
  {
    console.log('error:',error);
  }

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
        {(isLoading) && <Loading />}
        {(error) && <Error errorMessage={error.message} errorCode={error.code}/>}
        {data?.list?.map((item:IName,index:number)=><li key={index}>{item.name}</li>)}
      </main>
    </>
  )
}