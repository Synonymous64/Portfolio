import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-purple-950/5 dark:bg-purple-900/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background"></div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3
            className="text-sm uppercase tracking-widest text-purple-400 mb-3 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>
          <motion.h2
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text font-display animate-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Background and Journey
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative group overflow-hidden rounded-lg">
              {/* Ambient gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-indigo-500/10 mix-blend-overlay"></div>
              
              {/* Sparkling border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur-lg opacity-40 group-hover:opacity-75 animate-gradient-xy transition-opacity duration-500"></div>
              
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden border border-purple-500/10">
                <img
                  src="/praj.png"
                  alt="About me"
                  className="w-full h-auto relative rounded-lg transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Bottom gradient fade */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent h-1/4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-6">
            <motion.p
              className="text-lg leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm a passionate{" "}
              <span className="font-semibold bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text">
                Full Stack Developer
              </span>{" "}
              with expertise in creating responsive and user-friendly web and
              mobile applications. With a strong foundation in modern
              technologies, I bring ideas to life through clean, efficient, and
              maintainable code.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With several years of experience in the industry, I've had the
              privilege of working with diverse teams and clients, from startups
              to established businesses. My goal is to deliver{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                exceptional digital experiences
              </span>{" "}
              that not only meet but exceed client expectations.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Outside of coding, I enjoy staying updated with the latest tech
              trends, contributing to{" "}
              <span className="font-semibold bg-gradient-to-r from-green-500 to-green-300 text-transparent bg-clip-text">
                open-source projects
              </span>
              , and sharing my knowledge through technical articles and
              mentorship.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                className="group relative overflow-hidden font-display bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/50 via-red-500/50 to-green-500/50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
