import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

// export const revalidate = 3;

export default async function Products() {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com/", {
    next: {
      revalidate: 0, // SSR (매번 재생성)
      // revalidate: 3, // ISR (3초마다 재생성)
    },
  });
  const data = await res.json();
  const fact = data.data;

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
      <article className={styles.article}>{fact}</article>
    </>
  );
}
