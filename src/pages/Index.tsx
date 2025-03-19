import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillsSlider from "@/components/ui/skillsSlider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="flex items-center flex-col px-4 lg:px-10 xl:px-10 my-10 mb-5 w-full">
          <SkillsSlider />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
