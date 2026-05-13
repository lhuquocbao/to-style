"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/types";

type AddToCartButtonProps = {
  product: Product;
  fullWidth?: boolean;
};

export default function AddToCartButton({ product, fullWidth = false }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {added ? "Đã thêm" : "Thêm vào giỏ"}
    </button>
  );
}
