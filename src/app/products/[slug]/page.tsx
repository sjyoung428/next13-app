import { getProduct, getProducts } from "@/service/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3;

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug} 설명 페이지`,
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  if (slug === "man" || slug === "women") {
    return <h1>{slug} 옷</h1>;
  }

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name} 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
