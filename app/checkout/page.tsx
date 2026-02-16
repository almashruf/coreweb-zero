export default function Checkout() {
  return (
    <main>
      <h1>Checkout</h1>
      <p>Thank you for your purchase!</p>
    </main>
  );
}

// need to keep main content as server component

// export default function Home(){
//     return <h1>Our Store</h1>;//html direct 
// }

// "use client "

// export default function Home(){
//     return <h1>Our Store</h1>;// need js to render
// }

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

// here next/font self-hosts fonts, no external request