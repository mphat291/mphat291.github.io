---
title: "Neural Canvas Visualizer & Simulator"
description: "Phòng thí nghiệm mô phỏng mạng nơ-ron và hệ thống hạt ánh sáng tương tác chạy thuần trên HTML5 Canvas."
tagline: "Interactive 60FPS physics & neural grid simulation with zero external dependencies"
category: "AI & Tools"
featured: true
order: 2
techStack: ["TypeScript", "HTML5 Canvas", "Physics Simulation", "Web APIs"]
demoUrl: "/lab/"
githubUrl: "https://github.com/mphat291/mphat291.github.io"
status: "Completed"
cover: "/images/projects/neural-canvas.webp"
---

## 1. Giới thiệu dự án

Dự án nghiên cứu và hiện thực hóa một bộ mô phỏng hạt ánh sáng (particle grid) và kết nối nơ-ron sinh học chạy ở tần số quét 60 khung hình/giây (FPS) ngay trên trình duyệt mà không cần cài đặt các thư viện đồ họa 3D cồng kềnh.

## 2. Tính năng nổi bật

- **Tương tác vật lý theo vị trí con trỏ:** Các hạt tự động tránh né (repulsion) hoặc bị thu hút (attraction) theo tọa độ chuột của người dùng.
- **Tự động liên kết nơ-ron:** Khi khoảng cách giữa hai hạt nhỏ hơn ngưỡng ngưỡng giới hạn, thuật toán tự động vẽ liên kết đường thẳng có độ trong suốt tỉ lệ nghịch với khoảng cách.
- **Tối ưu năng lượng:** Sử dụng `requestAnimationFrame` và tự động dừng render khi tab trình duyệt không ở trạng thái active (Page Visibility API).
- **Thử nghiệm trực tiếp:** Đã được tích hợp trực tiếp vào trang `/lab/` trên portfolio này.
