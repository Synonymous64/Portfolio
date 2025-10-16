'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsDiscord } from 'react-icons/bs';
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  Clock,
  Mail,
  Phone,
  Send,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import NewsletterForm from '../NewsletterForm';

type ContactProps = {
  searchParams?: {
    service?: string;
  };
};

export default function Contact({ searchParams = {} }: ContactProps) {
  const { service = '' } = searchParams;

  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/prajwal-urkude-8a1b6818b',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
      icon: <BsLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Synonymous64',
      bgColor: 'bg-gradient-to-r from-gray-800 to-gray-900',
      icon: <BsGithub className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/+919765980320',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
      icon: <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/praj_in_metaverse',
      bgColor: 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600',
      icon: <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      name: 'Discord',
      link: 'https://discord.com/users/1013763328889344110',
      bgColor: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      icon: <BsDiscord className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      name: 'Telegram',
      link: 'https://t.me/Ionictrend',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-500',
      icon: <FaTelegramPlane className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
  ];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const contactRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim() || !userMessage.trim()) {
      setErrorMessage('Please fill out all required fields.');
      setSuccessMessage(null);
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/contact-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccessMessage(
        'Message sent successfully! I will get back to you soon.',
      );
      setFirstName('');
      setLastName('');
      setEmail('');
      setUserMessage('');
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (service && userMessage.length === 0) {
      setUserMessage(service);
      setErrorMessage('Please fill out the required fields (Name and Email)');
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [service]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br px-4 py-10 sm:py-16 lg:px-8"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full blur-3xl"></div>
        <div className="rounded-ful absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/3 h-1/3 w-1/3 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center lg:mb-16"
        >
          <h1 className="text-gradient mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-base text-gray-200 sm:text-lg">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="mb-12 lg:mb-20">
          <h2 className="mb-4 text-center text-xl font-medium text-white sm:text-2xl">
            Connect With Me
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-full ${social.bgColor} px-3 py-2 text-sm text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl sm:gap-3 sm:px-5 sm:py-3 sm:text-base`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 3,
                    duration: 0.5,
                  }}
                >
                  {social.icon}
                </motion.span>
                <span className="hidden sm:inline">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Contact Section */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-lg">
          <div className="grid gap-8 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-gray-900/90 p-4 md:grid-cols-5 lg:gap-12 lg:p-10">
            {/* Contact Info - Stacks on mobile, side by side on desktop */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 md:col-span-2 md:space-y-6"
            >
              <div>
                <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                  Contact Info
                </h2>
                <p className="mb-6 text-sm text-gray-300 sm:text-base">
                  Let&apos;s discuss your project and bring your ideas to life. I&apos;m
                  here to help you create something amazing.
                </p>
              </div>

              {/* Contact info cards - row on mobile, column on desktop */}
              <div className="grid gap-4 md:grid-cols-1 lg:gap-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-600/20 p-2 sm:p-3">
                      <Phone className="h-4 w-4 text-purple-400 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        Phone
                      </h3>
                      <a
                        href="tel:+919765980320"
                        className="text-xs text-gray-300 transition-colors hover:text-purple-400 sm:text-sm"
                      >
                        +91 976 598 0320
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-600/20 p-2 sm:p-3">
                      <Mail className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        Email
                      </h3>
                      <a
                        href="mailto:prajwalurkude007@gmail.com"
                        className="text-xs text-gray-300 transition-colors hover:text-blue-400 sm:text-sm"
                      >
                        prajwalurkude007@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-600/20 p-2 sm:p-3">
                      <HiOutlineLocationMarker className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        Location
                      </h3>
                      <p className="text-xs text-gray-300 sm:text-sm">
                        Kaiserslautern, Germany
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-600/20 p-2 sm:p-3">
                      <Clock className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        Working Hours
                      </h3>
                      <p className="text-xs text-gray-300 sm:text-sm">
                        Mon-Sat: 12am - 12pm
                        <br />
                        Sunday: 11am - 5pm
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={formContainerVariants}
              className="relative rounded-xl bg-white/5 p-4 shadow-lg backdrop-blur-sm md:col-span-3 md:p-6"
              ref={contactRef}
            >
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-xs font-medium text-gray-300 sm:text-sm"
                    >
                      First Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-purple-500 focus:outline-none sm:px-4 sm:py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-xs font-medium text-gray-300 sm:text-sm"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-purple-500 focus:outline-none sm:px-4 sm:py-3"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-medium text-gray-300 sm:text-sm"
                  >
                    Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-purple-500 focus:outline-none sm:px-4 sm:py-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-medium text-gray-300 sm:text-sm"
                  >
                    Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-purple-500 focus:outline-none sm:px-4 sm:py-3"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>Average response time: 1-2 hours</span>
                </div>

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-900/30 px-3 py-2 text-xs text-red-200 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <AlertCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                    {errorMessage}
                  </motion.div>
                )}

                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-green-900/30 px-3 py-2 text-xs text-green-200 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <CheckCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                    {successMessage}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70 sm:mt-4 sm:px-6 sm:py-3"
                >
                  {loading ? (
                    <>
                      <Send className="h-4 w-4 animate-spin sm:h-5 sm:w-5" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mt-12 lg:mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                question: 'What services do you offer?',
                answer:
                  'I specialize in web development, mobile app development, UI/UX design, and full-stack solutions for businesses of all sizes.',
              },
              {
                question: 'How long does it take to complete a project?',
                answer:
                  'Project timelines vary based on complexity and requirements. A simple website might take 1-2 weeks, while complex applications can take several months.',
              },
              {
                question: 'Do you offer maintenance after project completion?',
                answer:
                  'Yes, I offer ongoing maintenance and support services to ensure your project continues to run smoothly after launch.',
              },
              {
                question: 'What is your pricing structure?',
                answer:
                  'I offer both fixed-price and hourly rate options depending on your project needs. Contact me for a custom quote.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-purple-500/30 sm:p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-200 sm:text-2xl">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed sm:text-base">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg"
        >
          <NewsletterForm />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #c084fc, #93c5fd);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
