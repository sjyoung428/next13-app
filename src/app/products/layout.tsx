import Link from "next/link";
import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function ProductsLayout({ children, params }: Props) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/man">남성옷</Link>
        <Link href="/products/women">여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
