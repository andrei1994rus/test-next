// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest,NextApiResponse} from 'next';

const getNames:any=async ()=>
{
  let names;

  try
  {
    names=await fetch("https://test-redis.cyclic.app/person/lrange/all");
  }

  catch(e)
  {
    console.log(e);
    return e;
  }

  return names.json();
};

export default function handler(req:NextApiRequest,res:NextApiResponse)
{
  const names=getNames();
  
  setTimeout(()=>names.then((result:any)=>res.status(200).json(result),500));
}
