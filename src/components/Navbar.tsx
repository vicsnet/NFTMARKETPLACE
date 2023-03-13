/** @format */

import Link from "next/link";
import React from "react";
import Connect from "./Connect";

const Navbar = () => {
  return (
    <main className="">
      <div className="flex justify-between items-center mt-2 px-9">
        <div className="text-[20px] font-bold cursor-pointer">
          <h3 className="">Vince art</h3>
        </div>

        <div className="flex items-center gap-4 text-[16px] font-medium cursor-pointer ">
          <Link href="/mint">
            <h2>Mint NFT</h2>
          </Link>
          <Link href="/buynft">
            <h2>Buy NFT</h2>
          </Link>
          <Link href="/sell">
            <h2>Sell NFT</h2>
          </Link>
          <Link href="/collection">
            <h2>Your Collection</h2>
          </Link>
        </div>
        <div className="">
          <Connect />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
