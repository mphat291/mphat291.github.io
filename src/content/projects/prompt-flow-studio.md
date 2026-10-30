---
title: "Prompt Flow & JSON Schema Studio"
description: "Bộ công cụ hỗ trợ Prompt Engineering, ước tính token và định dạng JSON phản hồi cho các nhà phát triển AI."
tagline: "Developer utility for structuring prompts, estimating tokens, and testing JSON output structures"
category: "AI & Tools"
featured: true
order: 3
techStack: ["TypeScript", "Tailwind CSS", "JSON Schema", "RegEx Engine"]
demoUrl: "/lab/"
githubUrl: "https://github.com/mphat291/mphat291.github.io"
status: "Completed"
cover: "/images/projects/prompt-studio.webp"
---

## 1. Giới thiệu dự án

Khi làm việc với các Large Language Models (LLM), việc chuẩn hóa System Prompt, phân tách biến ngữ cảnh và đảm bảo đầu ra tuân thủ cấu trúc JSON nghiêm ngặt là yêu cầu bắt buộc để xây dựng ứng dụng bền vững.

Dự án này cung cấp giao diện trực quan hỗ trợ:
- Kiểm tra tính hợp lệ của cấu trúc JSON ngay tại thời điểm gõ.
- Ước tính số lượng Token (ước tính xấp xỉ 1 token ~ 4 ký tự đối với tiếng Anh và phân đoạn Byte-pair đối với tiếng Việt).
- Thử nghiệm các mẫu System Prompt chuẩn hóa cho vai trò Coding Assistant, Data Analyst và Technical Writer.

## 2. Điểm đặc biệt

- **100% Client-side:** Không gửi bất kỳ dữ liệu nhạy cảm hay nội dung prompt nào lên máy chủ bên ngoài.
- **Tốc độ phản hồi tức thì:** Tối ưu hóa chu trình re-render và kiểm tra lỗi cú pháp không có độ trễ.
