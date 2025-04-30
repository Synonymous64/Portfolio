'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionStyle,
} from 'framer-motion';
import Image, { StaticImageData } from 'next/image'; // Updated import
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

// SVG Background component
import SVGGradientBg from '../SVGGradientBg';

// Social Media Icons
import GithubLogo from '../../../public/images/svg/Github-Logo.svg';
import InstagramLogo from '../../../public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '../../../public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '../../../public/images/svg/X-Twitter-Logo.svg';

// Types
interface NavItem {
  name: string;
  href: string;
  icon: string;
  isActive: boolean;
}

interface NavLinkProps {
  href: string;
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string,
  ) => void;
}

interface SocialLinkProps {
  href: string;
  icon: StaticImageData;
  name: string;
}

interface PageLoaderProps {
  isLoading: boolean;
  loadingText?: string;
}

// Page Loader Component
const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading,
  loadingText = 'Loading',
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-24 w-24">
              {/* Animated Circle Loader */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-l-4 border-r-4 border-t-4 border-transparent border-t-pink-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 flex items-center justify-center"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>
            </div>

            <motion.p
              className="text-xl font-light tracking-widest text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {loadingText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                }}
              >
                .
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Logo Component with animated gradient
const LogoComponent: React.FC = () => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, -2, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative flex items-center gap-2"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-pink-600/80 shadow-lg backdrop-blur-md">
        {/* Replace the P with a custom icon */}
        <span className="text-xl text-white">⚡</span>

        {/* Add animated rings around the logo */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-white/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="text-lg font-semibold">
        <motion.span
          className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Prajwal
        </motion.span>
      </div>
    </motion.div>
  );
};

// Navigation Link Component
const NavLink: React.FC<NavLinkProps> = ({
  href,
  name,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => onClick(e, href, name)}
      className={clsx(
        'group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
        isActive
          ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white'
          : 'text-white/70 hover:text-white',
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm">{icon}</span>
      <span>{name}</span>

      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"
          initial={false}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}

      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

// Social Link Component
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, name }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2 transition-all duration-300 hover:bg-white/20"
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image
        src={icon}
        alt={`${name} Logo`}
        width={24}
        height={24}
        className="h-full w-full object-contain"
      />
      <motion.span
        className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-md bg-white/10 px-2 py-1 text-xs backdrop-blur-md group-hover:flex"
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        {name}
      </motion.span>
    </motion.a>
  );
};

