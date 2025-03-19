import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Raleway", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px 0 rgba(var(--primary-rgb), 0.5)",
            opacity: "0.8",
          },
          "50%": {
            boxShadow: "0 0 20px 5px rgba(var(--primary-rgb), 0.3)",
            opacity: "1",
          },
        },
        "scale-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "200% center",
          },
          "100%": {
            backgroundPosition: "-200% center",
          },
        },
        ringA: {
          'from, 4%': {
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-330'
          },
          '12%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-335'
          },
          '32%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-595'
          },
          '40%, 54%': {
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-660'
          },
          '62%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-665'
          },
          '82%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-925'
          },
          '90%, to': {
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-990'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'shine': {
          '0%': {
            'background-position': '200% 0'
          },
          '100%': {
            'background-position': '-200% 0'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scale-pulse": "scale-pulse 3s ease-in-out infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        shimmer: "shimmer 3s linear infinite",
        ringA: 'ringA 2s linear infinite',
        ringB: 'ringB 2s linear infinite',
        ringC: 'ringC 2s linear infinite',
        ringD: 'ringD 2s linear infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'shine-slow': 'shine 3s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
