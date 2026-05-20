"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    eyebrow: "Lookbook for men",
    title: "Quiet Luxury",
    subtitle: "Tông màu trung tính, chất liệu nhẹ và phong thái lịch lãm.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2200&auto=format&fit=crop",
    alt: "Người mẫu nam lịch lãm mặc blazer xám"
  },
  {
    eyebrow: "Business Tailoring",
    title: "Sharp Presence",
    subtitle: "Suit, sơ mi và phụ kiện tinh gọn cho diện mạo chỉn chu.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2200&auto=format&fit=crop",
    alt: "Người mẫu nam lịch lãm mặc suit tối màu"
  },
  {
    eyebrow: "Modern Gentleman",
    title: "Clean Form",
    subtitle: "Phom dáng gọn, màu sắc nhã nhặn và tinh thần công sở hiện đại.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2200&auto=format&fit=crop",
    alt: "Người mẫu nam công sở mặc vest xanh navy"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="bg-white">
      <div className="border-y border-zinc-100 bg-white py-3 text-center text-[13px] font-bold uppercase tracking-[0.22em] text-zinc-900">
        Cảnh báo lừa đảo
      </div>

      <div className="relative h-[560px] overflow-hidden bg-zinc-100 sm:h-[640px] lg:h-[720px]">
        {slides.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/24 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
          <div className="max-w-xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-white/85">
              {slide.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-6xl italic leading-[0.92] sm:text-7xl lg:text-8xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/90 sm:text-lg">
              {slide.subtitle}
            </p>
            <Link
              href="/products"
              className="mt-9 inline-flex border border-white bg-white px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-transparent hover:text-white"
            >
              Mua ngay
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Banner trước"
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-3xl font-light text-zinc-700 transition hover:bg-white sm:left-8"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Banner tiếp theo"
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-3xl font-light text-zinc-700 transition hover:bg-white sm:right-8"
        >
          ›
        </button>

        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 sm:px-8">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Chuyển đến banner ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/55 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
