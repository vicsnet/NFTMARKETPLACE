import React, { useEffect, useState } from 'react'
import { useContractRead, useContractReads } from 'wagmi'
import ABI_MARKET from "../../abi/ABI_MARKET.json";
import ABI_NFT from "../../abi/ABI_NFT.json"
import { NFTAddress, NFTMarket } from '../../contractAddress/contract';
import axios from "axios"
import useCollectionHooks from './hooks/useCollectionHooks';
import Link from 'next/link';



const Collection = () => {

  const {fetchDetail, nftData, MarketLoading, nftLoading} = useCollectionHooks()
  console.log(nftData)
  const [loaded, setIsLoaded] = useState(false)

  // console.log(nftData[0].tokenId)
  // const [nftData, setNftdata]:any =useState([]);

  // const [fetchDetail, setFetchDetail] = useState([])


  // the data is been sent to nftData
  // const { data, isError:nftError, isLoading:nftLoading }:any = useContractRead({
  //   address: NFTMarket,
  //   abi: ABI_MARKET,
  //   functionName: 'fetchMarketItems',

  //   onSuccess(data :[]){
  //     setNftdata(data)
  //   }
  // })
  // console.log(String(data[0].itemId));
  
  


  // const nftUri:any = nftData.map((itemId :any) =>{
  //   return({
  //     address:NFTAddress,
  //     abi:ABI_NFT,
  //     functionName:"tokenURI",
  //     args:[
  //        itemId.itemId

  //     ]
  //   })
  // })

// console.log(nftData);
// console.log("nft",nftData)

//   const {data: MarketDetail, isLoading: MarketLoading, isError: MarketIsError}:any = useContractReads({
//     contracts:nftUri,
//     onSuccess(data){
//       console.log("success",data);
      
//     }
    
//   })

//   console.log(MarketDetail)

//   const fetchURI = () =>{
//   const holdData:any = [];
//   {MarketDetail?.map(async (item :any)=>{
//    const fetchData :any = await axios.get(`https://ipfs.filebase.io/ipfs/${item}`)
//     holdData.push(fetchData.data)
//   })}
//   setFetchDetail(holdData)

// }

// console.log("fetch",fetchDetail);
if(loaded===false){
  
  setTimeout(() => {
    setIsLoaded(true)
  }, 3000);
}
useEffect(()=>{
//  useCollectionHooks()
  
},[])


  return (
    <section>
      {
        // loaded ? 
      <div className="">
    {fetchDetail?.map((data :any, index:number)=>{
      

    return(
     <div key={index} className="">
       
<div className="">
       

{
  data?.image?.slice(0,4) === "http" ? (

    <img src={`${data?.image}`} alt="" />
    ):
    (
    <img src={`https://ipfs.filebase.io/ipfs/${data?.image}`} alt="" />

  )
}
      </div>
      <p>{String(nftData[index]?.price)}</p>
       <p>{String(data?.name)}</p>
       <p>{String(data?.description)}</p>
       <div className="">
        <Link href={`/buynft/${String(nftData[index]?.tokenId)}`}>
        <button >Buy NFT</button>
        </Link>
       </div>
     </div>
     

    )
    }
    
    )}
      </div>
        //  :
        //  "loading.."
      }
    </section>
  )
}

export default Collection