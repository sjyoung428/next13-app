"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoProductsButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      모든 제품 보러가기
    </button>
  );
};

export default GoProductsButton;
