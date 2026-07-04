/**
 * WHITE-LABEL CONFIG
 * ------------------
 * This is the single source of truth for branding the portfolio.
 * Change these values to re-brand the entire app in one place.
 */
export const siteConfig = {
  brand: 'Aarav.dev',
  logoInitials: 'A',
  // Profile photo shown on the intro + hero. Falls back to the name logo
  // (logoInitials) automatically if the image can't be loaded.
  // Google Drive file id served via its direct image host.
  profileImage: 'https://lh3.googleusercontent.com/d/1NobY_3oEaWCQ9jS5QEMPdHnCgbOyLmJK=s600',
  owner: {
    name: 'Ram Surat',
    role: 'MERN Stack Developer',
    tagline:
      'Frontend Developer with 3 years of experience building high-performance web, mobile and desktop applications with clean, delightful interfaces.',
    location: 'Mirzapur, Uttar Pradesh, India',
    email: 'ram.surat.web@gmail.com',
    // Phone numbers used for Call (tel:) and WhatsApp (wa.me) links.
    phones: [
      { display: '+91 85450 20686', tel: '+918545020686', wa: '918545020686' },
      { display: '+91 97938 14970', tel: '+919793814970', wa: '919793814970' }
    ],
    resumeUrl: 'https://drive.google.com/file/d/1hr5Y2-LUaD6yUALZBDspRQQ0_NbYYZX1/view',
    resumeDownloadUrl:
      'https://drive.google.com/uc?export=download&id=1hr5Y2-LUaD6yUALZBDspRQQ0_NbYYZX1',
    // Windows installer, hosted as a GitHub Release asset (fixed tag + name).
    // Rebuilt & replaced in-place by `npm run release:win`, so this URL is permanent.
    desktopDownloadUrl:
      'https://github.com/ram-profile/ram.github.io/releases/download/installer-latest/Ram-Setup.exe',
    available: true
  },
  // Rotating job titles shown in the hero heading.
  roles: [
    'MERN Stack Developer',
    'Frontend Developer',
    'Mobile App Developer',
    'Desktop App Developer',
    'Frontend Engineer'
  ],
  // Short professional title shown in the header next to the avatar.
  roleShort: 'Frontend Developer',
  // Default look on first launch (white-label defaults).
  defaultTheme: 'aurora', // 'aurora' | 'emerald' | 'sunset' | 'ocean' | 'rose'
  defaultMode: 'dark', // 'light' | 'dark'
  defaultGlass: 'frosted', // 'frosted' | 'liquid' | 'clear' | 'tinted' | 'solid'

  // Contact form delivery (FormSubmit.co — free, no signup / API key).
  // Messages from the contact form are emailed to this address.
  // NOTE: the very first submission triggers a one-time activation email
  // to this inbox; click the link once to start receiving messages.
  contactRecipient: 'ram.surat.web@gmail.com',

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
