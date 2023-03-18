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

export default function Product({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  return <h1>{product} 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    slug: product,
  }));
}
