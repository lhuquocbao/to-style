import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Giới thiệu"
          title="MENSTYLE - Thời trang nam tối giản"
          description="Một project mẫu dùng Next.js App Router, TypeScript và Tailwind CSS để xây dựng website bán quần áo nam."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-black">Mục tiêu dự án</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              Dự án này mô phỏng một website thương mại điện tử đơn giản dành cho thời trang nam. Website tập trung vào giao diện hiện đại, component rõ ràng, dữ liệu mẫu dễ chỉnh sửa và trải nghiệm responsive tốt trên nhiều kích thước màn hình.
            </p>
            <p className="mt-4 leading-8 text-zinc-600">
              Vì không dùng backend thật, toàn bộ sản phẩm được lưu trong file <span className="font-semibold text-black">lib/data.ts</span>. Giỏ hàng được giả lập bằng React Context và localStorage trong trình duyệt.
            </p>
          </div>

          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-black">Điểm nổi bật</h2>
            <ul className="mt-5 space-y-4 text-zinc-300">
              <li>• App Router với cấu trúc thư mục rõ ràng.</li>
              <li>• Dynamic route cho trang chi tiết sản phẩm.</li>
              <li>• Component-based: Header, Footer, Product Card, Filter, Cart UI.</li>
              <li>• Tailwind CSS với phong cách trắng, đen, xám.</li>
              <li>• Responsive layout bằng grid và flex.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            ["10+", "Sản phẩm mẫu"],
            ["5", "Danh mục chính"],
            ["100%", "Frontend demo"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-black text-black">{value}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
