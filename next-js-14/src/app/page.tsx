// import Link from "next/link";
import { Suspense } from "react";
import ProductList from "../components/ProductList";
import AppLoading from "./loading";

// export default function Home() {
//     return (
//         <div>
//             안녕하세요. Next.js입니다! <br />
//             {/* <a href={"/test"}>a태그 : Test로 이동하기</a> */}
//             <Link href={"/test"}>Test로 이동하기</Link>
//         </div>
//     );
// }

// ---------------------------------------------------------------------------

// "use client";

// import { useRouter } from "next/navigation";

// export default function Test() {
//     const router = useRouter();

//     const handleButtonClick = () => {
//         setTimeout(() => {
//             router.push("/test");
//         }, 3000);
//     };

//     return <button onClick={handleButtonClick}>클릭!</button>;
// }

// ---------------------------------------------------------------------------

// SSG

// export default async function Test() {
//   const res = await fetch("http://localhost:4000/products");
//   const data: Product[] = await res.json();

//   return (
//     <div className="m-4 p-8">
//       {data.map((product) => (
//         <div className="flex gap-4 rounded-md border p-4" key={product.id}>
//           <img
//             className="rounded-smr"
//             width={150}
//             height={150}
//             src={product.images}
//             alt={product.title}
//           />
//           <div className="flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold">{product.title}</h2>
//               <p className="text-sm">{product.description}</p>
//               <p className="mt-4 text-2xl">{product.price.amount}$</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// ---------------------------------------------------------------------------

// SSR

// export default async function Test() {
//   return (
//     <div>
//       <ProductList />
//     </div>
//   );
// }

// ---------------------------------------------------------------------------

// ISR

// export default async function Test() {
//   const res = await fetch("http://localhost:4000/products", {
//     next: {
//       revalidate: 3,
//     },
//   });
//   const data: Product[] = await res.json();

//   console.log("render");

//   return (
//     <div className="m-4 p-8">
//       {data.map((product) => (
//         <div className="flex gap-4 rounded-md border p-4" key={product.id}>
//           <img
//             className="rounded-smr"
//             width={150}
//             height={150}
//             src={product.images}
//             alt={product.title}
//           />
//           <div className="flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold">{product.title}</h2>
//               <p className="text-sm">{product.description}</p>
//               <p className="mt-4 text-2xl">{product.price.amount}$</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export interface Product {
  id: string;
  isNew: boolean;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: { name: string; values: string[] }[];
  price: { amount: string; currencyCode: string };
  variants: {
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
  }[];
  images: string;
  featuredImage: string;
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
}

// ---------------------------------------------------------------------------

export default async function Home() {
  return (
    <div>
      <h1>Sparta Shop</h1>
      <Suspense fallback={<AppLoading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
