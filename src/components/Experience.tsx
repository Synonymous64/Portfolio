import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
};

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      description: [
        "Lead the development of a high-traffic e-commerce platform, resulting in a 35% increase in conversion rates.",
        "Implemented modern authentication systems and payment gateways, enhancing security and user experience.",
        "Mentored junior developers and conducted code reviews to ensure code quality and best practices.",
        "Architected and deployed microservices using Node.js and Docker, improving system scalability.",
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "MobileSolutions Co.",
      location: "Austin, TX",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed cross-platform mobile applications using Flutter and React Native for iOS and Android.",
        "Created RESTful APIs for mobile clients using Express.js and MongoDB.",
        "Implemented real-time features using WebSockets and Firebase.",
        "Optimized app performance, reducing load times by 40% and memory usage by 25%.",
      ],
      skills: [
        "Flutter",
        "React Native",
        "Firebase",
        "REST APIs",
        "Express.js",
      ],
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Digital Creations",
      location: "Remote",
      period: "Jul 2016 - Feb 2018",
      description: [
        "Built responsive websites for various clients using modern web technologies.",
        "Implemented SEO best practices, improving client site rankings on search engines.",
        "Collaborated with designers to transform mockups into functional websites.",
        "Maintained and updated existing client websites, ensuring compatibility with modern browsers.",
      ],
      skills: ["HTML/CSS", "JavaScript", "WordPress", "SEO", "UI/UX"],
    },
  ];

  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      location: "San Francisco, CA",
      period: "2014 - 2016",
      description:
        "Specialized in Web Technologies and Software Engineering with a focus on distributed systems and modern web frameworks.",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      location: "Austin, TX",
      period: "2010 - 2014",
      description:
        "Graduated with honors. Completed a capstone project building a full-stack web application for student resource management.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-background via-purple-900/5 to-background"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3
            className="text-sm uppercase tracking-widest text-muted-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h3>
          <motion.h2
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-[3fr_1fr] gap-12"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.h3
              className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h3>
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={item}>
                <Card className="card-hover border border-purple-500/10 bg-background/30 backdrop-blur-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 z-0"
                    animate={{
                      background: [
                        "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))",
                        "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.1), transparent, rgba(var(--primary-rgb), 0.05))",
                        "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.1))",
                        "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative z-10">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div>{exp.location}</div>
                          <div>{exp.period}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {exp.description.map((item, index) => (
                          <li key={index} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div key={edu.id} variants={item}>
                  <Card className="card-hover border border-purple-500/10 bg-background/30 backdrop-blur-lg relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 z-0"
                      animate={{
                        background: [
                          "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))",
                          "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.1), transparent, rgba(var(--primary-rgb), 0.05))",
                          "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.1))",
                          "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative z-10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="font-medium">
                          {edu.institution}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-muted-foreground mb-2">
                          <div>{edu.location}</div>
                          <div>{edu.period}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
