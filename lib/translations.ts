export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    blogs: 'Blogs',
    gallery: 'Gallery',
    contact: 'Contact',
    hireMe: 'Hire Me',
    connectWithMe: 'Connect with me',
    
    // Language
    language: 'Language',
    english: 'English',
    deutsch: 'Deutsch',

    // Common
    loading: 'Loading',
    loadingGallery: 'Loading Gallery',
    loadingBlog: 'Loading Blog',
  },
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    experience: 'Erfahrung',
    blogs: 'Blogs',
    gallery: 'Galerie',
    contact: 'Kontakt',
    hireMe: 'Stelle mich ein',
    connectWithMe: 'Verbinde dich mit mir',
    
    // Language
    language: 'Sprache',
    english: 'English',
    deutsch: 'Deutsch',

    // Common
    loading: 'Wird geladen',
    loadingGallery: 'Galerie wird geladen',
    loadingBlog: 'Blog wird geladen',
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];
