# Kế hoạch xây dựng Portfolio cá nhân trên GitHub Pages

> **Mục tiêu:** Xây dựng portfolio cá nhân hiện đại dành cho sinh viên Công nghệ thông tin, có phong cách futuristic/AI, hiệu ứng tương tác nổi bật nhưng vẫn nhanh, dễ bảo trì, responsive và triển khai miễn phí trên GitHub Pages.
>
> **Lưu ý cho coding agent:** Hãy đọc toàn bộ tài liệu này trước khi viết code. Nếu repository hiện có code, hãy kiểm tra cấu trúc và giữ lại những phần hữu ích thay vì ghi đè mù quáng.

---

## 1. Định hướng sản phẩm

### Tên dự án tạm thời
**NEXUS // Personal Portfolio** — tên có thể thay đổi trong cấu hình.

### Tinh thần thiết kế
- **Visual:** futuristic, creative developer, AI-inspired, digital laboratory.
- **Màu sắc:** nền tối xanh đen; màu nhấn cyan, violet hoặc electric blue; bảo đảm độ tương phản và khả năng đọc.
- **Chuyển động:** tinh tế, có chủ đích; tránh làm mọi thành phần cùng chuyển động.
- **Cảm giác:** giống một giao diện làm việc của kỹ sư phần mềm trong tương lai, nhưng vẫn là portfolio chuyên nghiệp.
- **Nội dung:** dễ thay đổi bằng Markdown hoặc một file dữ liệu cấu hình, không phải sửa component ở nhiều nơi.

Không sử dụng hiệu ứng chỉ để trang trí nếu nó làm giảm tốc độ, khả năng đọc hoặc khả năng truy cập.

---

## 2. Sitemap — 6 trang chính

### 2.1 Home (`/`)
**Mục đích:** Tạo ấn tượng ban đầu và dẫn người xem đến các nội dung quan trọng.

Thành phần:
- Hero section với tên, vai trò, câu giới thiệu ngắn và CTA.
- Nền chuyển động nhẹ: gradient, grid, hạt sáng hoặc đường nối dạng mạng neuron.
- Chữ tiêu đề có hiệu ứng reveal/typing nhưng phải có nội dung tĩnh dự phòng.
- Thẻ giới thiệu ngắn về kỹ năng và định hướng.
- Một số dự án nổi bật.
- Bài viết mới nhất lấy tự động từ Markdown.
- Dải công nghệ (tech stack).
- CTA dẫn đến trang Projects hoặc Contact.

Tương tác:
- Con trỏ có hiệu ứng nhẹ trên desktop (không thay đổi con trỏ hệ thống theo cách gây khó dùng).
- Hover có chiều sâu cho project cards.
- Nút chuyển trang có micro-interaction.
- Có thể có command palette mở bằng `Ctrl/Cmd + K` để chuyển nhanh giữa các trang.

### 2.2 About (`/about/`)
**Mục đích:** Kể câu chuyện học tập, định hướng và cách tiếp cận công nghệ.

Thành phần:
- Giới thiệu bản thân.
- Hành trình học tập và các cột mốc.
- Giá trị làm việc, sở thích công nghệ và định hướng tương lai.
- Kỹ năng được nhóm theo danh mục: Languages, Frontend, Backend, Database, Tools, AI.
- Timeline học tập/dự án.
- Link GitHub, email và các hồ sơ công khai.

**Yêu cầu:** Nội dung About nên được viết trong `src/content/pages/about.md` để có thể sửa bằng Markdown.

### 2.3 Posts / Blog (`/posts/`)
**Mục đích:** Chia sẻ kiến thức, ghi chú học tập, quá trình xây dựng dự án và thử nghiệm AI.

Thành phần:
- Danh sách bài viết dạng card.
- Tìm kiếm theo tiêu đề/nội dung.
- Lọc theo tag và danh mục.
- Sắp xếp mới nhất trước.
- Hiển thị tiêu đề, mô tả, ngày đăng, thời gian đọc và tag.
- Trang chi tiết cho từng bài viết.
- Hỗ trợ Markdown: heading, list, quote, table, code block, ảnh và liên kết.
- Code block có nút copy.
- Mục lục tự sinh từ heading cho bài dài.

**Cấu trúc URL:** `/posts/slug-bai-viet/`

