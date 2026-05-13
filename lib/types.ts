export type ProductCategory = "ao-thun" | "ao-so-mi" | "quan-jeans" | "ao-khoac" | "phu-kien";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  shortDescription: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
};

export type Category = {
  id: ProductCategory | "all";
  name: string;
};
