import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  tags: string[];
  category: string[];
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "https://placehold.co/800x600/gray/white?text=E-Commerce+Project",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/ecommerce",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      category: ["web", "fullstack"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A mobile app for managing tasks and projects with real-time synchronization, notifications, and team collaboration features.",
      image: "https://placehold.co/800x600/gray/white?text=Task+Management+App",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/task-app",
      tags: ["Flutter", "Firebase", "Bloc"],
      category: ["mobile"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode, smooth animations, and contact form functionality.",
      image: "https://placehold.co/800x600/gray/white?text=Portfolio+Website",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/portfolio",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: ["web", "frontend"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current conditions and forecasts for multiple locations with interactive maps.",
      image: "https://placehold.co/800x600/gray/white?text=Weather+Dashboard",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/weather-app",
      tags: ["React", "OpenWeatherAPI", "Leaflet"],
      category: ["web", "frontend"],
    },
    {
      id: 5,
      title: "Social Media Backend",
      description: "A scalable backend system for a social media platform with user authentication, post management, and real-time messaging.",
      image: "https://placehold.co/800x600/gray/white?text=Social+Media+Backend",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/social-backend",
      tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
      category: ["backend"],
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "https://placehold.co/800x600/gray/white?text=Fitness+App",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/fitness-app",
      tags: ["React Native", "Redux", "Firebase"],
      category: ["mobile"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3 
            className="text-sm uppercase tracking-widest text-purple-400 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.h3>
          <motion.h2 
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text animate-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Check out some of my recent projects that demonstrate my skills and expertise.
          </motion.p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-purple-950/20">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="overflow-hidden rounded-xl border border-purple-500/10 bg-card shadow-sm hover:shadow-purple-500/20 transition-all duration-300"
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal bg-purple-500/10 text-purple-200 dark:text-purple-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="default" className="bg-purple-600 hover:bg-purple-700">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="border-purple-500/20 hover:border-purple-500/50">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;