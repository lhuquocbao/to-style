"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartProvider";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Liên hệ", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-black">
          TO<span className="text-zinc-500">STYLE</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-black ${
                  isActive ? "text-black" : "text-zinc-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold transition hover:border-black"
          >
            Giỏ hàng
            <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-xs text-white">{totalItems}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-lg border border-zinc-200 px-3 py-2 text-sm font-semibold md:hidden"
            aria-label="Mở menu"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
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
