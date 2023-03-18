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

export default function Product({ params }: Props) {
  if (params.slug === "notfound") {
    notFound();
  }
  return <h1>{params.slug} 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "shirts"];

  return products.map((product) => ({
    slug: product,
  }));
}
