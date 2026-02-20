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