
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Code, Zap } from "lucide-react";
import ThreeScene from './ThreeScene';
import { GlowingStarsBackground } from './ui/aceternity/GlowingStarsBackground';

type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: React.ReactNode;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: "Expert", icon: <Code className="h-5 w-5" /> },
        { name: "Next.js", level: "Advanced", icon: <Zap className="h-5 w-5" /> },
        { name: "TypeScript", level: "Advanced", icon: <Code className="h-5 w-5" /> },
        { name: "HTML/CSS", level: "Expert", icon: <Code className="h-5 w-5" /> },
        { name: "Tailwind CSS", level: "Expert", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced", icon: <Zap className="h-5 w-5" /> },
        { name: "Express", level: "Advanced", icon: <Code className="h-5 w-5" /> },
        { name: "Python", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
        { name: "Django", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
        { name: "GraphQL", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      name: "Mobile",
      skills: [
        { name: "Flutter", level: "Advanced", icon: <Zap className="h-5 w-5" /> },
        { name: "React Native", level: "Advanced", icon: <Zap className="h-5 w-5" /> },
        { name: "Swift", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
        { name: "Kotlin", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      name: "Other",
      skills: [
        { name: "Git/GitHub", level: "Expert", icon: <Zap className="h-5 w-5" /> },
        { name: "Docker", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
        { name: "CI/CD", level: "Advanced", icon: <Zap className="h-5 w-5" /> },
        { name: "AWS", level: "Intermediate", icon: <Code className="h-5 w-5" /> },
        { name: "Firebase", level: "Advanced", icon: <Code className="h-5 w-5" /> },
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
    "Client Relations",
  ];

  const levelToStars = (level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert') => {
    const levels = {
      'Beginner': 1,
      'Intermediate': 2,
      'Advanced': 3,
      'Expert': 4
    };
    return levels[level];
  };

  const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: [0.8, 1.1, 0.8], 
          opacity: [0.5, 1, 0.5],
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut"
        }}
      >
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      </motion.div>
    ));
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden container mx-auto px-4">
      <GlowingStarsBackground quantity={70} className="opacity-30" />
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ThreeScene className="w-full h-full" />
      </div>
      
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3 
            className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h3>
          <motion.h2 
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-lg text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here's an overview of my technical skills and proficiencies
            across various technologies and platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name} 
              className="card-hover rounded-xl p-6 border bg-background/30 backdrop-blur-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 z-0"
                animate={{ 
                  background: [
                    'linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))', 
                    'linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.1), transparent, rgba(var(--primary-rgb), 0.05))',
                    'linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.1))',
                    'linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.05), transparent, rgba(var(--primary-rgb), 0.05))'
                  ] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text font-display">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <motion.div 
                        className="bg-background/40 backdrop-blur-md p-4 rounded-lg border border-primary/10 relative overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className="p-2 rounded-full bg-primary/10"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon || <Sparkles className="h-5 w-5 text-primary" />}
                            </motion.div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          
                          <div className="flex space-x-1">
                            {generateStars(levelToStars(skill.level))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text font-display">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="relative p-5 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10"
                  animate={{ 
                    background: [
                      'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.1))', 
                      'linear-gradient(to bottom right, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05))',
                      'linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1))',
                      'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.15))',
                      'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.1))'
                    ] 
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center h-full text-center">
                  <motion.div 
                    className="mb-2 p-2 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span className="font-medium font-body">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
