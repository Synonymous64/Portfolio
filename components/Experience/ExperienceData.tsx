interface Achievement {
  id: number;
  title: string;
  icon: 'award' | 'research' | 'project' | 'certificate';
  gradient: {
    border: string;
    background: string;
    icon: string;
  };
}

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  achievements?: Achievement[]; // Add this line
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: Achievement[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'OpenSource Contribution and Campus Ambassador',
    company: 'GirlScript Summer of Code',
    period: 'April 2024 - Present',
    description: [
      'Implemented new functionalities for open-source projects, enhancing user experience and application performance.',
      'Improved my proficiency in Git, GitHub, and version control practices, ensuring clean and maintainable contributions.',
      'Organized and facilitated hands-on coding workshops, increasing participation in technical communities.',
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    // achievements: [
    //   {
    //     id: 1,
    //     title: 'Top Performer',
    //     icon: 'award',
    //     gradient: {
    //       border: 'border-violet-600/30',
    //       background: 'from-indigo-900/40 via-violet-900/40 to-fuchsia-900/40',
    //       icon: 'from-violet-600 to-fuchsia-600'
    //     }
    //   },
    //   {
    //     id: 2,
    //     title: 'Innovation Award',
    //     icon: 'certificate',
    //     gradient: {
    //       border: 'border-blue-600/30',
    //       background: 'from-blue-900/40 via-indigo-900/40 to-cyan-900/40',
    //       icon: 'from-blue-600 to-cyan-600'
    //     }
    //   }
    // ]
  },
  {
    id: 2,
    title: 'Java Developer',
    company: 'LetsGrowMore',
    period: 'August - October 2023',
    description: [
      "Throughout my work, I\'ve utilized various technologies, including Java programming language, Java Servlets Web Features, Applet, SQL Database, Java Swing, Java GUI, JFrame and Ajax.",
      'Participated in agile development processes',
      'Deployed solutions using CI/CD tools such as Vercel and Netlify, ensuring seamless user experiences and system scalability across platforms.',
    ],
    skills: ['Java', 'Vercel', 'Springboot', 'Ajax', 'Netlify'],
    // achievements: [  // Add achievements array
    //   {
    //     id: 1,
    //     title: 'Best Intern Award',
    //     icon: 'certificate',
    //     gradient: {
    //       border: 'border-blue-600/30',
    //       background: 'from-blue-900/40 via-indigo-900/40 to-cyan-900/40',
    //       icon: 'from-blue-600 to-cyan-600'
    //     }
    //   }
    // ]
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'Oasis Infobyte',
    period: 'July - August 2023',
    description: [
      'Developed and maintained client websites and web applications',
      'Collaborated with UX/UI designers to implement responsive designs',
      'Optimized applications for maximum performance and scalability',
    ],
    skills: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git'],
    // achievements: [  // Add achievements array
    //   {
    //     id: 1,
    //     title: 'Performance Optimization Champion',
    //     icon: 'award',
    //     gradient: {
    //       border: 'border-emerald-600/30',
    //       background: 'from-emerald-900/40 via-teal-900/40 to-cyan-900/40',
    //       icon: 'from-emerald-600 to-teal-600'
    //     }
    //   }
    // ]
  },
  {
    id: 4,
    title: 'Web and Salesforce Developer',
    company: 'IT-NetworkZ Infosystems',
    period: 'February 2022 - April 2022',
    description: [
      'Assisted in developing website components using HTML, CSS, and JavaScript',
      'Participated in agile development processes',
      'Worked with Respective mentors where I learned about the Customer-Relationship Model of Salesforce.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Salesforce'],
    // achievements: [  // Add achievements array
    //   {
    //     id: 1,
    //     title: 'Best Intern Award',
    //     icon: 'certificate',
    //     gradient: {
    //       border: 'border-blue-600/30',
    //       background: 'from-blue-900/40 via-indigo-900/40 to-cyan-900/40',
    //       icon: 'from-blue-600 to-cyan-600'
    //     }
    //   }
    // ]
  },
];

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'RPTU Kaiseslautern-Landau, Germany',
    period: '2025 - 2027 (Expected)',
    description: 'Specialization in Intelligent Systems and Software Engineering',
    achievements: [
      // {
      //   id: 1,
      //   title: "Dean's List",
      //   icon: 'award',
      //   gradient: {
      //     border: 'border-violet-600/30',
      //     background: 'from-indigo-900/40 via-violet-900/40 to-fuchsia-900/40',
      //     icon: 'from-violet-600 to-fuchsia-600',
      //   },
      // },
      // {
      //   id: 2,
      //   title: 'Research Award',
      //   icon: 'research',
      //   gradient: {
      //     border: 'border-blue-600/30',
      //     background: 'from-blue-900/40 via-indigo-900/40 to-cyan-900/40',
      //     icon: 'from-blue-600 to-cyan-600',
      //   },
      // },
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)',
    period: '2014 - 2018',
    description: 'Graduated with honors, participated in coding competitions',
    achievements: [
      {
        id: 1,
        title: 'Outstanding Academic Performance',
        icon: 'award',
        gradient: {
          border: 'border-emerald-600/30',
          background: 'from-emerald-900/40 via-teal-900/40 to-cyan-900/40',
          icon: 'from-emerald-600 to-teal-600',
        },
      },
      {
        id: 2,
        title: 'Technical and Career Development Head',
        icon: 'award',
        gradient: {
          border: 'border-pink-600/30',
          background: 'from-pink-900/40 via-rose-900/40 to-red-900/40',
          icon: 'from-pink-600 to-rose-600',
        },
      },
    ],
  },
];

// Icon mapping object for achievement icons
export const ACHIEVEMENT_ICONS = {
  award: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  research: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  project: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  ),
  certificate: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
};

export { experienceData, educationData };
