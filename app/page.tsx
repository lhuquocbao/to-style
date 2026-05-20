import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products
    .filter((product) => product.isBestSeller || product.isNew)
    .slice(0, 6);

  const homeCategories = categories.filter((category) => category.id !== "all");

  return (
    <>
      <HeroSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Danh mục nổi bật"
            title="Mua sắm theo phong cách"
            description="Những nhóm sản phẩm chủ lực được sắp xếp gọn gàng để bạn chọn nhanh outfit phù hợp cho công sở, dạo phố và các dịp đặc biệt."
          />

          <div className="mt-10 grid gap-px bg-zinc-200 sm:grid-cols-2 lg:grid-cols-5">
            {homeCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group bg-white p-7 transition hover:bg-zinc-950"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-400 transition group-hover:text-white/55">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-lg font-black uppercase tracking-[0.08em] text-black transition group-hover:text-white">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 transition group-hover:text-white/70">
                  Xem các sản phẩm thuộc danh mục {category.name.toLowerCase()}.
                </p>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-black transition group-hover:text-white">
                  Xem ngay
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="New arrival"
            title="Sản phẩm nổi bật"
            description="Các thiết kế mới và bán chạy cho tủ đồ nam hiện đại."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex border border-black bg-black px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
              Bộ sưu tập mới
            </p>
            <h2 className="mt-4 max-w-lg font-serif text-5xl italic leading-tight text-black sm:text-6xl">
              Office wardrobe, elevated.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600">
              Kết hợp sơ mi, quần tây và áo khoác nhẹ để tạo nên phong cách lịch sự,
              tối giản nhưng vẫn nổi bật trong môi trường học tập và làm việc.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex border border-black px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-black hover:text-white"
            >
              Khám phá bộ sưu tập
            </Link>
          </div>

          <div className="grid gap-px bg-zinc-200 sm:grid-cols-2">
            {[
              ["Thiết kế tối giản", "Màu sắc trung tính, bố cục rõ ràng, dễ sử dụng."],
              ["Responsive tốt", "Hiển thị ổn định trên điện thoại, tablet và máy tính."],
              ["Giỏ hàng giả lập", "Thêm, tăng giảm và xóa sản phẩm bằng LocalStorage."],
              ["API sản phẩm", "Dữ liệu sản phẩm được trả về thông qua /api/products."]
            ].map(([title, description]) => (
              <div key={title} className="bg-white p-7">
                <h3 className="text-base font-black uppercase tracking-[0.08em] text-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
