import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;

export default async function Products() {
  throw new Error();

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
      <MeowArticle />
    </>
  );
}
