// app/products/[id]/AddToCart.tsx — CLIENT (small JS)
"use client";

export default function AddToCart({ productId }: { productId: string }) {
  return (
    <button onClick={() => alert(`Added ${productId}`)}>Add to Cart</button>
  );
}


// import dynamic from "next/dynamic";

// // Only loads when needed — NOT on initial page load
// const HeavyReview = dynamic(() => import("./HeavyReview"), {
//   loading: () => <p>Loading reviews...</p>,
// });