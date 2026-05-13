import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
            New Minimal Collection
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Thời trang nam tối giản cho phong cách hiện đại.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            Khám phá áo thun, sơ mi, jeans, áo khoác và phụ kiện nam với tông màu trắng, đen, xám dễ phối đồ.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Xem sản phẩm
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Về MENSTYLE
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-5 text-black">
              <p className="text-sm font-semibold text-zinc-500">Best seller</p>
              <h3 className="mt-2 text-2xl font-black">Áo thun basic</h3>
              <p className="mt-12 text-4xl font-black">249K</p>
            </div>
            <div className="rounded-[1.5rem] bg-zinc-800 p-5">
              <p className="text-sm font-semibold text-zinc-400">New drop</p>
              <h3 className="mt-2 text-2xl font-black">Linen shirt</h3>
              <p className="mt-12 text-4xl font-black">499K</p>
            </div>
            <div className="rounded-[1.5rem] bg-zinc-900 p-5 sm:col-span-2">
              <p className="text-sm font-semibold text-zinc-400">Ưu đãi tuần này</p>
              <h3 className="mt-2 text-3xl font-black">Giảm đến 20% cho outfit tối giản</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
