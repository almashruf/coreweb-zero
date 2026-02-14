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
      <a href="/checkout">Buy Now</a>
    </main>
  );
}