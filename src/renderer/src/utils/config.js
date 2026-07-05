/**
 * WHITE-LABEL CONFIG
 * ------------------
 * This is the single source of truth for branding the portfolio.
 * Change these values to re-brand the entire app in one place.
 */
export const siteConfig = {
  brand: 'Manish.dev',
  logoInitials: 'M',
  // Profile photo shown on the intro + hero. Falls back to the name logo
  // (logoInitials) automatically if the image can't be loaded.
  // Self-hosted from src/renderer/public so it works offline (desktop app)
  // and is reliably fetchable by social/search crawlers (web build).
  profileImage: './profile.png',
  owner: {
    name: 'Manish Kumar',
    role: 'Software Developer (React Native & Web)',
    tagline:
      'Software Developer with 2 years of experience building production-ready React Native and React.js applications, with strong skills in Redux Toolkit, API integration and payment integration.',
    location: 'Sri Ganganagar, Rajasthan, India',
    email: 'royalmanish714@gmail.com',
    // Phone numbers used for Call (tel:) and WhatsApp (wa.me) links.
    phones: [
      { display: '+91 7852860878', tel: '+917852860878', wa: '917852860878' },
      { display: '+91 7852860878', tel: '+917852860878', wa: '917852860878' }
    ],
    resumeUrl: './Manish_Kumar_Resume.pdf',
    resumeDownloadUrl: './Manish_Kumar_Resume.pdf',
    desktopDownloadUrl: null,
    available: true
  },
  // Rotating job titles shown in the hero heading.
  roles: [
    'React Native Developer',
    'React.js Developer',
    'Frontend Developer',
    'Software Developer',
    'Web Application Developer'
  ],
  // Short professional title shown in the header next to the avatar.
  roleShort: 'React Native | React.js Developer',
  // Default look on first launch (white-label defaults).
  defaultTheme: 'aurora', // 'aurora' | 'emerald' | 'sunset' | 'ocean' | 'rose'
  defaultMode: 'dark', // 'light' | 'dark'
  defaultGlass: 'frosted', // 'frosted' | 'liquid' | 'clear' | 'tinted' | 'solid'

  // Contact form delivery (FormSubmit.co — free, no signup / API key).
  // Messages from the contact form are emailed to this address.
  // NOTE: the very first submission triggers a one-time activation email
  // to this inbox; click the link once to start receiving messages.
  contactRecipient: 'royalmanish714@gmail.com',

  // Persisted keys in localStorage.
  storageKeys: {
    theme: 'portfolio.theme',
    mode: 'portfolio.mode',
    glass: 'portfolio.glass'
  }
}

/** Navigation links used by the navbar + scroll-spy. */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]
