import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useCollectionHooks from '../../collection/hooks/useCollectionHooks'

const NftDetail = () => {
    const {fetchDetail, nftData}:any = useCollectionHooks();
    const {id}  = useRouter().query;

    const _id = Number(id)-1;

    const [data, setData] :any = useState([])
    const[loaded, setLoaded] = useState(false)


   
    setTimeout(() => {
        setLoaded(true)
    }, 3000);

    useEffect(() => {
      setData(fetchDetail)
    }, [])
    
    

    console.log("fetchD",fetchDetail)
    // console.log("fetchD",data[_id].name)
    // console.log("fetchD",data[_id].description)
    // console.log("fetchD",String(nftData[_id].price))


  return (
    <div>
        {loaded ?
<div className="">
    <div className="">
    {
  fetchDetail[_id]?.image?.slice(0,4) === "http" ? (

    <img src={`${fetchDetail[_id]?.image}`} alt="" />
    ):
    (
    <img src={`https://ipfs.filebase.io/ipfs/${fetchDetail[_id]?.image}`} alt="" />

  )
}
    </div>
{/* <img src={} alt="" /> */}
<h2 className="">{fetchDetail[_id]?.name}</h2>
<h2 className="">{fetchDetail[_id]?.description}</h2>
<h2 className="">{String(nftData[_id]?.price)}</h2>
</div>
: "Loading"
        }
    </div>
  )
}

export default NftDetail