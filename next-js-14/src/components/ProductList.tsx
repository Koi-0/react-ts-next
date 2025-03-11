"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../app/page";
import Link from "next/link";
import { getProduct } from "@/server-action";

// const fetchData = async () => {
//   const res = await fetch("http://localhost:4000/products", {
//     // cache: "no-store",
//     cache: "force-cache",
//   });
//   const data: Product[] = await res.json();

//   return data;
// };

const ProductList = () => {
  // server 컴포넌트
  // const { data } = await getProduct();

  // const res = await fetch("http://localhost:4000/products", {
  //   cache: "no-cache",
  // });
  // const data: Product[] = await res.json();

  // throw new Error("ProductList 오류!");

  // client 컴포넌트
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getProduct().then(({ data }) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <>Loading...</>;

  return (
    <div>
      {data.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div className="flex gap-4 rounded-md border p-4">
            <Image
              className="rounded-smr"
              width={150}
              height={150}
              src={product.images}
              alt={product.title}
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="mt-4 text-2xl">{product.price.amount}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
