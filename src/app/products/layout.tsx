import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "전체 제품 확인",
  description: "전체 제품을 확인합니다.",
};

export default function ProductsLayout({ children }: Props) {
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
