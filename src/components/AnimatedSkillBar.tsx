
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

interface AnimatedSkillBarProps {
  name: string;
  level: SkillLevel;
}

const skillLevelToIndex = (level: SkillLevel): number => {
  const levels: Record<SkillLevel, number> = {
    'Beginner': 1,
    'Intermediate': 2,
    'Advanced': 3,
    'Expert': 4
  };
  return levels[level];
};

const AnimatedSkillBar = ({ name, level }: AnimatedSkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const levelIndex = skillLevelToIndex(level);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}</span>
      </div>
      <div className="relative h-3 w-full bg-secondary/40 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full w-full rounded-full flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className={`h-full ${index < levelIndex ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-secondary/20'}`}
              style={{ width: '25%' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
        
        {levelIndex > 0 && (
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-pink-500/80"
            style={{ width: `${levelIndex * 25}%` }}
            initial={{ x: -200 }}
            animate={{ 
              x: isVisible ? 0 : -200,
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              x: { duration: 0.8 },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full relative">
              <motion.div
                className="absolute right-0 top-0 h-full w-4 bg-white/30"
                animate={{ 
                  x: [0, 10, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
