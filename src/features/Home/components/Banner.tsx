import Image from 'next/image'
import React from 'react'
// import Ba from "../../../images/scree.png"
// import Bam from "../../../images/scree.png"


const Banner = () => {
  return (
    <section className='px-9 bg-[#120915] min-h-screen text-[#fefefe]'>
        <div className="">
            <h2 className=" text-[50px] font-medium w-[35%] leading-11 text-[#b5b2b8]" >Discover and Buy NFT from Vince art</h2>
            <p className="capitalize mt-[20px] text-[18px] font-normal w-[25%] text-[#6e5e7a]"> The largest and the the most uique digital place for buying non fungible token</p>

            <button className='border-[1px] rounded-lg p-[8px]'>Explore Collection</button>
        </div>
        <div className="">
            {/* <Image
            src={Bam} 
            /> */}
        </div>
    </section>
  )
}

export default Banner