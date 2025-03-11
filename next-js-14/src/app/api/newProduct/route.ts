import { Product } from "@/app/page";

export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Product[] = await res.json();
  const newData = data.filter((p) => p.isNew);

  return Response.json({ newData });
}
