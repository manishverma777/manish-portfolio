import {
  Mail,
  Globe,
  Code2,
  Server,
  Palette,
  Rocket,
  Users,
  Trophy,
  Wrench,
  GraduationCap,
  ClipboardList,
  Package,
  ShoppingBag,
  Truck,
  LayoutDashboard,
  HeartPulse,
  Pill,
  Plane,
  Sparkles,
  Monitor,
  Building2
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiElectron,
  SiFigma,
  SiPostman,
  SiGithubcopilot,
  SiXcode
} from 'react-icons/si'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'

/** Quick stats shown in the hero / about. */
export const stats = [
  { label: 'Years Experience', value: '3+', icon: Rocket },
  { label: 'Projects Shipped', value: '25+', icon: Trophy },
  { label: 'Web / Mobile / Desktop', value: '3', icon: Users },
  { label: 'Tools & Technologies', value: '20+', icon: Wrench }
]

/** Skill groups. `level` is 0–100 for the animated bars. */
export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'React Native', level: 86 },
      { name: 'Electron.js', level: 88 },
      { name: 'Angular.js', level: 50 },
      { name: 'JavaScript', level: 93 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML & CSS', level: 95 }
    ]
  },
  {
    title: 'Styling & UI',
    icon: Palette,
    skills: [
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Material UI', level: 84 },
      { name: 'Figma', level: 82 }
    ]
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 84 },
      { name: 'MongoDB', level: 82 },
      { name: 'Firebase', level: 86 }
    ]
  },
  {
    title: 'Tools & AI',
    icon: Rocket,
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Postman', level: 88 },
      { name: 'Xcode', level: 72 },
      { name: 'GitHub Copilot', level: 92 },
      { name: 'Cursor AI', level: 88 },
      { name: 'Antigravity', level: 75 }
    ]
  }
]

/**
 * Marquee tech stack. `color` is the brand colour used to tint the icon;
 * monochrome brands (null) inherit the theme's content colour.
 */
export const techStack = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: null },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#663399' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Angular.js', icon: SiAngular, color: '#DD0031' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress, color: null },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Electron.js', icon: SiElectron, color: '#47848F' },
  { name: 'Xcode', icon: SiXcode, color: '#147EFB' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'GitHub Copilot', icon: SiGithubcopilot, color: null },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
]

/**
 * Projects. `category` drives the filter (web | mobile | desktop).
 * `live`/`source`/`download` are null when unavailable. `featured` enlarges the card.
 */
