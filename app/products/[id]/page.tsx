// app/products/[id]/page.tsx — SERVER (no JS shipped)
import AddToCart from "./AddToCart";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Product {id}</h1>
      <p>Price: \$20</p>
      {/* ONLY this tiny component ships JS */}
      <AddToCart productId={id} />
    </main>
  );
}
