import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm"
    };
  }

  return {
    title: `${product.name} | MENSTYLE`,
    description: product.shortDescription
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-zinc-500">
          <Link href="/products" className="font-semibold text-black hover:underline">
            Sản phẩm
          </Link>
          <span className="px-2">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">{product.categoryLabel}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600">{product.description}</p>

            <div className="mt-6 flex items-end gap-3">
              <p className="text-3xl font-black text-black">{formatCurrency(product.price)}</p>
              {product.oldPrice && <p className="text-lg text-zinc-400 line-through">{formatCurrency(product.oldPrice)}</p>}
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-5">
                <p className="text-sm font-bold text-black">Kích thước</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-5">
                <p className="text-sm font-bold text-black">Màu sắc</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <AddToCartButton product={product} fullWidth />
            </div>

            <div className="mt-8 rounded-3xl bg-zinc-100 p-5 text-sm leading-6 text-zinc-600">
              <p className="font-bold text-black">Ghi chú:</p>
              <p>Đây là website demo, nút thêm vào giỏ hàng chỉ giả lập trên trình duyệt bằng localStorage.</p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-black">Sản phẩm cùng danh mục</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
