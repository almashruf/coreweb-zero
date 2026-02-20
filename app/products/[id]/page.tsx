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

// Compress Images
// tsx
// // next/image auto-converts to WebP and resizes
// <Image
//   src="/hero.jpg"
//   width={800}
//   height={400}
//   alt="Banner"
//   quality={75}        // ← reduce quality
//   sizes="(max-width: 768px) 100vw, 800px"  // ← responsive
// />