**Frontmatter mẫu:**
```yaml
---
title: "Xây dựng portfolio với Astro"
description: "Ghi lại quá trình thiết kế và triển khai portfolio."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags: ["Astro", "GitHub Pages", "Frontend"]
category: "Web Development"
draft: false
cover: "/images/posts/portfolio-cover.webp"
---
```

Đặt bài viết tại `src/content/posts/slug-bai-viet.md`. Bài có `draft: true` không được xuất hiện trong production build.

### 2.4 Projects (`/projects/`) — trang bổ sung số 1
**Mục đích:** Trưng bày sản phẩm thực tế và chứng minh năng lực kỹ thuật.

Thành phần:
- Lưới dự án có lọc theo công nghệ hoặc loại dự án.
- Mỗi project card có ảnh/thumbnail, mô tả ngắn, tech stack và trạng thái.
- Trang chi tiết cho từng dự án (nếu cần), có vấn đề, giải pháp, vai trò, công nghệ, ảnh chụp và kết quả.
- Liên kết GitHub, demo trực tiếp và bài viết liên quan.
- Dữ liệu dự án nằm trong Markdown hoặc content collection để dễ cập nhật.

Dữ liệu dự án tuyệt đối không được bịa. Dùng placeholder dễ nhận biết khi chưa có thông tin thật.

### 2.5 Lab / AI Playground (`/lab/`) — trang bổ sung số 2
**Mục đích:** Tạo điểm nhấn sáng tạo về AI, giao diện thử nghiệm và các demo tương tác.

Ý tưởng:
- Demo UI nhỏ chạy hoàn toàn ở trình duyệt: prompt playground mẫu, mini chatbot giả lập có ghi rõ là demo, công cụ định dạng JSON, hoặc visualizer thuật toán.
- Mô phỏng mạng neuron/particles/3D nhẹ.
- Mỗi experiment có mô tả, công nghệ và mã nguồn nếu công khai.
- Phân biệt rõ **demo cục bộ** với tính năng AI thật cần API.

**Bảo mật quan trọng:** GitHub Pages là hosting tĩnh. Không đặt API key bí mật trong JavaScript phía client, biến môi trường frontend hoặc repository. Nếu sau này cần gọi AI thật, phải dùng backend/serverless proxy có quản lý bí mật; phần đó không nằm trong GitHub Pages thuần. Ban đầu ưu tiên demo không cần API và không thu thập dữ liệu người dùng.

### 2.6 Contact (`/contact/`) — trang bổ sung số 3
**Mục đích:** Giúp người xem dễ liên hệ hoặc tìm hồ sơ công khai.

Thành phần:
- Email dạng liên kết `mailto:`.
- GitHub, LinkedIn hoặc nền tảng khác nếu chủ sở hữu cung cấp.
- Nút copy email.
- Form chỉ hiển thị khi có dịch vụ xử lý form được cấu hình; nếu chưa có backend, dùng email/link liên hệ thay vì tạo form giả.
- Thông báo trạng thái cho thao tác copy.

Không tự bịa email, tên tài khoản hoặc đường dẫn mạng xã hội. Để placeholder trong file cấu hình và ghi rõ cần thay thế.

---

## 3. Công nghệ đề xuất

### Stack mặc định
- **Astro + TypeScript:** tạo website tĩnh, phù hợp nội dung Markdown và GitHub Pages.
- **Tailwind CSS:** thiết kế responsive và quản lý design tokens.
- **Astro Content Collections:** quản lý bài viết/dự án có schema rõ ràng.
- **GSAP** hoặc **Motion One**: dùng có chọn lọc cho animation.
- **Lucide icons:** icon đồng nhất.
- **Three.js** chỉ khi có hiệu ứng 3D thật sự cần thiết; phải có phương án dự phòng nhẹ hơn.
- **Pagefind** hoặc giải pháp tìm kiếm tĩnh tương đương nếu cần tìm kiếm toàn site.

### Nguyên tắc lựa chọn thư viện
1. Không cài nhiều thư viện animation có chức năng trùng lặp.
2. Ưu tiên CSS cho hover, transition và gradient đơn giản.
3. Chỉ tải Three.js ở những trang thực sự cần nó.
4. Dùng dynamic import/lazy loading cho hiệu ứng nặng.
5. Không cần cơ sở dữ liệu cho portfolio tĩnh.
6. Không dùng framework/backend chỉ để tạo hiệu ứng không cần thiết.

