import { getProducts } from "@/service/products";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
