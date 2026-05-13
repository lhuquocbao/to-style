import type { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "all", name: "Tất cả" },
  { id: "ao-thun", name: "Áo thun" },
  { id: "ao-so-mi", name: "Áo sơ mi" },
  { id: "quan-jeans", name: "Quần jeans" },
  { id: "ao-khoac", name: "Áo khoác" },
  { id: "phu-kien", name: "Phụ kiện" }
];

export const products: Product[] = [
  {
    id: "p001",
    name: "Áo thun basic đen",
    slug: "ao-thun-basic-den",
    category: "ao-thun",
    categoryLabel: "Áo thun",
    price: 249000,
    oldPrice: 329000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Áo thun cotton form regular, dễ phối đồ hằng ngày.",
    description:
      "Áo thun basic màu đen được thiết kế tối giản, chất cotton mềm, thoáng và phù hợp với nhiều phong cách từ đi học, đi làm đến đi chơi cuối tuần.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Đen", "Trắng", "Xám"],
    isBestSeller: true
  },
  {
    id: "p002",
    name: "Áo thun trắng oversized",
    slug: "ao-thun-trang-oversized",
    category: "ao-thun",
    categoryLabel: "Áo thun",
    price: 279000,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Form rộng trẻ trung, phù hợp phong cách streetwear.",
    description:
      "Áo thun oversized màu trắng với phom dáng rộng vừa phải, dễ phối cùng quần jeans, quần kaki hoặc short. Chất vải dày dặn, hạn chế bai dão.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: ["Trắng", "Đen"],
    isNew: true
  },
  {
    id: "p003",
    name: "Áo sơ mi Oxford xám",
    slug: "ao-so-mi-oxford-xam",
    category: "ao-so-mi",
    categoryLabel: "Áo sơ mi",
    price: 459000,
    oldPrice: 520000,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Sơ mi Oxford lịch sự, phù hợp đi học, đi làm.",
    description:
      "Áo sơ mi Oxford nam màu xám có bề mặt vải đứng form, cổ áo cứng cáp và đường may gọn. Sản phẩm phù hợp môi trường công sở, thuyết trình hoặc gặp gỡ khách hàng.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Xám", "Trắng", "Xanh nhạt"],
    isBestSeller: true
  },
  {
    id: "p004",
    name: "Áo sơ mi linen trắng",
    slug: "ao-so-mi-linen-trang",
    category: "ao-so-mi",
    categoryLabel: "Áo sơ mi",
    price: 499000,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Chất linen thoáng mát, hợp thời tiết nóng.",
    description:
      "Áo sơ mi linen trắng mang lại cảm giác nhẹ và thoáng, phù hợp đi biển, dạo phố hoặc phối layer tối giản. Thiết kế thanh lịch nhưng vẫn thoải mái.",
    sizes: ["M", "L", "XL"],
    colors: ["Trắng", "Be"],
    isNew: true
  },
  {
    id: "p005",
    name: "Quần jeans slim fit xanh đậm",
    slug: "quan-jeans-slim-fit-xanh-dam",
    category: "quan-jeans",
    categoryLabel: "Quần jeans",
    price: 599000,
    oldPrice: 690000,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Jeans slim fit co giãn nhẹ, tôn dáng nam tính.",
    description:
      "Quần jeans slim fit xanh đậm có độ ôm vừa phải, chất denim co giãn nhẹ giúp di chuyển dễ dàng. Màu xanh đậm dễ phối với áo thun, sơ mi hoặc áo khoác.",
    sizes: ["29", "30", "31", "32", "34"],
    colors: ["Xanh đậm"],
    isBestSeller: true
  },
  {
    id: "p006",
    name: "Quần jeans straight đen",
    slug: "quan-jeans-straight-den",
    category: "quan-jeans",
    categoryLabel: "Quần jeans",
    price: 629000,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Dáng straight basic, dễ mặc và không lỗi thời.",
    description:
      "Quần jeans straight màu đen có thiết kế thẳng ống, tạo cảm giác gọn gàng và mạnh mẽ. Đây là item cơ bản nên có trong tủ đồ nam.",
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: ["Đen"],
    isNew: true
  },
  {
    id: "p007",
    name: "Áo khoác bomber đen",
    slug: "ao-khoac-bomber-den",
    category: "ao-khoac",
    categoryLabel: "Áo khoác",
    price: 799000,
    oldPrice: 920000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Bomber tối giản, cá tính, hợp nhiều outfit.",
    description:
      "Áo khoác bomber đen có thiết kế gọn, bo cổ tay và lai áo chắc chắn. Phù hợp phối cùng áo thun, jeans và sneaker cho phong cách nam tính hiện đại.",
    sizes: ["M", "L", "XL"],
    colors: ["Đen", "Xanh rêu"],
    isBestSeller: true
  },
  {
    id: "p008",
    name: "Áo khoác denim xanh",
    slug: "ao-khoac-denim-xanh",
    category: "ao-khoac",
    categoryLabel: "Áo khoác",
    price: 859000,
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Denim jacket cổ điển, phù hợp phối layer.",
    description:
      "Áo khoác denim xanh mang phong cách cổ điển, chất vải dày vừa phải và đường may chắc chắn. Dễ phối cùng áo trắng, quần đen hoặc jeans đồng màu.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Xanh denim"],
    isNew: true
  },
  {
    id: "p009",
    name: "Thắt lưng da đen",
    slug: "that-lung-da-den",
    category: "phu-kien",
    categoryLabel: "Phụ kiện",
    price: 349000,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Phụ kiện cơ bản giúp outfit gọn gàng hơn.",
    description:
      "Thắt lưng da màu đen với mặt khóa kim loại tối giản, phù hợp quần jeans, kaki hoặc quần tây. Thiết kế dễ dùng trong nhiều hoàn cảnh.",
    sizes: ["Free size"],
    colors: ["Đen", "Nâu"]
  },
  {
    id: "p010",
    name: "Mũ lưỡi trai minimal",
    slug: "mu-luoi-trai-minimal",
    category: "phu-kien",
    categoryLabel: "Phụ kiện",
    price: 199000,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Mũ basic dễ phối với phong cách casual.",
    description:
      "Mũ lưỡi trai minimal có kiểu dáng đơn giản, màu trung tính và phần khóa điều chỉnh phía sau. Phù hợp đi học, đi chơi hoặc du lịch.",
    sizes: ["Free size"],
    colors: ["Đen", "Xám", "Be"],
    isNew: true
  }
];
