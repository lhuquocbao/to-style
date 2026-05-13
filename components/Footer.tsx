import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-black tracking-tight">
            TO<span className="text-zinc-400">STYLE</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
            Website bán quần áo nam phong cách hiện đại, tối giản và chuyên nghiệp. Dữ liệu đang dùng mẫu trong file data.ts.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">Menu</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            <Link href="/products" className="hover:text-white">Sản phẩm</Link>
            <Link href="/about" className="hover:text-white">Giới thiệu</Link>
            <Link href="/contact" className="hover:text-white">Liên hệ</Link>
            <Link href="/cart" className="hover:text-white">Giỏ hàng</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">Liên hệ</h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>Email: lhu.quocbao@gmail.com</p>
            <p>Hotline: 0975397177</p>
            <p>Địa chỉ: TP. Biên Hòa, Đồng Nai, Việt Nam</p>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © 2026 TOSTYLE. All rights reserved.
      </div>
    </footer>
  );
}
