const products = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Pants", price: 40 },
  { id: 3, name: "Shoes", price: 60 },
];

export default function Products() {
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <a href={`/products/${p.id}`}>
              {p.name} - ${p.price}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}