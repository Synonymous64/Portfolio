'use client';

import React, { useState } from 'react';
import {
  Code,
  Database,
  Laptop,
  Server,
  Globe,
  PenTool,
  Layout,
  GitBranch,
  GitCommit,
  BookOpen,
  Rocket,
  Cloud,
  Terminal,
  Smartphone,
  Settings,
  Shield,
  Activity,
  Cpu,
  BarChart,
  FileText,
  Package,
  Wrench,
} from 'lucide-react';

const toolIcons = {
  // Frontend
  HTML: Globe,
  CSS: Layout,
  SCSS: PenTool,
  JavaScript: BookOpen,
  TypeScript: Code,
  'C++': Laptop,
  EJS: Server,
  React: Globe,
  Redux: Rocket,
  'Tailwind CSS': Layout,
  'Next.js': Code,
  'Vue.js': Globe,
  GSAP: PenTool,
  'Redux Toolkit': Rocket,
  'Ant Design': Layout,
  Bootstrap: Layout,
  'Material UI': PenTool,
  Shadcn: Code,
  'Next UI': Code,
  'Angular': Globe,
  'Svelte': Rocket,
  'Styled Components': PenTool,
  'Emotion': Layout,
  'Framer Motion': Activity,
  'Three.js': Globe,
  'D3.js': BarChart,
  'Webpack': Package,
  'Vite': Rocket,
  'GraphQL': Database,
  'Apollo Client': Rocket,
  
  // Backend
  NodeJs: Server,
  ExpressJs: Server,
  Sockets: Rocket,
  Appwrite: Database,
  Firebase: Rocket,
  Supabase: Database,
  Stripe: GitCommit,
  Prisma: Database,
  'Strapi CMS': Server,
  'NestJS': Server,
  'Django': Server,
  'Flask': Server,
  'Ruby on Rails': Server,
  'ASP.NET Core': Server,
  'Laravel': Server,
  'FastAPI': Rocket,
  'Spring Boot': Server,
  'REST API': Server,
  'Socket.io': Rocket,
  'gRPC': Server,
  'Kafka': Server,
  'RabbitMQ': Server,
  'OAuth': Shield,
  'JWT': Shield,
  'Passport.js': Shield,
  
  // Database
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  SQLite: Database,
  'Redis': Database,
  'DynamoDB': Database,
  'Cassandra': Database,
  'Elasticsearch': Database,
  'Neo4j': Database,
  'Firestore': Database,
  'SQL Server': Database,
  'Oracle': Database,
  'Sequelize': Database,
  'Mongoose': Database,
  'TypeORM': Database,
  
  // DevOps & Cloud
  Git: GitBranch,
  GitHub: GitBranch,
  'AWS': Cloud,
  'Azure': Cloud,
  'Google Cloud': Cloud,
  'Vercel': Cloud,
  'Netlify': Cloud,
  'Heroku': Cloud,
  'Docker': Cloud,
  'Kubernetes': Cloud,
  'Jenkins': Cloud,
  'GitHub Actions': GitBranch,
  'GitLab CI/CD': GitBranch,
  'Terraform': Cloud,
  'Nginx': Server,
  'Cloudflare': Cloud,
  'Linux': Terminal,
  'Bash': Terminal,
  
  // Testing & QA
  Jest: Code,
  Postman: Laptop,
  'Cypress': Code,
  'React Testing Library': Code,
  'Selenium': Code,
  'Mocha': Code,
  'Chai': Code,
  'Supertest': Code,
  'K6': Activity,
  'Storybook': BookOpen,
  
  // Mobile Development
  'React Native': Smartphone,
  'Flutter': Smartphone,
  'Swift': Smartphone,
  'Kotlin': Smartphone,
  'Expo': Smartphone,
  'Android Studio': Smartphone,
  'Xcode': Smartphone,
  'Ionic': Smartphone,
  
  // Performance & Monitoring
  'Lighthouse': Activity,
  'Google Analytics': BarChart,
  'Sentry': Activity,
  'LogRocket': Activity,
  'DataDog': Activity,
  'New Relic': Activity,
  'Prometheus': BarChart,
  'Grafana': BarChart,
  
  // AI & ML
  'TensorFlow.js': Cpu,
  'ml5.js': Cpu,
  'Hugging Face': Cpu,
  'OpenAI API': Cpu,
  
  // Project Management
  'Jira': FileText,
  'Trello': FileText,
  'Notion': FileText,
  'Figma': PenTool,
  'Adobe XD': PenTool,
  'Zeplin': PenTool,
};

