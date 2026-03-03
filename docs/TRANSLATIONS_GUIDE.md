## How to Add Content Translations

The translation system is now set up and working. Here's how to translate your entire website:

### 1. Add Translation Keys

Open [lib/translations.ts](../../lib/translations.ts) and add your content:

```typescript
export const translations = {
  en: {
    // ... existing keys ...
    
    // Add your new translations like this:
    aboutMeTitle: 'About Me',
    aboutMeDescription: 'I am a passionate developer...',
    projectsTitle: 'My Projects',
    skillsHeading: 'Technical Skills',
  },
  de: {
    // ... existing keys ...
    
    aboutMeTitle: 'Über Mich',
    aboutMeDescription: 'Ich bin ein leidenschaftlicher Entwickler...',
    projectsTitle: 'Meine Projekte',
    skillsHeading: 'Technische Fähigkeiten',
  },
};
```

### 2. Use Translations in Components

Import and use the translation hook in any component:

```tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export function AboutMe() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('aboutMeTitle')}</h1>
      <p>{t('aboutMeDescription')}</p>
    </div>
  );
}
```

### 3. How It Works Automatically

Once you add translations:
- ✅ The content **automatically updates** when user clicks the language switcher
- ✅ The choice is **saved in localStorage** - persists across sessions
- ✅ No page refresh needed - instant translation

### Example: Translating Hero Component

**File: components/Hero/Hero.tsx**

```tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('heroTitle')}</h1> {/* Will show "Welcome" or "Willkommen" */}
      <p>{t('heroSubtitle')}</p>
    </div>
  );
}
```

**File: lib/translations.ts**

```typescript
export const translations = {
  en: {
    heroTitle: 'Welcome to My Portfolio',
    heroSubtitle: 'Full-stack developer & designer',
  },
  de: {
    heroTitle: 'Willkommen in meinem Portfolio',
    heroSubtitle: 'Full-Stack-Entwickler & Designer',
  },
};
```

### Translation Keys to Add

Here are the main components you should translate:

- **Hero Component**: Title, subtitle, CTA buttons
- **About Me**: Title, bio, social links text
- **Skills**: Section heading, skill categories, skill names
- **Projects**: Project titles, descriptions, tech stack labels
- **Experience**: Job titles, company names, descriptions
- **Blog**: "Read More", pagination labels
- **Gallery**: Gallery title, image alt texts
- **Contact**: Form labels, button text, success/error messages
- **Footer**: Copyright text, link labels

### Quick Reference

#### Translation Hook Usage:
```tsx
const { t, language } = useTranslation();

// t() - translates a key
const title = t('heroTitle');

// language - check current language
if (language === 'de') {
  console.log('German selected');
}
```

#### Testing Translations

Simply click the language switcher button in the top navigation (desktop or mobile menu) to test:
- 🇬🇧 English
- 🇩🇪 Deutsch

All components using `useTranslation()` will update instantly!

---

**Note:** Only content that uses the `useTranslation()` hook will automatically translate. Static text without translations won't change. Make sure to wrap your content with translations!
