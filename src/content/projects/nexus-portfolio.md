---
title: "NEXUS // Personal Portfolio Site"
description: "Trang portfolio cá nhân phong cách futuristic/AI, tối ưu hiệu năng tối đa trên nền tảng GitHub Pages."
tagline: "High-performance static portfolio with futuristic design tokens & AI playground"
category: "Web"
featured: true
order: 1
techStack: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Actions"]
demoUrl: "https://mphat291.github.io"
githubUrl: "https://github.com/mphat291/mphat291.github.io"
status: "Active"
cover: "/images/projects/nexus-portfolio.webp"
---

## 1. Vấn đề & Bối cảnh

Để tạo ấn tượng với nhà tuyển dụng và cộng đồng mã nguồn mở, một kỹ sư phần mềm tương lai cần một trang hồ sơ cá nhân có tính nhận diện cao, phong cách thiết kế hiện đại, nhưng phải đạt chuẩn mực cao nhất về tốc độ tải, khả năng tiếp cận và tự động hóa.

## 2. Giải pháp kỹ thuật

- **Kiến trúc tĩnh (SSG):** Sử dụng Astro v5 để tiền biên dịch toàn bộ mã HTML và CSS ngay tại thời điểm build, giúp loại bỏ hoàn toàn độ trễ máy chủ.
- **Content Collections & Markdown:** Cho phép dễ dàng bổ sung bài viết kỹ thuật và dự án chỉ bằng cách tạo file `.md` với schema kiểm tra chặt chẽ bởi Zod.
- **Design Tokens tập trung:** Quản lý bảng màu cyberpunk/futuristic qua biến CSS tùy biến, bảo đảm độ tương phản theo chuẩn WCAG AA.
- **Tự động hóa hoàn toàn:** Tích hợp GitHub Actions để tự động build và triển khai lên GitHub Pages sau mỗi lần `git push`.

## 3. Điểm số & Kết quả

- **Lighthouse Score:** Đạt 100/100 cho cả 4 tiêu chí Performance, Accessibility, Best Practices và SEO.
- **Zero Client Secret:** Tuyệt đối không để lộ token hay API keys trên môi trường frontend tĩnh.
- **Tôn trọng người dùng:** Hỗ trợ đầy đủ phím tắt bàn phím và giảm thiểu hiệu ứng chuyển động khi bật `prefers-reduced-motion`.
