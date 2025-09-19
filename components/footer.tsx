'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaFolderOpen,    // <-- add this
  FaBriefcase,     // <-- add this
  FaBlog,
  FaEnvelope,
  FaImages,        // <-- add this
  FaMedium,
  FaDev,
  FaCodepen,
  FaStackOverflow,
} from 'react-icons/fa';
// Add this import for Hashnode icon from Simple Icons
import { SiHashnode } from 'react-icons/si';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Quick links data with icons
  const quickLinks = [
    { name: 'Home', href: '/#home', icon: FaHome },
    { name: 'About Us', href: '/#about', icon: FaInfoCircle },
    { name: 'Skills', href: '/#skills', icon: FaCogs },
    { name: 'Projects', href: '/#projects', icon: FaFolderOpen }, // changed
    { name: 'Experience', href: '/#experience', icon: FaBriefcase }, // changed
    { name: 'Blogs', href: '/posts', icon: FaBlog },
    { name: 'Gallery', href: '/gallery', icon: FaImages }, // changed
    { name: 'Contact', href: '/#contact', icon: FaEnvelope },
  ];

  // Services data with icons
  const others = [
    {
      name: 'Medium',
      href: 'https://medium.com/@prajwalurkude007', // Update with your Medium profile URL
      icon: FaMedium,
    },
    {
      name: 'Hashnode',
      href: 'https://hashnode.com/@Knewbyee', // Update with your Hashnode profile URL
      icon: SiHashnode, // Using SiHashnode instead of FaHashnode
    },
    {
      name: 'Dev.to',
      href: 'https://dev.to/synonymous64', // Update with your Dev.to profile URL
      icon: FaDev,
    },
    {
      name: 'CodePen',
      href: 'https://codepen.io/synonymous64', // Update with your CodePen profile URL
      icon: FaCodepen,
    },
    {
      name: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/17541891/prajwal-urkude', // Update with your Stack Overflow profile URL
      icon: FaStackOverflow,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info Section */}
          <motion.div variants={childVariants} className="space-y-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="bg-gray-900 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text px-2 py-2 text-2xl font-bold text-transparent">
                Prajwal Urkude
              </h3>
            </motion.div>
            <p className="leading-relaxed text-gray-300">
              Transforming ideas into digital realities. I create innovative
              solutions that drive business growth and exceptional user
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  Icon: FaTwitter,
                  href: 'https://x.com/PrajInMetaverse',
                  color: 'hover:bg-blue-400',
                },
                {
                  Icon: FaInstagram,
                  href: 'https://www.instagram.com/praj_in_metaverse',
                  color: 'hover:bg-pink-600',
                },
                {
                  Icon: FaLinkedinIn,
                  href: 'https://www.linkedin.com/in/prajwal-urkude-8a1b6818b',
                  color: 'hover:bg-blue-700',
                },
                {
                  Icon: FaGithub,
                  href: 'https://github.com/Synonymous64',
                  color: 'hover:bg-gray-700',
                },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/50 ${color} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section - Side by side on mobile, separate on desktop */}
          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-2">
            {/* Quick Links Section */}
            <motion.div variants={childVariants} className="space-y-6">
              <h3 className="relative text-xl font-semibold text-white">
                <span className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded bg-gradient-to-b from-pink-500 to-violet-500"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="text-sm sm:text-base">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Section */}
            <motion.div variants={childVariants} className="space-y-6">
              <h3 className="relative text-xl font-semibold text-white">
                <span className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded bg-gradient-to-b from-pink-500 to-violet-500"></span>
                Other Links
              </h3>
              <ul className="space-y-3">
                {others.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      href={service.href}
                      className="group flex items-center space-x-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <service.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="text-sm sm:text-base">{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-16 border-t border-white/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400">
            Built with ❤️ by{' '}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              <Link href="/#home">
                Prajwal Urkude
              </Link>
            </span>
          </p>
          <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;