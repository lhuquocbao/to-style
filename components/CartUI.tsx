"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatCurrency } from "@/lib/utils";

export default function CartUI() {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center">
        <h2 className="text-2xl font-black text-black">Giỏ hàng đang trống</h2>
        <p className="mt-3 text-zinc-600">Hãy chọn vài sản phẩm nam yêu thích để thêm vào giỏ hàng giả lập.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
        >
          Mua sắm ngay
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr]">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="120px" />
            </div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{item.categoryLabel}</p>
                <h3 className="mt-1 text-lg font-black text-black">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-600">{formatCurrency(item.price)}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:justify-between">
                <div className="flex items-center rounded-full border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-4 py-2 text-lg font-bold"
                    aria-label="Giảm số lượng"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    className="px-4 py-2 text-lg font-bold"
                    aria-label="Tăng số lượng"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm font-semibold text-zinc-500 underline underline-offset-4 hover:text-black"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-black text-black">Tóm tắt đơn hàng</h2>
        <div className="mt-6 space-y-4 text-sm text-zinc-600">
          <div className="flex justify-between">
            <span>Tổng sản phẩm</span>
            <span className="font-bold text-black">{totalItems}</span>
          </div>
          <div className="flex justify-between">
            <span>Tạm tính</span>
            <span className="font-bold text-black">{formatCurrency(totalPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span className="font-bold text-black">Miễn phí</span>
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-200 pt-6">
          <div className="flex justify-between text-lg font-black text-black">
            <span>Tổng cộng</span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
          >
            Thanh toán giả lập
          </button>
          <button
            type="button"
            onClick={clearCart}
            className="mt-3 w-full rounded-full border border-zinc-200 px-6 py-3 text-sm font-bold text-zinc-700 transition hover:border-black hover:text-black"
          >
            Xóa toàn bộ giỏ hàng
          </button>
        </div>
      </aside>
    </div>
  );
}
