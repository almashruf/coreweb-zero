import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Our Store</h1>
      <Image
        src="/hero.jpg"
        alt="Store Banner"
        width={800}
        height={400}
        priority                // ← KEY: preloads this image
        sizes="100vw"
      />
      <a href="/products">View Products</a>
    </main>
  );
}

//  BAD: lazy loading on LCP image
// <Image src="/hero.jpg" loading="lazy" ... />

// BAD: CSS background image (can't be preloaded easily)
// <div style={{ backgroundImage: "url(/hero.jpg)" }} />

// Use priority on LCP images
// Use next/image (auto-optimizes format + size)

// GOOD — dimensions set
// <Image src="/hero.jpg" width={800} height={400} alt="Banner" />


// GOOD — space reserved
// <div className="min-h-[200px]">
//   {isLoaded ? <DynamicContent /> : null}
// </div>

// Font Display Swap (next/font handles this)
// tsx

// const inter = Inter({ subsets: ["latin"] }); 