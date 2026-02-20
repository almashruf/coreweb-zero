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

"use client";

//GOOD — light handler
function handleClick() {
  // just update a small state
  setCount((c) => c + 1);
}

//BAD — heavy handler
function handleClick() {
  // filtering 10,000 items on click
  const filtered = hugeArray.filter((item) => item.price > 50);
  setItems(filtered);
}

"use client";

import { useState, useTransition } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value); // ← instant (high priority)

    startTransition(() => {
      // ← deferred (won't block input)
      const filtered = allProducts.filter((p) =>
        p.includes(e.target.value)
      );
      setResults(filtered);
    });
  }

  return (
    <div>
      <input onChange={handleChange} value={query} />
      {isPending ? <p>Searching...</p> : (
        <ul>
          {results.map((r) => <li key={r}>{r}</li>)}
        </ul>
      )}
    </div>
  );
}

const allProducts = Array.from({ length: 1000 }, (_, i) => `Product ${i}`);

// Start Render = when screen goes from WHITE to SOMETHING
// Speed Index  = how fast the VISIBLE area fills up

// external CSS blocks rendering
// <link rel="stylesheet" href="https://cdn.example.com/styles.css" />

// // GOOD — Tailwind is already inlined by Next.js
// // Just use className. No external CSS needed.


// Avoid Client-Side Data Fetching for Above-the-Fold
// tsx
// //  blank screen until data loads
// "use client";
// import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("/api/products").then(r => r.json()).then(setProducts);
//   }, []);
//   return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
// }
// tsx
// //  HTML arrives with data already included
// export default async function Products() {
//   const products = await fetch("https://api.example.com/products", {
//     next: { revalidate: 60 }
//   }).then(r => r.json());

//   return <ul>{products.map((p: any) => <li key={p.id}>{p.name}</li>)}</ul>;
// }

// Streaming with Loading UI
// tsx
// // app/products/loading.tsx
// export default function Loading() {
//   return <p>Loading products...</p>;
// }