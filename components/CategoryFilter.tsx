"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Category } from "@/lib/types";

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: string;
};

export default function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(categoryId: string) {
    if (categoryId === "all") {
      router.push(pathname);
      return;
    }

    router.push(`${pathname}?category=${categoryId}`);
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => handleSelect(category.id)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-black bg-black text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-black"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
