import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Address, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import ABI_NFT from '../../../abi/ABI_NFT.json'
import {NFTAddress} from '../../../contractAddress/contract'


interface Iwrite{
  address:Address,
  mode:[],
  abi:[],

}
const MintForm = () => {

    
    const [tokenCid, setTokenCid] = useState("")
    
    const { config} = usePrepareContractWrite({
      address: NFTAddress,
      // @ts-ignore
      mode: 'recklesslyUnprepared',
      abi: ABI_NFT,
      functionName: 'createToken',
      args:[
        tokenCid,
      ]
    })

        
    const { data:mintData, isLoading:mintLoading, isSuccess:mintSuccess, write } = useContractWrite(config)

    const { data:waitData, isError:waitError, isLoading:waitLoading } = useWaitForTransaction({
      hash: mintData?.hash,
    })

    const handleSubmit = (e:SyntheticEvent) =>{
        e.preventDefault();
        setTimeout(() => {
            write?.()
        }, 1000);

    }

    useEffect(() => {
      if(waitError){
        console.log("error occured");
        
      }
      if(mintSuccess){
        console.log("Succesfully minted");
        
      }
    }, [waitError,])
    

  return (
    <section className='px-9'>
        <form>
            <label>nFT CID</label>
            <input type="text" placeholder='Token CID' value={tokenCid} onChange={(e)=>setTokenCid(e.target.value)}/>

            <button onClick={handleSubmit}>{ mintLoading || waitLoading ? "Loading":"Mint nFT"}</button>
        </form>
    </section>
  )
}

export default MintForm