export const projects = [
  {
    title: 'Portfolio Desktop App',
    description:
      'This very application — a fully animated, multi-theme portfolio built as a cross-platform desktop app with Electron, React, Vite and Tailwind CSS.',
    tags: ['Electron', 'React', 'Vite', 'Tailwind CSS'],
    icon: Monitor,
    category: 'desktop',
    featured: true,
    live: null,
    source: 'https://github.com/masaiff210880',
    download: '#'
  },
  {
    title: 'Trivida Corporation',
    description:
      'Cross-platform desktop application for Trivida Corporation — a fast, responsive management experience with a native feel, built as an Electron desktop app.',
    tags: ['Electron.js', 'Tailwind CSS', 'React', 'Vite'],
    icon: Building2,
    category: 'desktop',
    featured: false,
    live: null,
    source: null,
    download: null
  },
  {
    title: 'American Distributor (Desktop)',
    description:
      'Desktop distribution management app for American Distributor, streamlining catalog, orders and workflows in a smooth, cross-platform Electron build.',
    tags: ['Electron.js', 'Tailwind CSS', 'React', 'Vite'],
    icon: Package,
    category: 'desktop',
    featured: false,
    live: null,
    source: null,
    download: null
  },
  {
    title: 'LMS — Learning Management (User Portal)',
    description:
      'Modern LMS user interface for Sabeel TV where students browse, enroll and learn from structured courses with a responsive UI and secure integrations.',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js'],
    icon: GraduationCap,
    category: 'web',
    featured: true,
    live: 'https://sabeeltv.com/',
    source: 'https://github.com/articulationpoint/sabeel_learning_frontend'
  },
  {
    title: 'Learning Management Mobile App',
    description:
      'Cross-platform LMS app with live classes, paid courses and streaming at scale for thousands of concurrent learners.',
    tags: ['React Native', 'Zoom SDK', 'Razorpay'],
    icon: GraduationCap,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'NoteTracker — Order & Workflow',
    description:
      'Mobile order and workflow system with role-based access for admins, employees and users — from request through verification.',
    tags: ['React Native', 'NativeWind', 'Workflow'],
    icon: ClipboardList,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'LMS — Admin Portal',
    description:
      'Admin dashboard to manage courses, users and content for Sabeel TV, with analytics and management tools for instructors and admins.',
    tags: ['React.js', 'Tailwind CSS', 'Express.js'],
    icon: LayoutDashboard,
    category: 'web',
    featured: false,
    live: 'https://admin.sabeeltv.com/dashboard',
    source: 'https://github.com/articulationpoint/sabeel_learning_admin'
  },
  {
    title: 'American Distributors',
    description:
      'React Native e-commerce and distribution app with a Firebase backend, secure checkout and full App Store release workflow.',
    tags: ['React Native', 'Firebase', 'Payments'],
    icon: Package,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Smokevana',
    description:
      'Mobile retail e-commerce with age verification, in-app payments and Firebase-backed integrations for regulated products.',
    tags: ['React Native', 'Firebase', 'Xcode'],
    icon: ShoppingBag,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Green Street Distro',
    description:
      'Distribution-focused React Native storefront with Firebase services, payments, compliance checkpoints and production release.',
    tags: ['React Native', 'Firebase', 'App Store'],
    icon: Truck,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'HealthKart',
    description:
      'Online platform for authentic health and nutrition supplements — protein, weight-loss products, gym memberships and trainers.',
    tags: ['React', 'Redux', 'MongoDB'],
    icon: HeartPulse,
    category: 'web',
    featured: false,
    live: 'https://frontend-vinaykumar7580.vercel.app/',
    source: 'https://github.com/masaiff210880/defeated-interest-8343'
  },
  {
    title: 'MedZ+',
    description:
      'Online health platform for ayurvedic, homeopathic, vitamins and nutrition supplements delivered at home.',
    tags: ['React', 'Redux', 'Chakra UI'],
    icon: Pill,
    category: 'web',
    featured: false,
    live: 'https://medzplus.vercel.app/',
    source: 'https://github.com/masaiff210880/-quick-jelly-9961'
  },
  {
    title: 'Yaatra',
    description:
      'Online travel website where travelers can make airline, hotel and car-rental reservations.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    icon: Plane,
    category: 'web',
    featured: false,
    live: 'https://joyful-begonia-5f548b.netlify.app/fw22_0277home.html',
    source: 'https://github.com/masaiff210880/flaky-suggestion-4282'
  },
  {
    title: 'Glamour Beauty',
    description:
      'Popular e-commerce platform selling cosmetics across many brands and product categories.',
    tags: ['React', 'Vite', 'CSS3'],
    icon: Sparkles,
    category: 'web',
    featured: false,
    live: 'https://glamourbeauty-app.vercel.app/',
    source:
      'https://github.com/masaiff210880/posh-title-8378/tree/main/GLAMOUR_BEAUTY/glamourbeauty-app'
  }
]

/** Work / education timeline (from ram-app.github.io). */
export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Phantasm Solutions Pvt Ltd',
    location: 'Vijayawada, Andhra Pradesh',
    period: 'Feb 2023 — Jan 2026',
    description:
      'Leading 5+ frontend teams for enterprise-level web and mobile application development — architecting responsive apps with React.js & Next.js and building cross-platform mobile apps with React Native, following modern best practices.',
    tags: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Material UI', 'Docker']
  },
  {
    role: 'Full Stack Web Development',
    company: 'Masai School',
    location: 'Bengaluru, Karnataka',
    period: '2022 — 2023',
    description:
      'Completed an intensive full-stack web development program — built 10+ solo and collaborative real-world applications and mastered the React and Node.js ecosystem while working in agile teams.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js', 'HTML', 'CSS']
  },
  {
    role: 'Computer Science Engineering',
    company: 'Sams Institute of Technologies',
    location: 'Varanasi, Uttar Pradesh',
    period: '2018 — 2021',
    description:
      'Pursued Computer Science Engineering with a focus on frontend and backend development, building a strong foundation in programming fundamentals, data structures, algorithms and web technologies.',
    tags: ['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS']
  }
]

/** Social links. */
export const socials = [
  { name: 'GitHub', href: 'https://github.com/masaiff210880', icon: GithubIcon },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ram-surat-frontend-developer/',
    icon: LinkedinIcon
  },
  { name: 'Portfolio', href: 'https://ram-app.github.io/', icon: Globe },
  { name: 'Email', href: 'mailto:ram.surat.web@gmail.com', icon: Mail }
]
