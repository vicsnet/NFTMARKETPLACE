import React, { useEffect, useState } from 'react'
import { NFTAddress, NFTMarket } from '../../../contractAddress/contract';
import ABI_MARKET from '../../../abi/ABI_MARKET.json'
import ABI_NFT from '../../../abi/ABI_NFT.json'
import { useContractRead, useContractReads } from 'wagmi';
import axios from 'axios';

const useCollectionHooks = () => {

    const [nftData, setNftdata]:any =useState([]);

    const [fetchDetail, setFetchDetail]:any = useState([])
    
    const [marketMainDetail, setMarketMainDetail] = useState([]);
    const [uri, setUri] = useState([])



    const { data:main, isError:nftError, isLoading:nftLoading }:any = useContractRead({
        address: NFTMarket,
        abi: ABI_MARKET,
        functionName: 'fetchMarketItems',
    
        onSuccess(data :any){
          setNftdata(data)
        }
      })

      const nftUri:any = nftData.map((itemId :any) =>{
        return({
          address:NFTAddress,
          abi:ABI_NFT,
          functionName:"tokenURI",
          suspense: true,
          args:[
            itemId.itemId
    
          ],
          onSuccess(data :any){
            setUri(data)
          },
         
        })
      })

      const {data: MarketDetail, isLoading: MarketLoading, isError: MarketIsError}:any = useContractReads({
        contracts:nftUri,
        onSuccess(data:any){
          // console.log("success",data);
          setMarketMainDetail(data)
          
        }
        
      })

      const fetchURI = () =>{
        const holdData:any = [];
        {marketMainDetail?.map(async(item :any)=>{
         const fetchData :any = await axios.get(`https://ipfs.filebase.io/ipfs/${item}`)
         
          holdData.push(fetchData.data);

          setFetchDetail((prev:any)=>{
           return[...prev, fetchData.data]
          })
        })}
        console.log("holdData",holdData)
      
      }

  useEffect(()=>{
  fetchURI();
  
},[marketMainDetail])

return {fetchDetail, nftData, MarketLoading, nftLoading, main}
}

export default useCollectionHooks