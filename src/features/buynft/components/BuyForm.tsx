import React, { SyntheticEvent, useState } from 'react'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { NFTAddress } from '../../../contractAddress/contract';
import ABI_NFT from "../../../abi/ABI_NFT.json"

const BuyForm = () => {
const [] = useState("")
    const { config} = usePrepareContractWrite({
        address: NFTAddress,
        // @ts-ignore
        mode: 'recklesslyUnprepared',
        abi: ABI_NFT,
        functionName: 'createToken',
        args:[
          
        ]
      })

      const { data:mintData, isLoading:mintLoading, isSuccess:mintSuccess, write } = useContractWrite(config)

    const { data:waitData, isError:waitError, isLoading:waitLoading } = useWaitForTransaction({
      hash: mintData?.hash,
    })
    const handleSubmit = (e :SyntheticEvent) =>{
        e.preventDefault()

    }
  return (
    <div>
        <form>
          hello
             {/* <div className="">
                <label htmlFor="">Item Id</label>
                <input type="text" value={} onChange={}/>
             </div>
             <div className="">
                <label htmlFor="">Price</label>
                <input type="text" value={} onChange={}/>
             </div>
             <div className="">
                <label htmlFor=""></label>
                <input type="text" value={} onChange={} />
             </div> */}
             {/* <button>But NFT</button> */}
        </form>
    </div>
  )
}

export default BuyForm