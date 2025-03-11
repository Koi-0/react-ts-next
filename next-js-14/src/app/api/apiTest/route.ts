export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

export async function POST(request: Request) {
  console.log("POST /api/test");
}

export async function PUT(request: Request) {
  console.log("PUT /api/test");
}

export async function DELETE(request: Request) {
  console.log("DELETE /api/test");
}

export async function PATCH(request: Request) {
  console.log("PATCH /api/test");
}