Nếu repository đã dùng một stack phù hợp, hãy đánh giá trước khi chuyển đổi. Không tự ý thay stack khi chưa có lý do kỹ thuật rõ ràng.

---

## 4. Thiết kế và hệ thống giao diện

### Layout
- Header có logo dạng wordmark, menu điều hướng và nút theme nếu hỗ trợ light/dark.
- Mobile navigation dạng menu dễ thao tác bằng bàn phím.
- Main content có giới hạn chiều rộng để dễ đọc.
- Footer có năm hiện tại, liên kết hồ sơ và trạng thái website tùy chọn.
- Active navigation thể hiện trang hiện tại.
- Trang 404 có đường quay về Home.

### Design tokens
Tạo biến CSS hoặc cấu hình theme tập trung cho:
- Màu nền, bề mặt, chữ, màu nhấn và viền.
- Font heading/body/monospace.
- Khoảng cách, border radius, shadow.
- Thời gian và easing animation.

Không rải mã màu hoặc thời gian animation tùy tiện trong nhiều file.

### Kiểu chữ
- Dùng font dễ đọc; có fallback hệ thống.
- Font monospace dùng cho nhãn kỹ thuật, code và metadata.
- Không dùng font quá nhỏ cho nội dung chính.

---

## 5. Danh sách hiệu ứng nên triển khai

Ưu tiên theo thứ tự, không nhất thiết phải làm tất cả ngay từ đầu.

### P0 — Nên có
- Chuyển động reveal nhẹ khi nội dung xuất hiện.
- Hover state cho liên kết, nút và project card.
- Gradient hoặc grid nền tĩnh/động rất nhẹ.
- Smooth scrolling khi người dùng không bật reduced motion.
- Menu mobile và active navigation.
- Code copy button cho bài viết.

### P1 — Điểm nhấn
- Particle/network background có giới hạn số lượng hạt.
- Command palette `Ctrl/Cmd + K`.
- Thanh tiến trình đọc bài viết.
- Chuyển động chuyển trang hoặc đổi trạng thái.
- Timeline tương tác trong About.

### P2 — Tùy chọn
- Mô hình 3D hoặc shader trên Home/Lab.
- Cursor-follow glow trên desktop.
- Sound effects: **tắt mặc định**, chỉ bổ sung nếu thật sự cần và phải có quyền bật rõ ràng.

### Quy tắc chuyển động
- Tôn trọng `prefers-reduced-motion`.
- Không bắt buộc người dùng phải chờ animation mới đọc được nội dung.
- Không tạo hiệu ứng nhấp nháy nhanh.
- Tắt hoặc giảm hiệu ứng nặng trên thiết bị yếu và mobile.
- Tránh con trỏ tùy chỉnh làm mất khả năng nhận biết tương tác.
- Nếu JavaScript lỗi, nội dung cốt lõi vẫn phải hiển thị.

---

