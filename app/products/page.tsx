import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories, products } from "@/lib/data";

export default async function ProductsPage({
  searchParams
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params?.category ?? "all";
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Shop"
          title="Tất cả sản phẩm nam"
          description="Lọc sản phẩm theo danh mục và bấm vào card để xem chi tiết bằng dynamic route /products/[id]."
        />

        <div className="mt-10">
          <CategoryFilter categories={categories} selectedCategory={selectedCategory} />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-y border-zinc-200 py-4 text-sm text-zinc-600">
          <p>
            Hiển thị <span className="font-bold text-black">{filteredProducts.length}</span> sản phẩm
          </p>
          <p className="hidden sm:block">Dữ liệu mẫu: lib/data.ts</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center">
            <h2 className="text-xl font-black text-black">Không có sản phẩm</h2>
            <p className="mt-2 text-zinc-600">Danh mục này hiện chưa có sản phẩm mẫu.</p>
          </div>
        )}
      </div>
    </section>
  );
}
