---
title: "Xây dựng Portfolio hiện đại với Astro và GitHub Pages"
description: "Ghi lại hành trình thiết kế, tối ưu kiến trúc và triển khai tự động CI/CD cho trang cá nhân."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags: ["Astro", "GitHub Pages", "Tailwind CSS", "TypeScript"]
category: "Web Development"
draft: false
cover: "/images/posts/astro-portfolio.webp"
---

Khi bắt đầu xây dựng một trang portfolio cá nhân, bài toán lớn nhất thường gặp phải là: Làm sao để vừa có giao diện hiện đại, phong cách futuristic tương tác mượt mà, nhưng lại không bị đánh đổi bởi tốc độ tải trang chậm chạp và dung lượng JavaScript khổng lồ?

Sau khi cân nhắc giữa Next.js, Nuxt và Gatsby, tôi quyết định chọn **Astro** kết hợp với **GitHub Pages**. Dưới đây là những lý do và trải nghiệm thực tế.

## 1. Tại sao chọn Astro?

Astro sở hữu mô hình **Islands Architecture** (Kiến trúc Đảo). Khác với các Single Page Applications truyền thống (gửi toàn bộ bundle JavaScript về client), Astro render HTML thuần tĩnh ngay tại thời điểm build:

```html
<!-- Astro chỉ gửi HTML + CSS tĩnh mặc định -->
<div class="glass-card">
  <h2>Tốc độ tải cực nhanh</h2>
  <p>Zero JavaScript mặc định cho các thành phần nội dung!</p>
</div>
```

Khi bạn cần một thành phần tương tác (như Theme Toggle, Search bar hoặc Canvas visualizer), bạn chỉ cần hydrate đúng thành phần đó bằng client directives:

```astro
<!-- Chỉ tải JS khi component này xuất hiện trên màn hình -->
<InteractiveCanvas client:visible />
```

## 2. Quản lý nội dung bằng Astro Content Collections

Việc quản lý bài viết và dự án bằng Content Collections đem lại sự an toàn tuyệt đối về kiểu dữ liệu (type safety) nhờ thư viện `zod`:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
  }),
};
```

Nhờ đó, nếu một file Markdown thiếu trường bắt buộc hoặc sai định dạng ngày tháng, quá trình build sẽ báo lỗi ngay lập tức, ngăn ngừa các lỗi runtime ngớ ngẩn trên production.

## 3. Triển khai tự động lên GitHub Pages với GitHub Actions

Vì repository của tôi là `mphat291.github.io` (User site), Astro được cấu hình đơn giản:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://mphat291.github.io',
  base: '/',
  // ...
});
```

Workflow của GitHub Actions tự động kiểm tra code, chạy `npm run build`, và đẩy bản build tĩnh lên GitHub Pages trong chưa đầy 45 giây.

## Kết luận

Astro không chỉ giúp trang web đạt điểm số **Lighthouse 100/100**, mà còn đem lại trải nghiệm viết code (DX) vô cùng trực quan và dễ chịu cho lập trình viên.
