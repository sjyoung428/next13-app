interface Props {
  params: {
    slug: string;
  };
}

export default function Product({ params }: Props) {
  return <h1>{params.slug} 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "shirts"];

  return products.map((product) => ({
    slug: product,
  }));
}
