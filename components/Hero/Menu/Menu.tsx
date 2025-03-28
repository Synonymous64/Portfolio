'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import SVGGradientBg from '../SVGGradientBg';
import GithubLogo from '../../../public/images/svg/Github-Logo.svg';
import InstagramLogo from '../../../public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '../../../public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '../../../public/images/svg/X-Twitter-Logo.svg';
import clsx from 'clsx';
import Link from 'next/link';
import RotatingText from '@/components/ui/fallingText';

import PortfolioDesign from '@/components/ui/PortfolioDesign';

const inActiveStyle = 'text-white/50 hover:bg-white/40 hover:text-white/80';
const activeStyle = 'bg-gradient-to-b from-white/40 to-[#2F2D2D]/20';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

const NavLink = ({ href, children, isActive, onClick }: any) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={clsx(
        'relative rounded-full px-4 py-1.5 transition-all duration-300',
        isActive ? activeStyle : inActiveStyle,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.a>
  );
};

const CustomConnectButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/50"
    >
      <span className="relative z-10">Hire me</span>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.button>
  );
};

const useActiveSection = (
  sections: NavItem[],
  setActiveNavItem: (name: string) => void,
  offset: number = 100,
) => {
  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let newActiveSection = sections[0].name;

      sections.forEach(({ name, href }) => {
        if (href.startsWith('/#')) {
          const element = document.getElementById(href.substring(2));
          if (element) {
            const sectionTop = element.offsetTop - offset;
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
  }, [sections, setActiveNavItem, offset]);
};

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Home', href: '/#home', isActive: true },
    { name: 'About', href: '/#about', isActive: false },
    { name: 'Skills', href: '/#skills', isActive: false },
    { name: 'Projects', href: '/#projects', isActive: false },
    { name: 'Experience', href: '/#Experience', isActive: false },
    { name: 'Blogs', href: '/posts', isActive: false },
    { name: 'Gallery', href: '/#gallery', isActive: false },
    { name: 'Contact', href: '/#contact', isActive: false },
  ]);

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['bg-black/10', 'bg-black/80'],
  );

  useActiveSection(navMenu, setActiveNavItem);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string,
  ) => {
    e.preventDefault();
    const href = navMenu.find((item) => item.name === name)?.href;

    if (href?.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href) {
      window.location.href = href;
    }

    setActiveNavItem(name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-[1440px]"
    >
      {/* Change 'absolute' to 'fixed' for sticky behavior */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 backdrop-blur-sm transition-all duration-300 lg:px-8"
          style={{ background: headerBg }}
        >
          <motion.div className="flex lg:flex-1" whileHover={{ scale: 1.02 }}>
            <Link className="flex items-center gap-2" href="/">
              <PortfolioDesign />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8 text-white transition-colors hover:text-purple-400" />
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden gap-4 rounded-full bg-white/10 px-5 py-2 text-white backdrop-blur-md lg:flex lg:w-full lg:flex-1 lg:items-center lg:gap-x-12"
          >
            {navMenu.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                isActive={item.isActive}
                onClick={(e) => handleNavClick(e, item.name)}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>

          {/* Custom Connect Button */}
          <motion.div
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            whileHover={{ scale: 1.02 }}
          >
            <CustomConnectButton />
          </motion.div>
        </nav>

        {/* Mobile Menu Dialog */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              />
              <DialogPanel>
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-gray-900 to-black px-6 py-6 sm:max-w-sm"
                >
                  <div className="relative z-50">
                    <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Prajwal</span>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-white">
                            <PortfolioDesign />
                          </div>
                        </div>
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon
                          aria-hidden="true"
                          className="h-10 w-10 text-white"
                        />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6 text-center">
                          {navMenu.map((item) => (
                            <a
                              key={item.name + 1}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="-mx-3 block rounded-lg px-3 py-2 text-3xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        {/* Seperator */}
                        <div className="flex flex-1 items-center justify-center">
                          <div className="h-[2px] w-[70vw] bg-white/100"></div>
                        </div>
                        {/* Social Links */}
                        <div className="mt-10 grid gap-10">
                          <div className="align-center flex flex-1 justify-center gap-10">
                            <a
                              href="https://x.com/PrajInMetaverse"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={TwitterLogo}
                                alt="X/Twitter Logo"
                                width={50}
                                height={50}
                              />
                            </a>

                            <a
                              href="https://github.com/Synonymous64"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={GithubLogo}
                                alt="Github Logo"
                                width={50}
                                height={50}
                              />
                            </a>
                          </div>
                          <div className="align-center flex justify-center gap-10">
                            <a
                              href="https://www.instagram.com/praj_in_metaverse/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="grid items-center"
                            >
                              <Image
                                src={InstagramLogo}
                                alt="Instagram Logo"
                                width={50}
                                height={50}
                              />
                            </a>

                            <a
                              href="https://www.linkedin.com/in/prajwal-urkude-8a1b6818b/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="grid items-center"
                            >
                              <Image
                                src={LinkedinLogo}
                                alt="Linkedin Logo"
                                width={50}
                                height={50}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SVGGradientBg />
                </motion.div>
              </DialogPanel>
            </Dialog>
          )}
        </AnimatePresence>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-24">
        {/* Gradient Background */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="relative isolate px-6 pt-14 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
