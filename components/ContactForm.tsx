"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Cảm ơn bạn! Form liên hệ giả lập đã được gửi thành công.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-zinc-800">
            Họ tên
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-zinc-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-zinc-800">
          Chủ đề
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
          placeholder="Tư vấn sản phẩm"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-zinc-800">
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-black"
          placeholder="Nhập nội dung cần liên hệ..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
      >
        Gửi liên hệ
      </button>

      {status && <p className="mt-4 rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700">{status}</p>}
    </form>
  );
}
