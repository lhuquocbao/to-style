"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartProvider";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm mới", href: "/products" },
  { label: "Thời trang nam", href: "/products" },
  { label: "Bộ sưu tập", href: "/about" },
  { label: "Liên hệ", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <div className="hidden border-b border-zinc-100 py-2 text-center text-xs font-medium text-zinc-600 lg:block">
        Email: lhu.quocbao@gmail.com - Hotline: 0975397177 - Địa chỉ: TP. Biên Hòa, Đồng Nai, Việt Nam
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="text-sm font-bold uppercase tracking-[0.16em] md:hidden"
          aria-label="Mở menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.slice(0, 3).map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13px] font-bold uppercase tracking-[0.12em] transition hover:text-zinc-500 ${
                  isActive ? "text-black" : "text-zinc-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/" className="justify-self-center text-3xl font-black uppercase tracking-[0.18em]">
          TO<span className="font-light">STYLE</span>
        </Link>

        <div className="flex items-center justify-end gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(3).map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13px] font-bold uppercase tracking-[0.12em] transition hover:text-zinc-500 ${
                    isActive ? "text-black" : "text-zinc-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/cart"
            className="relative text-[13px] font-bold uppercase tracking-[0.12em] text-zinc-800 transition hover:text-black"
            aria-label={`Giỏ hàng có ${totalItems} sản phẩm`}
          >
            Giỏ hàng
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[11px] text-white">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto mb-3 max-w-7xl text-xs leading-6 text-zinc-600">
            Email: lhu.quocbao@gmail.com
            <br />
            Hotline: 0975397177
            <br />
            Địa chỉ: TP. Biên Hòa, Đồng Nai, Việt Nam
          </div>
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-100 py-3 text-sm font-bold uppercase tracking-[0.12em] text-zinc-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
