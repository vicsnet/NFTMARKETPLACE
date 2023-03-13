/** @format */

import { ethers } from "ethers";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import ABI_MARKET from "../../../abi/ABI_MARKET.json";
import { NFTMarket, NFTAddress } from "../../../contractAddress/contract";

const SellForm = () => {
  const [etherValue, setEtherValue] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  const { config } = usePrepareContractWrite({
    address: NFTMarket,
    abi: ABI_MARKET,
    functionName: "ListItemForSale",
    args: [NFTAddress, tokenId, price],
    overrides: {
      value: ethers.utils.parseEther("0.00067"),
    },
  });
  const { data:sellData, isLoading:sellLoading, isSuccess, write } = useContractWrite(config);

  const { data, isError, isLoading:sellWaitLoading } = useWaitForTransaction({
    hash:sellData?.hash,
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setTimeout(() => {
      write?.();
    }, 1000);
    console.log("click");
  };
  useEffect(() => {
    if(isError){
console.log("erro");

    }
    if(isSuccess){
        setTokenId("")
        setPrice("")
        console.log("success");
        
    }
  }, [isError])
  

  return (
    <div>
      <div className="px-9">
        <form>
          <div className="">
            <label htmlFor="">Token Id</label>
            <input
              type="text"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>{sellLoading || sellWaitLoading ?"loading...":"Sell"}</button>
        </form>
      </div>
    </div>
  );
};

export default SellForm;
