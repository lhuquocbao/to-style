import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Liên hệ"
          title="Gửi thông tin cho TOSTYLE"
          description="Form liên hệ giả lập, phù hợp cho project frontend chưa cần backend."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {[
              ["Email", "lhu.quocbao@gmail.com"],
              ["Hotline", "0975397177"],
              ["Địa chỉ", "TP. Biên Hòa, Đồng Nai, Việt Nam"],
              ["Thời gian", "08:00 - 21:00, Thứ 2 - Chủ nhật"]
            ].map(([title, value]) => (
              <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">{title}</p>
                <p className="mt-2 text-lg font-black text-black">{value}</p>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
