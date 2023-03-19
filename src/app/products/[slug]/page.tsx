import { getProduct, getProducts } from "@/service/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface Props {
  params: {
    slug: string;
  };
}

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
  return <h1>{product.name} 설명 페이지</h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