const categoryIcons = [
  Laptop, // Frontend
  Server, // Backend
  Database, // Database Management
  Cloud, // DevOps & Cloud
  Code, // Testing & QA
  Smartphone, // Mobile Development
  Activity, // Performance & Monitoring
  Cpu, // AI & ML
  FileText, // Project Management
];

const categoryColors = [
  'from-blue-500 to-purple-600',
  'from-green-500 to-teal-600',
  'from-red-500 to-orange-600',
  'from-indigo-500 to-pink-600',
  'from-yellow-500 to-amber-600',
  'from-purple-500 to-violet-600',
  'from-blue-600 to-cyan-600',
  'from-emerald-500 to-green-600',
  'from-pink-500 to-rose-600',
];

const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TOOLS_DATA = [
    {
      category: 'Frontend Development',
      tools: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Redux',
        'Redux Toolkit',
        'Next.js',
        'Vue.js',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'Ant Design',
        'Shadcn',
        'Next UI',
        'Styled Components',
        'Framer Motion',
        'Three.js',
        'Webpack',
        'Vite',
        'GraphQL',
        'EJS',
        'C++',
      ],
    },
    {
      category: 'Backend Development',
      tools: [
        'NodeJs',
        'ExpressJs',
        'Spring Boot',
        'GraphQL',
        'REST API',
        'Prisma',
        'Appwrite',
        'Firebase',
        'Supabase',
        'Strapi CMS',
        'Stripe',
        'OAuth',
        'JWT',
      ],
    },
    {
      category: 'Database Management',
      tools: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQLite',
        'Redis',
        'Elasticsearch',
        'SQL Server',
        'Oracle',
        'Mongoose',
        'TypeORM',
      ],
    },
    {
      category: 'DevOps & Cloud',
      tools: [
        'Git',
        'GitHub',
        'Google Cloud',
        'Vercel',
        'Netlify',
        'Heroku',
        'Docker',
        'GitHub Actions',
        'GitLab CI/CD',
        'Terraform',
        'Cloudflare',
        'Linux',
        'Bash',
      ],
    },
    {
      category: 'Testing & QA',
      tools: [
        'React Testing Library',
        'Selenium',
        'Postman',
      ],
    },
    {
      category: 'Mobile Development',
      tools: [
        'React Native',
        'Expo',
        'Android Studio',
        'Vscode',
      ],
    },
    {
      category: 'Performance & Monitoring',
      tools: [
        'Google Analytics',
        'Sentry',
        'DataDog',
      ],
    },
    {
      category: 'AI & ML',
      tools: [
        'TensorFlow.js',
        'Hugging Face',
        'OpenAI API',
        'LangChain',
      ],
    },
    {
      category: 'Project Management',
      tools: [
        'Jira',
        'Trello',
        'Notion',
        'Figma',
        'Adobe XD',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-[1200px] space-y-12 bg-gradient-to-br">
      <div className="mb-12 text-center">
        <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent">
          My Technical Arsenal
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-300">
          A curated collection of tools and technologies I&apos;ve leveraged to
          craft innovative digital solutions
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Category Buttons */}
        <div className="space-y-4 md:w-1/4">
          {TOOLS_DATA.map((item, index) => {
            const IconComponent = categoryIcons[index] || Settings;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex w-full items-center gap-3 rounded-xl px-6 py-3 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${categoryColors[index % categoryColors.length]} text-white shadow-lg`
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                } `}
              >
                {IconComponent && (
                  <IconComponent
                    className={` ${
                      activeIndex === index
                        ? 'text-white'
                        : 'text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200'
                    } `}
                    size={24}
                  />
                )}
                <span className="font-medium">{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="md:w-3/4">
          {TOOLS_DATA.map(
            (item, index) =>
              activeIndex === index && (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900"
                >
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {item.tools.map((tool, toolIndex) => {
                      const IconComponent =
                        toolIcons[tool as keyof typeof toolIcons] || Settings;
                      return (
                        <li
                          key={toolIndex}
                          className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        >
                          {IconComponent && (
                            <IconComponent
                              className="text-neutral-600 dark:text-neutral-300"
                              size={24}
                            />
                          )}
                          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                            {tool}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;