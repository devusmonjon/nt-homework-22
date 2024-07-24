"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { IProduct } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  const id = useSearchParams().get("id");
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className='container mt-[100px]'>
      <div className='w-full flex justify-between'>
        <div className='w-[300px]'>
          <div className='w-full h-[300px] rounded-lg overflow-hidden relative'>
            <Image
              src={product?.thumbnail || "https://cdn.dummyjson.com"}
              alt={product?.title || "Loading..."}
              fill
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex max-w-full overflow-x-auto gap-[2px] cursor-pointer hover:border-[#000]'>
            {product?.images.map((image, idx) => (
              <div
                className='w-[70px] h-[70px] overflow-hidden relative border'
                key={idx}
              >
                <Image
                  src={product?.thumbnail || "https://cdn.dummyjson.com"}
                  alt={product?.title || "Loading..."}
                  fill
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-[100%] pl-[200px] h-[370px] flex flex-col justify-between'>
          <div>
            <h1 className='text-[36px] font-bold mb-4'>
              {product?.title || "Loading..."}
            </h1>
            <p className='mb-2 text-[#797979]'>
              {product?.description || "Loading..."}
            </p>
            <div>
              <span>Rating: </span>
              <span>{product?.rating || "Loading..."}</span>
            </div>
          </div>
          <div>
            <div className='text-[24px] mb-4'>
              <span className='font-bold '>Price: </span>
              <span>$ {product?.price || "Loading..."}</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href='#' className="p-[12px_18px] bg-[#000] text-white font-bold">Buy Now</Link>
              <Link href='#'>Add To Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
