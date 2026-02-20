// app/api/shopping-feed/route.ts
import { NextResponse } from "next/server";

const products = [
  {
    id: "1",
    title: "Shirt",
    price: "20.00 USD",
    link: "https://yourstore.com/products/1",
    image: "https://yourstore.com/images/shirt.jpg",
    availability: "in stock",
  },
  {
    id: "2",
    title: "Pants",
    price: "40.00 USD",
    link: "https://yourstore.com/products/2",
    image: "https://yourstore.com/images/pants.jpg",
    availability: "in stock",
  },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Our Store</title>
    ${products
      .map(
        (p) => `
    <item>
      <g:id>${p.id}</g:id>
      <g:title>${p.title}</g:title>
      <g:price>${p.price}</g:price>
      <g:link>${p.link}</g:link>
      <g:image_link>${p.image}</g:image_link>
      <g:availability>${p.availability}</g:availability>
      <g:condition>new</g:condition>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}