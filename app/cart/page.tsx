import CartUI from "@/components/CartUI";
import SectionTitle from "@/components/SectionTitle";

export default function CartPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Giỏ hàng"
          title="Giỏ hàng giả lập"
          description="Giỏ hàng được lưu trên trình duyệt bằng localStorage, chưa kết nối thanh toán hoặc backend thật."
        />
        <div className="mt-12">
          <CartUI />
        </div>
      </div>
    </section>
  );
}
