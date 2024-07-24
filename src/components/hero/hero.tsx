import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section id='hero' className="pb-[454px]">
      <div className='container'>
        <div className="flex justify-between mt-[82px]">
          <div className="mt-[58px]">
            <h1 className='text-[48px] font-semibold text-[#2F2105] w-[489px]'>
              Enjoy your <span className='text-[#FF902B]'>coffee</span> before
              your activity
            </h1>
            <p className='text-[18px] text-[#7E7D7A] font-normal w-[393px] mt-[24px] mb-[32px]'>
              Boost your productivity and build your mood with a glass of coffee
              in the morning{" "}
            </p>
            <div className='flex items-center '>
              <button className='p-[12px_32px] bg-[#2F2105] flex text-white gap-[10px] rounded-[33px]'>
                <span>Order now</span>
                <Image src={"/cart.png"} width={22} height={22} alt='cart' />
              </button>
              <Link
                href='#'
                className='p-[10px_24px] text-[#F4AE26] text-[12px] text-center font-bold'
              >
                More menu
              </Link>
            </div>
          </div>
          <Image
            src={"/img-hero.png"}
            width={526.70587}
            height={416}
            alt='hero img'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
