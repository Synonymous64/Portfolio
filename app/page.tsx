import Hero from '@/components/Hero/Hero';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import { WavyBackgroundDemo } from '@/components/ui/WavyBackgroundDemo';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import TheEnd from '@/components/TheEnd';
import { Footer } from '@/components/footer';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import FeaturedBlogs from '@/components/Blog/FeaturedBlogs';
import FeaturedGallery from '@/components/Gallery/FeaturedGallery';
import Contact from '@/components/Contact/Contact';

export const dynamic = 'force-dynamic';
export const revalidate = 3600 * 12; // revalidate every 12 hour

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <Hero />
      <LogoCloud />
      <WavyBackgroundDemo />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <SecondQuote />
      <FeaturedBlogs />
      <FeaturedGallery />
      <Contact />
      <TheEnd />
      <Footer />
    </main>
  );
}
