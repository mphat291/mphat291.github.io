export interface SkillCategory {
  name: string;
  description: string;
  items: {
    name: string;
    level: 'Core' | 'Advanced' | 'Exploring';
    iconName?: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteName: string;
  author: {
    name: string;
    role: string;
    tagline: string;
    shortBio: string;
    location: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    avatarUrl: string;
    status: string;
  };
  siteUrl: string;
  navLinks: {
    title: string;
    href: string;
    badge?: string;
  }[];
  skills: SkillCategory[];
  milestones: Milestone[];
}

export const siteConfig: SiteConfig = {
  siteTitle: 'NEXUS Portfolio',
  siteName: 'NEXUS',
  author: {
    name: 'Mã Triệu Phát',
    role: 'IT Student & Frontend Developer', // Placeholder: Thay đổi theo định hướng nghề nghiệp
    tagline: 'Crafting futuristic, high-performance web applications and exploring AI-driven interfaces.',
    shortBio: 'Sinh viên Công nghệ Thông tin đam mê xây dựng giao diện người dùng trực quan, tối ưu trải nghiệm và khám phá ứng dụng AI trên trình duyệt.',
    location: 'Cà Mau, Việt Nam',
    email: 'maphat2911@gmail.com', // Placeholder: Thay bằng email thật của bạn
    githubUrl: 'https://github.com/mphat291', // URL GitHub của chủ sở hữu
    linkedinUrl: 'https://linkedin.com/in/[YOUR_LINKEDIN]', // Placeholder: Link LinkedIn
    avatarUrl: '/images/avatar.svg',
    status: 'Ready for internships & collaboration',
  },
  siteUrl: 'https://mphat291.github.io',
  navLinks: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about/' },
    { title: 'Projects', href: '/projects/' },
    { title: 'Posts', href: '/posts/' },
    { title: 'Lab / AI', href: '/lab/', badge: 'Demo' },
    { title: 'Contact', href: '/contact/' },
  ],
  skills: [
    {
      name: 'Languages',
      description: 'Ngôn ngữ lập trình cốt lõi và kiểu dữ liệu tĩnh',
      items: [
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ESNext)', level: 'Advanced' },
        { name: 'Python', level: 'Core' },
        { name: 'C / C++', level: 'Core' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'SQL', level: 'Core' },
      ],
    },
    {
      name: 'Frontend',
      description: 'Framework, thư viện giao diện và CSS hiện đại',
      items: [
        { name: 'Astro', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'React.js', level: 'Core' },
        { name: 'Next.js', level: 'Core' },
        { name: 'Responsive UI / Mobile-First', level: 'Advanced' },
        { name: 'Web Performance / SEO', level: 'Advanced' },
      ],
    },
    {
      name: 'Backend',
      description: 'Xây dựng API, dịch vụ mạng và luồng xử lý dữ liệu',
      items: [
        { name: 'Node.js', level: 'Core' },
        { name: 'Express / Fastify', level: 'Core' },
        { name: 'RESTful API Design', level: 'Core' },
        { name: 'Authentication & Security', level: 'Core' },
      ],
    },
    {
      name: 'Database',
      description: 'Lưu trữ dữ liệu có cấu trúc và phi tập trung',
      items: [
        { name: 'PostgreSQL', level: 'Core' },
        { name: 'MongoDB', level: 'Core' },
        { name: 'SQLite', level: 'Core' },
        { name: 'Redis (Caching)', level: 'Exploring' },
      ],
    },
    {
      name: 'Tools & DevOps',
      description: 'Quy trình phát triển phần mềm và tự động hóa',
      items: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'GitHub Actions (CI/CD)', level: 'Core' },
        { name: 'Docker basics', level: 'Core' },
        { name: 'VS Code & DevTools', level: 'Advanced' },
        { name: 'Linux / Bash commands', level: 'Core' },
      ],
    },
    {
      name: 'AI & Playground',
      description: 'Công nghệ trí tuệ nhân tạo và tương tác thông minh',
      items: [
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'Client-side ML / Canvas', level: 'Core' },
        { name: 'LLM Integration (REST/SDK)', level: 'Core' },
        { name: 'RAG Concepts & Vector search', level: 'Exploring' },
      ],
    },
  ],
  milestones: [
    {
      year: '2024 - Hiện tại',
      title: 'Sinh viên Công nghệ Thông tin',
      organization: 'Trường Đại học Bình Dương - Phân hiệu Cà Mau',
      description: 'Tập trung nghiên cứu kỹ thuật phần mềm, cấu trúc dữ liệu giải thuật, kiến trúc web hiện đại và xây dựng các dự án mã nguồn mở.',
      badge: 'Đang theo học',
    },
    {
      year: '2025',
      title: 'Thực hành lập trình web',
      organization: 'Dự án cá nhân & Nhóm',
      description: 'Lập trình các web bán hàng, quản lý quán cà phê, Quản lý CLB.',
      badge: 'Cột mốc kỹ thuật',
    },
    {
      year: '2026',
      title: 'Xây dựng hệ thống Portfolio & AI Lab Demos',
      organization: 'GitHub Pages & Open Source',
      description: 'Triển khai portfolio tĩnh tích hợp Astro Content Collections, CI/CD GitHub Actions và các phòng thí nghiệm tương tác trên trình duyệt.',
      badge: 'Triển khai thực tế',
    },
  ],
};
