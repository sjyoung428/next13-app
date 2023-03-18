import { getProducts } from "@/service/products";
import Link from "next/link";

export default function Products() {
  const products = getProducts();

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
