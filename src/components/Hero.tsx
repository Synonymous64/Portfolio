import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import { ShimmerButton } from "./ui/aceternity/ShimmerButton";
import { GlowingStarsBackground } from "./ui/aceternity/GlowingStarsBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import CodeScene from "./ui/CodeScene";
import GradientButton from "./ui/gradientbutton";
import ProjectButton from "./ui/projectbutton";
import Tools from "./ui/tools";
import Skills from "./ui/skillsSlider";

const Hero = () => {
  const socialLinks = [
    { icon: faGithub, url: "https://github.com/Synonymous64" },
    { icon: faTwitter, url: "https://x.com/PrajInMetaverse" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/prajwal-urkude-8a1b6818b",
    },
    { icon: faInstagram, url: "https://www.instagram.com/praj_in_metaverse" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 container mx-auto px-4"
    >
      <GlowingStarsBackground quantity={100} />

      <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.span
            className="text-primary font-semibold mb-2 block font-display text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
            <span className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-display relative sparkle-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Prajwal Urkude
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text animate-shimmer bg-[length:200%_auto]">
              Full Stack Developer
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build accessible, responsive, and performant web and app
            applications using modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#contact" className="font-display">
              <GradientButton text={"Get in Touch"} />
            </a>

            <a href="#projects">
              <ProjectButton text={"View Projects"} />
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-colors"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 w-full h-64 md:h-[500px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl transform -rotate-1 animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-3xl transform rotate-1 animate-pulse-glow animation-delay-1000"></div>
          <div className="absolute inset-0 backdrop-blur-[2px] rounded-3xl"></div>
          <CodeScene />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;