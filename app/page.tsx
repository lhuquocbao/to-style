import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isBestSeller || product.isNew).slice(0, 6);
  const homeCategories = categories.filter((category) => category.id !== "all");

  return (
    <>
      <HeroSection />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Danh mục"
            title="Mua sắm theo phong cách"
            description="Các nhóm sản phẩm được tách rõ ràng để người dùng dễ tìm đúng món đồ cần mua."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {homeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center transition hover:-translate-y-1 hover:border-black hover:bg-white hover:shadow-lg"
              >
                <p className="text-lg font-black text-black">{category.name}</p>
                <p className="mt-2 text-sm text-zinc-500">Xem ngay</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Sản phẩm nổi bật"
            title="Outfit nam bán chạy"
            description="Danh sách sản phẩm mẫu lấy trực tiếp từ file lib/data.ts, không cần backend."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Thiết kế tối giản", "Tập trung vào màu trung tính, bố cục rõ ràng và trải nghiệm dễ dùng."],
            ["Responsive tốt", "Layout dùng grid/flex, tự co giãn tốt trên điện thoại, tablet và máy tính."],
            ["Giỏ hàng giả lập", "Thêm, tăng giảm số lượng, xóa sản phẩm và lưu giỏ hàng bằng localStorage."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-black text-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
