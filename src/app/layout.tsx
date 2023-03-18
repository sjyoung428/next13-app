import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 판매 사이트",
  description: "제품 판매합니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
