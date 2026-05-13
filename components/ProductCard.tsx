import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {product.isNew && (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow">New</span>
          )}
          {product.isBestSeller && (
            <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white shadow">Hot</span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{product.categoryLabel}</p>
          <p className="text-xs text-zinc-500">{product.sizes.join(" / ")}</p>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-black text-black transition hover:text-zinc-600">{product.name}</h3>
        </Link>
        <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{product.shortDescription}</p>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-lg font-black text-black">{formatCurrency(product.price)}</p>
            {product.oldPrice && (
              <p className="text-sm text-zinc-400 line-through">{formatCurrency(product.oldPrice)}</p>
            )}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