## 6. Cấu trúc thư mục mong muốn

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── CommandPalette.astro
│   │   └── Effects/
│   ├── content/
│   │   ├── posts/
│   │   │   └── welcome.md
│   │   ├── projects/
│   │   │   └── example-project.md
│   │   └── pages/
│   │       └── about.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── lab.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── config/
│       └── site.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── PLAN.md
```

Agent có thể điều chỉnh cấu trúc theo phiên bản Astro hiện tại, nhưng phải giữ nguyên các chức năng và mục tiêu.

---

## 7. Cấu hình cá nhân hóa

Tạo một file duy nhất, ví dụ `src/config/site.ts`, để người dùng chỉnh:
- Tên hiển thị.
- Chức danh/role.
- Câu giới thiệu.
- Avatar.
- Email.
- GitHub và các liên kết mạng xã hội.
- URL website.
- Danh sách công nghệ.
- Cấu hình theme/animation nếu cần.

Dùng placeholder như `YOUR_NAME`, `YOUR_EMAIL` và `YOUR_GITHUB_URL` cho thông tin chưa được cung cấp. Không tự suy đoán dữ liệu cá nhân.

---

## 8. Yêu cầu GitHub Pages

- Website phải được build thành static files.
- Dùng GitHub Actions để build và deploy khi push lên nhánh chính.
- Cấu hình đúng `site` và `base` trong Astro.
- Nếu triển khai dưới dạng project site, `base` phải khớp tên repository; nếu là user/organization site thì xử lý khác. Agent cần xác định trường hợp từ repository trước khi cấu hình.
- Tất cả internal links và asset paths phải hoạt động cả khi có `base path`.
- Không dùng server-side runtime, server API route hoặc chức năng cần server thường trực.
- Không commit secrets, token hoặc API keys.
- Có README hướng dẫn cài đặt, chạy local, build và deploy.
- Kiểm tra 404 và các URL bài viết sau khi deploy.

---

## 9. Responsive, accessibility và hiệu năng

### Responsive
- Thiết kế mobile-first.
- Kiểm tra ít nhất ở các breakpoint mobile, tablet và desktop.
- Không để hiệu ứng canvas/3D làm tràn layout hoặc chặn thao tác.
- Menu, nút và thẻ phải dùng tốt trên màn hình cảm ứng.

### Accessibility
- HTML semantic: `header`, `nav`, `main`, `article`, `footer`.
- Có focus state rõ ràng.
- Có thể điều hướng bằng bàn phím.
- Ảnh có alt text phù hợp.
- Màu chữ đủ tương phản.
- Animation tôn trọng `prefers-reduced-motion`.
- Nút chỉ có icon phải có accessible label.
- Không truyền đạt trạng thái chỉ bằng màu sắc.

### Hiệu năng
- Tối ưu ảnh (ưu tiên WebP/AVIF khi phù hợp).
- Lazy-load ảnh dưới màn hình đầu tiên.
- Tránh layout shift.
- Giảm JavaScript ở trang không cần tương tác phức tạp.
- Không để animation chạy vô hạn với tài nguyên lớn.
- Mục tiêu tham khảo: Lighthouse Performance/Accessibility/Best Practices/SEO từ 90 trở lên trên một build production phù hợp; không hy sinh nội dung hoặc khả năng truy cập chỉ để đạt điểm.

---

## 10. SEO và chia sẻ

- Mỗi trang có title và description riêng.
- Open Graph metadata cho preview khi chia sẻ.
- Favicon.
- Canonical URL nếu cấu hình được URL chính xác.
- Sitemap và robots.txt phù hợp website tĩnh.
- Heading phân cấp đúng.
- URL ngắn, có ý nghĩa.
- Bài viết có ngày đăng, tag và metadata.
- Không tạo metadata chứa placeholder trong bản production nếu chưa cấu hình.

---

## 11. Kế hoạch thực hiện theo giai đoạn

### Giai đoạn 1 — Khởi tạo
- Kiểm tra repository và xác định loại GitHub Pages.
- Khởi tạo hoặc điều chỉnh Astro + TypeScript.
- Thiết lập Tailwind, content collections và cấu hình deploy.
- Tạo design tokens và BaseLayout.
- Xác minh build thành công.

**Tiêu chí hoàn thành:** `npm run build` thành công và GitHub Actions có thể deploy.

### Giai đoạn 2 — Nội dung và điều hướng
- Xây dựng Header, Footer, navigation và 404.
- Tạo Home, About, Posts, Projects, Lab và Contact.
- Tạo schema cho posts/projects.
- Thêm nội dung mẫu có ghi rõ placeholder.

**Tiêu chí hoàn thành:** mọi trang mở được, link không hỏng, nội dung tĩnh hiển thị đầy đủ.

### Giai đoạn 3 — Visual identity và effects
- Hoàn thiện nền, typography, card, button và responsive layout.
- Thêm hiệu ứng P0.
- Thêm command palette, particle hoặc timeline nếu hiệu năng cho phép.
- Tích hợp `prefers-reduced-motion`.

**Tiêu chí hoàn thành:** giao diện nhất quán, không che nội dung, thao tác tốt bằng chuột và bàn phím.

### Giai đoạn 4 — Markdown workflow
- Tạo bài viết Markdown mẫu.
- Tạo trang chi tiết bài viết và project.
- Thêm tag filtering, search và code copy.
- Xác minh draft không xuất hiện trên production.

**Tiêu chí hoàn thành:** có thể thêm bài viết mới chỉ bằng cách tạo file `.md` theo mẫu.

### Giai đoạn 5 — QA và deploy
- Chạy build production.
- Kiểm tra đường dẫn với GitHub Pages base path.
- Kiểm tra mobile, bàn phím, reduced motion và link ngoài.
- Kiểm tra SEO metadata, ảnh và 404.
- Viết README và hướng dẫn cá nhân hóa.

**Tiêu chí hoàn thành:** deploy thành công và người dùng biết cách cập nhật nội dung.

---

## 12. Tiêu chí nghiệm thu

- [ ] Có đủ 6 trang: Home, About, Posts, Projects, Lab, Contact.
- [ ] Posts và Projects được quản lý bằng Markdown/content collections.
- [ ] Có trang chi tiết cho bài viết.
- [ ] Navigation hoạt động ở desktop và mobile.
- [ ] Có ít nhất 3 hiệu ứng tinh tế nhưng không ảnh hưởng nội dung.
- [ ] Có trạng thái reduced motion.
- [ ] Có 404 page.
- [ ] Không có API key hoặc secret trong frontend.
- [ ] Tương thích GitHub Pages static hosting.
- [ ] GitHub Actions build/deploy được.
- [ ] Không còn link nội bộ hỏng trong các trang đã tạo.
- [ ] README có hướng dẫn chạy, build, deploy và cập nhật Markdown.
- [ ] Thông tin cá nhân chưa được cung cấp vẫn là placeholder rõ ràng.

---

## 13. Hướng dẫn thực thi cho AI Coding Agent

Hãy thực hiện theo trình tự sau:

1. **Khảo sát trước:** kiểm tra repository, package manager, nhánh deploy và cấu hình GitHub Pages hiện có. Báo lại các phát hiện quan trọng trong phần tổng kết.
2. **Lập kế hoạch ngắn:** xác định file sẽ tạo/sửa và các quyết định kỹ thuật.
3. **Triển khai theo giai đoạn:** ưu tiên website chạy được trước, sau đó thêm hiệu ứng. Không xây toàn bộ bằng một component khổng lồ.
4. **Giữ code có cấu trúc:** component có trách nhiệm rõ ràng, TypeScript có kiểu dữ liệu, content schema có kiểm tra.
5. **Không bịa nội dung:** sử dụng placeholder cho thông tin cá nhân, dự án, email và tài khoản chưa được cung cấp.
6. **Chạy kiểm tra:** cài dependencies phù hợp, chạy lint/typecheck/build nếu scripts có hỗ trợ. Sửa lỗi do thay đổi gây ra.
7. **Không tuyên bố đã deploy** nếu chưa thật sự chạy và xác minh workflow.
8. **Báo cáo cuối:** nêu stack đã dùng, các trang đã hoàn thành, lệnh kiểm tra đã chạy, cách thay nội dung, và các việc người dùng còn cần cung cấp.
9. Nếu gặp lựa chọn không quan trọng, hãy chọn phương án đơn giản, dễ bảo trì và phù hợp GitHub Pages thay vì hỏi liên tục.
10. Nếu phát hiện repository đang có cấu trúc hoặc framework tốt, hãy giữ lại khi hợp lý và giải thích ngắn gọn thay vì viết lại toàn bộ.

---

## 14. Những thông tin cần thay trước khi công bố

- `[YOUR_NAME]` — tên hiển thị.
- `[YOUR_ROLE]` — ví dụ: IT Student / Frontend Developer.
- `[YOUR_TAGLINE]` — câu giới thiệu.
- `[YOUR_EMAIL]` — email liên hệ.
- `[YOUR_GITHUB_URL]` — hồ sơ GitHub.
- `[YOUR_AVATAR]` — ảnh đại diện nếu muốn.
- Các dự án, kỹ năng, bài viết và liên kết thật.

**Nguyên tắc cuối:** ưu tiên nội dung thật, hiệu năng tốt, trải nghiệm truy cập rõ ràng và cấu trúc dễ mở rộng. Portfolio cần gây ấn tượng bằng cả chất lượng kỹ thuật lẫn các dự án thực tế, không chỉ bằng hiệu ứng hình ảnh.