// Custom Hire Me Button
const HireMeButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 font-medium text-white shadow-lg"
    >
      {/* <span className="relative z-10 flex items-center gap-2">
        Hire Me
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </span> */}

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
        initial={{ x: '100%' }}
        whileHover={{ x: '0%' }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        initial={{ backgroundPosition: '0% 50%' }}
        whileHover={{ backgroundPosition: '100% 50%' }}
        style={{
          backgroundSize: '200% 200%',
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
      />
    </motion.button>
  );
};

// Main Navigation Component
export default function EnhancedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>('Loading');

  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();

  // Initialize navMenu with current page active
  const [navMenu, setNavMenu] = useState<NavItem[]>(() => {
    const items = [
      { name: 'Home', href: '/#home', icon: '🏠', isActive: false },
      { name: 'About', href: '/#about', icon: '👤', isActive: false },
      { name: 'Skills', href: '/#skills', icon: '🛠️', isActive: false },
      { name: 'Projects', href: '/#projects', icon: '💼', isActive: false },
      { name: 'Experience', href: '/#experience', icon: '📈', isActive: false },
      { name: 'Blogs', href: '/posts', icon: '📝', isActive: false },
      { name: 'Gallery', href: '/gallery', icon: '🖼️', isActive: false },
      { name: 'Contact', href: '/#contact', icon: '📨', isActive: false },
    ];

    // Set active based on current pathname
    return items.map((item) => ({
      ...item,
      isActive:
        pathname === '/'
          ? item.name === 'Home'
          : item.href === pathname ||
            (pathname.startsWith('/posts') && item.href === '/posts') ||
            (pathname.startsWith('/gallery') && item.href === '/gallery'),
    }));
  });

  // Dynamic background styles based on scroll
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0.1, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 100], ['4px', '10px']);

  // Function to set active nav item
  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };

  // Update active section on scroll
  const useActiveSection = (offset: number = 100) => {
    useEffect(() => {
      // If we're not on the homepage, don't track section scrolling
      if (pathname !== '/') return;

      const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = 'Home'; // Default

        navMenu.forEach(({ name, href }) => {
          // Check for hash-based sections
          if (href.startsWith('/#')) {
            const sectionId = href.substring(2);
            const element = document.getElementById(sectionId);
            if (element) {
              const sectionTop = element.offsetTop - offset;
              if (pageYOffset >= sectionTop) {
                newActiveSection = name;
              }
            }
          } else if (
            pathname === '/' &&
            (name === 'Blogs' || name === 'Gallery')
          ) {
            // Handle special sections for homepage featured content
            const sectionClass =
              name === 'Blogs'
                ? 'featured-blogs-section'
                : 'featured-gallery-section';

            const element = document.querySelector(`.${sectionClass}`);
            if (element) {
              const sectionTop = (element as HTMLElement).offsetTop - offset;
              if (pageYOffset >= sectionTop) {
                newActiveSection = name;
              }
            }
          }
        });

        setActiveNavItem(newActiveSection);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, navMenu]);
  };

  // Update active menu item when pathname changes
  useEffect(() => {
    if (pathname === '/') {
      setActiveNavItem('Home');
    } else if (pathname === '/posts' || pathname.startsWith('/posts/')) {
      setActiveNavItem('Blogs');
    } else if (pathname === '/gallery' || pathname.startsWith('/gallery/')) {
      setActiveNavItem('Gallery');
    } else {
      // For other pages, find the matching nav item or default to none
      const matchingItem = navMenu.find((item) => item.href === pathname);
      if (matchingItem) {
        setActiveNavItem(matchingItem.name);
      }
    }
  }, [pathname]);

  // Handle route change events for loader
  useEffect(() => {
    // Function to check if we're on gallery or blog pages
    const checkCurrentPath = () => {
      const isGalleryOrBlog =
        pathname === '/gallery' ||
        pathname.startsWith('/gallery/') ||
        pathname === '/posts' ||
        pathname.startsWith('/posts/');

      if (isGalleryOrBlog && isPageLoading) {
        // Small delay for smoother experience
        setTimeout(() => setIsPageLoading(false), 1000);
      }
    };

    // Check on initial load
    checkCurrentPath();

    // Setup route change handlers
    const handleRouteChangeStart = (url: string) => {
      const navigatingToGallery = url.includes('/gallery');
      const navigatingToBlog = url.includes('/posts');

      if (navigatingToGallery || navigatingToBlog) {
        setLoadingText(
          navigatingToGallery ? 'Loading Gallery' : 'Loading Blog',
        );
        setIsPageLoading(true);
      }
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => setIsPageLoading(false), 800);
    };

    // Next.js App Router doesn't have events anymore, but we can
    // intercept navigation clicks to show loader anyway
  }, [pathname, isPageLoading]);

  // Handle navigation click with smooth scroll
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string,
  ) => {
    e.preventDefault();
    setActiveNavItem(name);

    // Show loader for gallery and blog
    if (
      (name === 'Gallery' && !pathname.includes('/gallery')) ||
      (name === 'Blogs' && !pathname.includes('/posts'))
    ) {
      setLoadingText(`Loading ${name}`);
      setIsPageLoading(true);
    }

    // Handle navigation
    if (href.startsWith('/#') && pathname === '/') {
      // Smooth scroll on homepage
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#') && pathname !== '/') {
      // Navigate to homepage then section
      router.push(`/${href}`);
    } else {
      router.push(href);
    }

    // Close mobile menu
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Use active section tracking
  useActiveSection(100);

  return (
    <>
      {/* Page Loader */}
      <PageLoader isLoading={isPageLoading} loadingText={loadingText} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1440px]"
      >
        {/* Fixed Header */}
        <header className="fixed inset-x-0 top-0 z-50">
          <motion.nav
            className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r  to-transparent p-4 backdrop-blur-md transition-all duration-300 lg:px-8"
            style={
              {
                backdropFilter: `blur(${headerBlur.get()})`,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              } as MotionStyle
            }
          >
            {/* Logo */}
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
              <Link href="/" className="block">
                <LogoComponent />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden rounded-full px-2 py-1 backdrop-blur-md lg:flex"
            >
              <div className="flex gap-1">
                {navMenu.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    name={item.name}
                    icon={item.icon}
                    isActive={item.isActive}
                    onClick={handleNavClick}
                  />
                ))}
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-2 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </motion.button>

            {/* Hire Me Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden flex-1 justify-end lg:flex"
            >
              {/* <HireMeButton /> */}
            </motion.div>
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <Dialog
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="relative z-[100] lg:hidden"
              >
                {/* Background Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-lg"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Mobile Menu Content */}
                <DialogPanel as="div" className="fixed inset-0">
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col overflow-y-auto border-l border-white/10 bg-gradient-to-b from-purple-900/40 to-black/40 p-6 shadow-xl backdrop-blur-xl"
                  >
                    {/* Header with Close Button */}
                    <div className="flex items-center justify-between">
                      <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <LogoComponent />
                      </Link>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-full bg-white/10 p-2 backdrop-blur-sm"
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6 text-white" />
                      </motion.button>
                    </div>

                    {/* Navigation Links */}
                    <motion.div
                      className="mt-10 flex flex-col space-y-4 text-center"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {navMenu.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={(e) =>
                            handleNavClick(e, item.href, item.name)
                          }
                          className={clsx(
                            'flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-all',
                            item.isActive
                              ? 'bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-white'
                              : 'text-white/80 hover:bg-white/10',
                          )}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-xl">{item.icon}</span>
                          {item.name}
                        </motion.a>
                      ))}
                    </motion.div>

                    {/* Mobile Hire Me Button */}
                    <motion.div
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {/* <HireMeButton /> */}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      className="mt-auto pt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="mb-4 text-center text-sm text-white/70">
                        Connect with me
                      </p>
                      <div className="flex justify-center gap-4">
                        <SocialLink
                          href="https://github.com/Synonymous64"
                          icon={GithubLogo}
                          name="GitHub"
                        />
                        <SocialLink
                          href="https://x.com/PrajInMetaverse"
                          icon={TwitterLogo}
                          name="Twitter"
                        />
                        <SocialLink
                          href="https://www.instagram.com/praj_in_metaverse/"
                          icon={InstagramLogo}
                          name="Instagram"
                        />
                        <SocialLink
                          href="https://www.linkedin.com/in/prajwal-urkude-8a1b6818b/"
                          icon={LinkedinLogo}
                          name="LinkedIn"
                        />
                      </div>
                    </motion.div>

                    {/* Gradient Background */}
                    <SVGGradientBg />
                  </motion.div>
                </DialogPanel>
              </Dialog>
            )}
          </AnimatePresence>
        </header>

        {/* Add padding to account for fixed header */}
        <div className="pt-20">
          {/* Animated Gradient Background */}
          <div className="relative isolate overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                delay: 1,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
