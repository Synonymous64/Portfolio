import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

const config = {
  darkMode: 'class',

  content: [
    './pages/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx,md,mdx}',
    './app/**/*.{ts,tsx,md,mdx}',
    './src/**/*.{ts,tsx,md,mdx}',
    './posts/**/*.{ts,tsx,md,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'card-hover': 'card-hover 10s ease-in-out infinite',
        'image-glow': 'image-glow 2s ease-in-out infinite alternate',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        wave: 'wave 2.5s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee-scroll': 'marqueeScroll 80s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        shimmer: 'shimmer 3s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'image-glow': {
          '0%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { 'box-shadow': '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        'card-hover': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-5px) scale(1.01)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },

        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        glow: {
          '0%': { boxShadow: '0 0 0 rgba(var(--primary-rgb), 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.8)' },
        },

        shimmer: {
          '0%': {
            backgroundPosition: '200% center',
          },
          '100%': {
            backgroundPosition: '-200% center',
          },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.15' },
        },
      },
      backgroundImage: {
        'letter-top': 'linear-gradient(360deg, #130832 0%, #722186 100%)',
        'letter-middle':
          'linear-gradient(1.77deg, #1A1056 1.57%, #8F1BAC 98.43%)',
        'fade-left': 'linear-gradient(to right, rgb(0, 0, 0), transparent)',
        'fade-right': 'linear-gradient(to left, rgb(0, 0, 0), transparent)',
        'logo-gradient':
          'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
      },
      boxShadow: {
        'alt-cta': 'inset 0px 0px 10px #FFFFFF',
        cta: 'inset 0px 0px 14px #000000',
        'letter-top': '0px 0px 20px #0F0C22',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        handwriting: ['var(--font-handwriting)'],
        monalisa: ['var(--font-monalisa)'],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      colors: {
        'letter-bottom': '#68147D',
        'bg-default': '#07070C',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
} satisfies Config;

export default config;
