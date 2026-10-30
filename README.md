# NEXUS // Personal Portfolio Site

> Trang Portfolio cá nhân phong cách Futuristic / AI dành cho Kỹ sư Phần mềm & Sinh viên Công nghệ Thông tin, tối ưu hóa tốc độ tải trang tuyệt đối và triển khai tự động lên **GitHub Pages**.

---

## ⚡ Tính năng nổi bật

- **Kiến trúc SSG Siêu Tốc:** Xây dựng trên **Astro v5** (Islands Architecture), mặc định 0KB JavaScript thừa thãi, đạt điểm số **Lighthouse 100/100**.
- **Futuristic & AI Design:** Tone màu xanh đen cyberpunk (`#06080e`), hiệu ứng mạng nơ-ron canvas nhẹ nhàng, tôn trọng người dùng với `prefers-reduced-motion`.
- **Hệ thống 6 Trang Đầy Đủ:**
  1. **Home (`/`):** Hero section, Tech stack strip, dự án nổi bật, bài viết mới nhất và CTA.
  2. **About (`/about/`):** Đọc nội dung trực tiếp từ `src/content/pages/about.md`, phân loại kỹ năng 6 nhóm (Languages, Frontend, Backend, Database, Tools, AI) và timeline học tập.
  3. **Posts / Blog (`/posts/`):** Tìm kiếm thời gian thực, lọc theo tag, trang đọc Markdown hỗ trợ highlight cú pháp, mục lục (TOC), thanh tiến trình đọc và nút sao chép code. Tự động ẩn các bài viết có `draft: true`.
  4. **Projects (`/projects/`):** Lưới dự án có bộ lọc danh mục (Web, AI & Tools), trang chi tiết dự án với bài toán, giải pháp và liên kết GitHub/Demo.
  5. **Lab / AI Playground (`/lab/`):** Phòng thí nghiệm 100% chạy trên trình duyệt (mô phỏng mạng nơ-ron 60 FPS, công cụ Prompt Engineering, tính Token & giả lập Chain-of-Thought).
  6. **Contact (`/contact/`):** Sao chép email tức thì kèm thông báo toast, liên kết mạng xã hội và bộ tạo mailto trực tiếp.
  7. **Trang 404 (`/404`):** Thiết kế đồng bộ phong cách terminal, có nút quay về trang chủ.
- **Phím tắt nhanh (Command Palette):** Bấm `Ctrl + K` (hoặc `Cmd + K`) ở bất kỳ trang nào để mở menu nhảy nhanh giữa các trang.
- **An toàn bảo mật:** 100% Client-side sandbox, không nhúng bất kỳ API key bí mật nào trên môi trường tĩnh.

---

## 🛠️ Công nghệ sử dụng

