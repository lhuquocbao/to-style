# TO STYLE SHOP - Website Bán Quần Áo Nam

## 1. Thông tin đề tài

**Tên đề tài:** Website bán quần áo nam - To Style Shop  
**Học phần:** Lập trình Front-End  
**Mã học phần:** 111100  
**Sinh viên:** Trần Nguyễn Quốc Bảo  
**MSSV:** 124001585  
**Lớp:** [24CT112] 
**Giảng viên:** 

---

## 2. Mô tả website

To Style Shop là website bán quần áo nam được xây dựng bằng **Next.js**, **TypeScript** và **Tailwind CSS**.

Website có giao diện hiện đại, tối giản, responsive và có các chức năng cơ bản của một website bán hàng như hiển thị sản phẩm, lọc sản phẩm, xem chi tiết sản phẩm, giỏ hàng giả lập và form liên hệ.

---

## 3. Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| Next.js App Router | Xây dựng website và routing |
| TypeScript | Kiểm soát kiểu dữ liệu, giúp code rõ ràng |
| Tailwind CSS | Thiết kế giao diện responsive |
| Next.js API Route | Tạo API giả lập `/api/products` |
| LocalStorage | Lưu giỏ hàng giả lập trên trình duyệt |
| GitHub | Lưu trữ và quản lý source code |
| Vercel | Deploy website lên Internet |

> Project sử dụng **Tailwind CSS** thay cho Bootstrap/Ant Design.

---

## 4. Chức năng chính

- Hiển thị danh sách sản phẩm quần áo nam.
- Lọc sản phẩm theo danh mục.
- Xem chi tiết sản phẩm.
- Thêm sản phẩm vào giỏ hàng giả lập.
- Tăng, giảm và xóa sản phẩm trong giỏ hàng.
- Form liên hệ giả lập.
- API `/api/products` trả dữ liệu sản phẩm dạng JSON.
- Giao diện responsive trên điện thoại, tablet và máy tính.

---

## 5. Các trang chính

| Đường dẫn | Chức năng |
|---|---|
| `/` | Trang chủ |
| `/products` | Trang sản phẩm |
| `/products/[id]` | Trang chi tiết sản phẩm |
| `/about` | Trang giới thiệu |
| `/contact` | Trang liên hệ |
| `/cart` | Giỏ hàng |
| `/api/products` | API sản phẩm |

---

## 6. Routing và API

Project sử dụng **Next.js App Router**.

Dynamic route của trang chi tiết sản phẩm:

```txt
/products/[id]
```

Ví dụ:

```txt
/products/p001
/products/p002
/products/p003
```

API giả lập:

```txt
/api/products
```

API này lấy dữ liệu từ file `lib/data.ts` và trả về danh sách sản phẩm dạng JSON.

---

## 7. Cấu trúc thư mục chính

```txt
to-style-shop/
├── app/
│   ├── api/products/route.ts
│   ├── about/page.tsx
│   ├── cart/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── products/[id]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── CategoryFilter.tsx
│   ├── ContactForm.tsx
│   ├── CartUI.tsx
│   ├── CartProvider.tsx
│   └── AddToCartButton.tsx
│
├── lib/
│   ├── data.ts
│   ├── types.ts
│   └── utils.ts
│
├── package.json
└── README.md
```

---

## 8. Hướng dẫn chạy project trên localhost

Clone source code:

```bash
git clone https://github.com/lhuquocbao/to-style.git
```

Di chuyển vào thư mục project:

```bash
cd to-style
```

Cài đặt thư viện:

```bash
npm install
```

Chạy project:

```bash
npm run dev
```

Mở trình duyệt:

```txt
http://localhost:3000
```

---

## 9. Hướng dẫn build project

Kiểm tra và build project:

```bash
npm run build
```

Chạy bản đã build:

```bash
npm run start
```

---

## 10. Link GitHub

```txt
https://github.com/lhuquocbao/to-style
```



## 11. Link deploy Vercel

```txt
[https://to-style.vercel.app/cart]
```



## 12. Link video demo cá nhân

```txt
https://drive.google.com/drive/folders/1ofk0rNobBZudrAwbsa91N4RoGdMHDpZN
```


## 13. Kết quả đã thực hiện

Project đã hoàn thành:

- Giao diện website bán quần áo nam.
- Routing cơ bản bằng Next.js App Router.
- Dynamic route `/products/[id]`.
- API giả lập `/api/products`.
- Dữ liệu sản phẩm trong file `lib/data.ts`.
- Lọc sản phẩm theo danh mục.
- Giỏ hàng giả lập bằng LocalStorage.
- Form liên hệ giả lập.
- Responsive trên nhiều thiết bị.

---

## 14. Hạn chế và hướng phát triển

Hạn chế hiện tại:

- Chưa có backend thật.
- Chưa có database thật.
- Chưa có đăng nhập, đăng ký.
- Chưa có thanh toán online.
- Form liên hệ chỉ là giả lập.

Hướng phát triển:

- Kết nối database bằng Supabase hoặc MySQL.
- Thêm chức năng đăng nhập, đăng ký.
- Thêm chức năng đặt hàng.
- Thêm trang quản trị sản phẩm.
- Cải thiện giao diện và trải nghiệm người dùng.

---

## 15. Kết luận

Project To Style Shop đáp ứng các yêu cầu cơ bản của bài giữa kỳ học phần Lập trình Front-End. Website có routing, dynamic route, API giả lập, dữ liệu mẫu, giỏ hàng giả lập và giao diện responsive.
