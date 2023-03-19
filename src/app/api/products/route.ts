import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export const GET = async () => {
  const products = await getProducts();

  return NextResponse.json({ products });
};