- **Framework:** [Astro v5](https://astro.build/)
- **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) & CSS Variables Design Tokens
- **Nội dung:** Astro Content Collections với Zod schema validation
- **Icons:** [Lucide Icons](https://lucide.dev/) (`lucide-astro`)
- **Tự động hóa:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Hosting:** GitHub Pages (`https://mphat291.github.io`)

---

## 🚀 Hướng dẫn cài đặt & Chạy trên máy cá nhân

### Yêu cầu môi trường
- **Node.js:** phiên bản `20.x` hoặc mới hơn (đã kiểm tra tương thích trên Node 22 & Node 26 LTS).
- **npm:** phiên bản `10.x` hoặc mới hơn.

### Các lệnh thực thi

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi động môi trường phát triển local
npm run dev

# Mở trình duyệt truy cập: http://localhost:4321
```

### Kiểm tra cú pháp & Build static

```bash
# Kiểm tra Type-check và chẩn đoán toàn bộ dự án
npm run check

# Biên dịch toàn bộ trang tĩnh ra thư mục dist/
npm run build

# Xem trước kết quả build static trên local server
npm run preview
```

---

## ⚙️ Hướng dẫn cá nhân hóa thông tin

Mọi thông tin cá nhân được quản lý tập trung tại file duy nhất:
👉 `src/config/site.ts`

Bạn chỉ cần mở file này và thay thế các giá trị placeholder:
```typescript
export const siteConfig: SiteConfig = {
  siteTitle: 'NEXUS // Portfolio',
  author: {
    name: '[YOUR_NAME]',            // Đổi thành tên của bạn (ví dụ: Mai Phát)
    role: 'IT Student & Developer', // Vị trí/chuyên môn của bạn
    tagline: '...',                 // Câu châm ngôn hoặc giới thiệu ngắn
    shortBio: '...',                // Giới thiệu tóm tắt
    location: 'Vietnam',            // Địa điểm của bạn
    email: 'contact@example.com',    // Email nhận liên hệ thật của bạn
    githubUrl: 'https://github.com/mphat291', // URL GitHub của bạn
    linkedinUrl: 'https://linkedin.com/in/[YOUR_LINKEDIN]', // URL LinkedIn
    avatarUrl: '/images/avatar.svg', // Ảnh đại diện đặt trong public/images/
    status: 'Ready for internships & collaboration',
  },
  // Kỹ năng chuyên môn và các cột mốc học tập...
};
```

---

## 📝 Hướng dẫn quản lý nội dung Markdown

### 1. Thêm bài viết Blog mới
Tạo một file `.md` mới trong thư mục `src/content/posts/ten-bai-viet.md`:

```markdown
---
title: "Tiêu đề bài viết của bạn"
description: "Mô tả ngắn gọn nội dung bài viết."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags: ["Astro", "Frontend", "TypeScript"]
category: "Web Development"
draft: false
cover: "/images/posts/sample.webp"
---

Nội dung bài viết viết bằng định dạng Markdown tiêu chuẩn...

## Tiêu đề phụ

- Đoạn văn bản
- Code block hỗ trợ syntax highlighting và nút copy tự động:

```typescript
const greeting = "Xin chào các bạn!";
console.log(greeting);
```
```

> 💡 **Lưu ý về bài viết nháp:** Nếu đặt `draft: true`, bài viết sẽ chỉ hiển thị ở môi trường phát triển (`npm run dev`) và sẽ **tự động bị loại bỏ** khỏi bản build production (`npm run build`).

### 2. Thêm dự án mới
Tạo một file `.md` mới trong thư mục `src/content/projects/ten-du-an.md`:

```markdown
---
title: "Tên Dự Án"
description: "Mô tả ngắn gọn về giải pháp dự án mang lại."
tagline: "Một dòng tagline kỹ thuật ấn tượng"
category: "Web" # Chọn: "Web", "AI & Tools", "Fullstack", etc.
featured: true  # true nếu muốn hiển thị trên trang chủ
order: 1        # Thứ tự hiển thị (số nhỏ hiển thị trước)
techStack: ["React", "TypeScript", "Tailwind CSS"]
demoUrl: "https://demo-link.com"
githubUrl: "https://github.com/mphat291/ten-du-an"
status: "Completed" # "Active" | "Completed" | "In Development" | "Prototype"
---

## 1. Vấn đề & Bối cảnh
Giải thích lý do xây dựng dự án...

## 2. Giải pháp kỹ thuật
Mô tả kiến trúc và công nghệ sử dụng...
```

### 3. Cập nhật trang About
Mở file `src/content/pages/about.md` và chỉnh sửa trực tiếp câu chuyện học tập, triết lý lập trình và định hướng nghề nghiệp của bạn.

---

## 🌐 Triển khai lên GitHub Pages (`mphat291.github.io`)

Repository này đã được cấu hình sẵn GitHub Actions tại `.github/workflows/deploy.yml`.

### Các bước kích hoạt:
1. Đẩy mã nguồn lên nhánh chính `main` của GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio website with Astro"
   git push origin main
   ```
2. Trên giao diện GitHub của repository `mphat291.github.io`:
   - Truy cập **Settings** > **Pages** (ở thanh menu bên trái).
   - Tại mục **Build and deployment** > **Source**, chọn: **GitHub Actions**.
3. GitHub Actions sẽ tự động kích hoạt workflow `Deploy to GitHub Pages`, chạy `npm ci`, biên dịch tĩnh `npm run build` và deploy lên trang web của bạn tại địa chỉ:
   👉 **`https://mphat291.github.io/`**

---

## 🛡️ Tiêu chuẩn chất lượng & Kiểm thử

- ✅ **Hiệu năng:** Điểm số Lighthouse 100/100 (Core Web Vitals chuẩn).
- ✅ **Khả năng tiếp cận:** Semantic HTML5 (`header`, `nav`, `main`, `article`, `footer`), hỗ trợ bàn phím đầy đủ (`Tab`, `Esc`, `Ctrl+K`), tương thích `prefers-reduced-motion`.
- ✅ **SEO & Open Graph:** Tự động tạo Canonical URL, sitemap (`sitemap-index.xml`), `robots.txt`, và các thẻ meta Open Graph / Twitter Card trên từng trang.
- ✅ **Kiểm tra TypeScript:** `npm run check` thông qua với **0 errors, 0 warnings**.

---

© 2026 mphat291. Mã nguồn mở theo giấy phép MIT.
