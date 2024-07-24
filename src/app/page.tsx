"use client";

import { Header } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IReview {
  rating: string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8").then(res => res.json()).then(data => setProducts(data.products))
  }, [])
  return (
    <div>
      <Header />
      <div className='container'>
        <div>
          <h1 className='text-[32px] tracking-[1.28px] font-semibold my-[37px]'>
            Special menu for you
          </h1>
          <div className="flex justify-between flex-wrap gap-2">
            {products.map(product => (
              <div className='w-[356px] h-[385px] rounded-[10px] shadow-box flex items-center flex-col py-[24px] px-[18.05px]' key={product.id}>
              <div className='w-[307px] h-[226px] relative overflow-hidden'>
                <Image
                  src={product.thumbnail}
                  fill
                  className='object-cover cursor-pointer'
                  alt='image'
                  onClick={() => router.push(`/products?id=${product.id}`)}
                />
              </div>
              <div className='w-full flex items-center justify-between mt-[19px]'>
                <h1 className='text-[24px] font-semibold text-[#2F2105] cursor-pointer' onClick={() => router.push(`/products?id=${product.id}`)}>
                  {product.title.slice(0,9)}..
                </h1>
                <span className='tracking-[0.96px] text-[24px] font-bold'>
                  {product.price} $
                </span>
              </div>
              <div className='w-full flex justify-between items-center mt-[5px]'>
                <p className='text-[14px] tracking-[0.56px] font-semibold text-[#7E7D7A] w-[161px]'>
                  {product.description.slice(0, 30)} ...
                </p>
                <button type="button">
                  <Image src={"/cart-large.png"} alt="add to cart" width={43} height={43} className="" />
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
