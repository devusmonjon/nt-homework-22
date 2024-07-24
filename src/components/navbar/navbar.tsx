import Link from "next/link";
import React from "react";
import { Logo } from "@/components";

const Navbar = () => {
  return (
    <div className='container pt-[36px]'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex gap-[142px] items-center'>
          <ul className='flex gap-[32px]'>
            <li>
              <Link href='#' className='text-[18px] font-normal text-[#FF902B]'>
                About us
              </Link>
            </li>
            <li>
              <Link href='#' className='text-[18px] font-normal'>
                Our Product
              </Link>
            </li>
            <li>
              <Link href='#' className='text-[18px] font-normal'>
                Delivery
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-[24px]">
            <div className='w-[222px] h-[40px] rounded-[35px] overflow-hidden'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='w-full h-full bg-white relative outline-none border-none'
              >
                <input
                  type='text'
                  placeholder='Cappuccino'
                  className='w-full h-full font-normal text-[12px] pl-[52px]'
                />
                <button
                  type='button'
                  className='absolute left-[12px] top-[8px]'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z'
                      stroke='#1D1D1D'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </button>
              </form>
            </div>
            <button type='button' title='cart'>
              <svg
                width='28'
                height='26'
                viewBox='0 0 28 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.66667 6.33333H24.0533C24.4259 6.33334 24.7943 6.41142 25.1349 6.56254C25.4754 6.71365 25.7805 6.93444 26.0305 7.21068C26.2805 7.48692 26.4698 7.81248 26.5863 8.16636C26.7027 8.52025 26.7437 8.89462 26.7067 9.26533L25.9067 17.2653C25.8409 17.9233 25.5329 18.5334 25.0426 18.9772C24.5523 19.4209 23.9146 19.6666 23.2533 19.6667H10.52C9.9033 19.6669 9.30557 19.4534 8.82859 19.0625C8.35162 18.6716 8.02487 18.1274 7.904 17.5227L5.66667 6.33333Z'
                  stroke='#1D1D1D'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.3333 25H23M5.66667 6.33333L4.58667 2.00933C4.51444 1.721 4.34794 1.46508 4.11361 1.28221C3.87928 1.09934 3.59057 1.00001 3.29333 1H1.66667L5.66667 6.33333ZM9.66667 25H12.3333H9.66667Z'
                  stroke='#1D1D1D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
