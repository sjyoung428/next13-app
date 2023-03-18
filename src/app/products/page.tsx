import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
