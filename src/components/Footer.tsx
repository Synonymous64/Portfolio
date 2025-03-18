import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-gradient-to-b from-background via-purple-900/5 to-background border-t border-purple-500/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-xl font-bold text-gradient mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Your Name
            </h2>
            <p className="text-muted-foreground mb-4">
              A passionate Full Stack Developer creating exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Stay in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <Button variant="default" asChild>
              <a href="mailto:your.email@example.com">Get in Touch</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;