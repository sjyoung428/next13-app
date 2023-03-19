import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import ClothesImage from "../../../public/images/clothes.jpg";
import Image from "next/image";

// export const revalidate = 3;

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <h1>Products</h1>
      <Image src={ClothesImage} alt="옷" />
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
