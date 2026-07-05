import {
  Mail,
  Code2,
  Server,
  Palette,
  Rocket,
  Users,
  Trophy,
  Wrench,
  Smartphone,
  Stethoscope,
  UtensilsCrossed,
  PawPrint,
  TrendingUp,
  LayoutDashboard,
  HardHat,
  Car,
  CreditCard,
  MonitorCog
} from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMui,
  SiPostman,
  SiRedux,
  SiStripe,
  SiAndroidstudio,
  SiGit,
  SiLinux
} from 'react-icons/si'
import { LinkedinIcon } from '../components/ui/BrandIcons'
import { siteConfig } from './config'

/** Quick stats shown in the hero / about. */
export const stats = [
  { label: 'Years Experience', value: '2+', icon: Rocket },
  { label: 'Live Projects', value: '6+', icon: Trophy },
  { label: 'Mobile & Web Apps', value: '2', icon: Users },
  { label: 'Core Technologies', value: '12+', icon: Wrench }
]

/** Skill groups. `level` is 0-100 for the animated bars. */
export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'React Native', level: 94 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML & CSS', level: 88 },
      { name: 'Responsive Dashboard Design', level: 86 }
    ]
  },
  {
    title: 'State, API & Payments',
    icon: CreditCard,
    skills: [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'API Integration', level: 91 },
      { name: 'Payment Integration', level: 88 },
      { name: 'Stripe API Integration', level: 86 },
      { name: 'Real-time Data Updates', level: 82 }
    ]
  },
  {
    title: 'Styling & UI',
    icon: Palette,
    skills: [
      { name: 'Material UI (MUI)', level: 88 },
      { name: 'Reusable Components', level: 90 },
      { name: 'Cross-platform UI', level: 88 },
      { name: 'Splash Screen Configuration', level: 82 }
    ]
  },
  {
    title: 'Tools & Platform',
    icon: Smartphone,
    skills: [
      { name: 'Android Studio', level: 84 },
      { name: 'ADB', level: 80 },
      { name: 'Git', level: 86 },
      { name: 'Postman', level: 84 },
      { name: 'Linux (Kali)', level: 78 },
      { name: 'Virtual Machine Management', level: 76 }
    ]
  }
]

/**
 * Marquee tech stack. `color` is the brand colour used to tint the icon;
 * monochrome brands (null) inherit the theme's content colour.
 */
export const techStack = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  { name: 'API Integration', icon: Server, color: '#22C55E' },
  { name: 'Payment Integration', icon: CreditCard, color: '#14B8A6' },
  { name: 'Stripe API', icon: SiStripe, color: '#635BFF' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Linux', icon: SiLinux, color: null },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#663399' }
]

/**
 * Projects. `category` drives the filter (web | mobile | desktop).
 * `live`/`source`/`download` are null when unavailable. `featured` enlarges the card.
 */
export const projects = [
  {
    title: 'Health Buddy',
    description:
      'Live health and wellness application focused on medical tracking, user-centric flows, performance and stability in production.',
    tags: ['React Native', 'API Integration', 'Health Tech'],
    icon: Stethoscope,
    category: 'mobile',
    featured: true,
    live: null,
    source: null,
    download: null
  },
  {
    title: 'Chef App',
    description:
      'Food product purchasing app with seamless payment integration, cross-platform UI consistency and performance-focused fixes.',
    tags: ['React Native', 'Payment Integration', 'Stripe API'],
    icon: UtensilsCrossed,
    category: 'mobile',
    featured: true,
    live: null,
    source: null,
    download: null
  },
  {
    title: 'Petvesta',
    description:
      'Pet care platform where I worked on feature implementation, UI components and functionality improvements for a smoother user experience.',
    tags: ['React Native', 'UI Components', 'API Integration'],
    icon: PawPrint,
    category: 'mobile',
    featured: false,
    live: null,
    source: null,
    download: null
  },
  {
    title: 'FMO App',
    description:
      'Financial and trading platform with optimized core components, real-time data updates and interactive dashboards.',
    tags: ['React Native', 'Real-time Data', 'Dashboard'],
    icon: TrendingUp,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Construction Web Portal',
    description:
      'React-based construction management portal with responsive project-tracking dashboards, resource allocation flows and manifest updates.',
    tags: ['React.js', 'TypeScript', 'Responsive Dashboard'],
    icon: HardHat,
    category: 'web',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Car Dekho App',
    description:
      'React Native app work covering splash screen configuration, boot sequence optimization, UI components and local environment setup.',
    tags: ['React Native', 'Android Studio', 'Splash Screen'],
    icon: Car,
    category: 'mobile',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Responsive Admin Dashboards',
    description:
      'Reusable dashboard interfaces built with React.js, Redux Toolkit, Material UI and API integrations for production workflows.',
    tags: ['React.js', 'Redux Toolkit', 'Material UI'],
    icon: LayoutDashboard,
    category: 'web',
    featured: false,
    live: null,
    source: null
  },
  {
    title: 'Portfolio Desktop App',
    description:
      'Animated desktop portfolio built with Electron, React and Vite to present skills, projects, experience and contact details.',
    tags: ['Electron', 'React.js', 'Vite'],
    icon: MonitorCog,
    category: 'desktop',
    featured: false,
    live: null,
    source: null,
    download: siteConfig.owner.desktopDownloadUrl
  }
]

/** Work / education timeline. */
export const experience = [
  {
    role: 'Software Developer',
    company: 'Syncglob Private Limited',
    location: 'Sri Ganganagar, Rajasthan',
    period: '2 Years',
    description:
      'Built and improved live React Native and web applications including Health Buddy, Petvesta, Chef App, FMO App, Construction Web Portal and Car Dekho App. Worked across mobile UI, web dashboards, API integration, payment integration, Android configuration and performance optimization.',
    tags: ['React Native', 'React.js', 'TypeScript', 'Redux Toolkit', 'Stripe API', 'Material UI']
  },
  {
    role: 'Diploma in Web Development',
    company: 'IEC Computer Centre',
    location: '',
    period: '6 Months',
    description:
      'Completed focused web development training covering frontend fundamentals, responsive UI and practical application building.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js']
  },
  {
    role: 'Bachelor of Arts (B.A.)',
    company: 'Maharaja Ganga Singh University (MGSU)',
    location: 'Rajasthan',
    period: '2023',
    description: 'Graduated with a Bachelor of Arts degree from MGSU with 60%.',
    tags: ['Graduation', 'Communication', 'Problem Solving']
  }
]

/** Social links. */
export const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manish-kumar-005919265/',
    icon: LinkedinIcon
  },
  { name: 'Email', href: 'mailto:royalmanish714@gmail.com', icon: Mail }
]
