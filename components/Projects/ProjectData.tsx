import { FiCode, FiSmartphone, FiServer, FiDatabase } from 'react-icons/fi';

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'blockchain' | 'ai' | 'devops';
  github?: string;
  external?: string;
  year: string;
  featured?: boolean;
  archived?: boolean;
  image?: string;
}

// Category icons mapping
export const CATEGORY_ICONS = {
  web: <FiCode className="text-blue-400" />,
  mobile: <FiSmartphone className="text-green-400" />,
  blockchain: <FiDatabase className="text-purple-400" />,
  ai: <FiServer className="text-red-400" />,
  devops: <FiServer className="text-yellow-400" />,
};

// Sample project data
const PROJECTS: Project[] = [
  // Featured Projects (3)
  {
    id: 'project1',
    title: 'E-Store',
    description:
      'Step into a realm of digital shopping like never before, where innovation dances with elegance, and every click is a gateway to a world of possibilities. Behold LuxeCart, the avant-garde e-commerce app that redefines the very essence of online shopping, meticulously crafted with the brilliance of Next.js.',
    technologies: [
      'Next.JS,',
      'React',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
      'NextAuth',
      'ShadCN UI',
      'Redux Toolkit',
    ],
    category: 'web',
    github: 'https://github.com/Synonymous64/e-commerce-store',
    external: 'https://e-commerce-store-kohl.vercel.app/',
    year: '2024',
    featured: true,
    image: '/projects/project1.avif',
  },
  {
    id: 'project2',
    title: 'Bingify',
    description:
      'Highly Interactive Media Web applications that can save time for up to 60% of users for downloading trending videos, posters, and trailers and viewing information about a particular movie or series. It provides a highly stunning and visually appealing Interface with dark mode, where users can create account.',
    technologies: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'TMDB API',
    ],
    category: 'web',
    github: 'https://github.com/Synonymous64/mern-movie-app-2023',
    external: 'https://bingjoy-movies.vercel.app/movie',
    year: '2024',
    featured: true,
    image: '/projects/project2.avif',
  },
  {
    id: 'project3',
    title: 'Blog Site',
    description:
      "Artistic and Stunning UI where users can write their thoughts and ideas and share them with their community. Diverse Tags and Topics are available as per the writer's preferences and can be manually added. Provides an effective and reliable way to communicate and express themselves.",
    technologies: ['React', 'Gatsby', 'Sanity', 'MongoDB', 'Utterance'],
    category: 'web',
    github: 'https://github.com/Synonymous64/project-blog',
    external: 'https://praj-blogs.vercel.app/',
    year: '2024',
    featured: true,
    image: '/projects/project3.avif',
  },
  {
    id: 'project4',
    title: 'Block Chat',
    description:
      'Real Time Decentralised Messaging App where users interact with one another through a seemless secure line. Developed using Solidity for smart contract, NextJs for frontend and Ethereum Virtual Network as Hardhat.',
    technologies: ['React', 'NextJs', 'Hardhat', 'MongoDB', 'Solidity'],
    category: 'blockchain',
    github: 'https://github.com/Synonymous64/Blockchain-messaging-app',
    external: 'https://blockchain-messaging-app-olive.vercel.app/',
    year: '2023',
    featured: true,
    image: '/projects/project4.avif',
  },
  {
    id: 'project5',
    title: 'Summarizer tool',
    description:
      'Built an app to save time and read more efficiently, Try out our summarizer tool! Our software uses natural language processing to extract the most important information from long texts and documents, giving you a concise summary',
    technologies: ['ReactJS', 'LLMs', 'Tailwind CSS'],
    category: 'ai',
    github: 'https://github.com/Synonymous64/ariicle-summarizer',
    external: 'https://illustrious-dasik-c59445.netlify.app/',
    year: '2023',
    featured: true,
    image: '/projects/project5.avif',
  },

  // Other Projects (3)
  {
    id: 'project6',
    title: 'Expressive AI',
    description:
      'Think of it as having digital friends with distinct personalities. These characters not only add an extra layer of interest to your interactions but also provide opinions and solutions, making your creative journey more dynamic. Our focus includes pushing the boundaries of smart creativity, designing a user-friendly space, ensuring the security of your digital world, utilizing vast datasets for rich content, and introducing virtual companions through Expressive AI.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'ShadCN UI ',
      'Replicate API',
      'OpenAI API',
      'Prisma',
      'Supabase',
      'Clerk',
      'Crisp',
      'Cloudinary',
      'Vercel',
    ],
    category: 'ai',
    github:
      'https://github.com/Synonymous64/Major-Project/tree/master/expressive-ai',
    year: '2024',
  },
  {
    id: 'project7',
    title: 'Multidomain Content Creation',
    description:
      'Our project, "Multidomain Content Creation," delves into the fascinating realm of smart machines, aiming to amplify human creativity. Imagine a world where technology effortlessly crafts music, videos, code, and images while engaging in meaningful conversations. This project marks not just a step forward but a giant leap into a new era of creative possibilities.',
    technologies: [
      'Next.js',
      'Talwind CSS',
      'ShadCN UI',
      'Replicate API',
      'Open AI API',
      'Prisma',
      'PlanetScale',
      'Clerk',
      'Crisp',
      'Cloudinary',
    ],
    category: 'ai',
    github:
      'https://github.com/Synonymous64/Major-Project/tree/master/next13-ai-saas-master',
    external: 'https://generative-ai-steel.vercel.app',
    year: '2024',
  },

  {
    id: 'project8',
    title: 'Metaverse Product Website',
    description:
      'Proficiently Displaying 3D movable models which can assist users to use their creative skills to design T-Shirts, Integrated with Dall-E API helps in smooth designing Protocols, a powerful tool for artists where they can download their 3D-designed T-Shirt.',
    technologies: ['ReactJS', 'ExpressJS', 'Node.js', 'OpenAI API'],
    category: 'ai',
    github: 'https://github.com/Synonymous64/Product-Website-3D',
    external: 'https://metverse-product-website.vercel.app/',
    year: '2022',
  },
  {
    id: 'project9',
    title: 'Portfolio Version 1',
    description:
      'Showcasing my skills and projects with a stunning portfolio that demonstrates your creativity, professionalism, and expertise.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'web',
    github:
      'https://github.com/Synonymous64/my-portfolio-react-tailwind/tree/master/myportfolio',
    external: 'https://my-portfolio-react-tailwind.vercel.app/',
    year: '2023',
  },
  {
    id: 'project10',
    title: 'Be-Social: A Social Media App',
    description:
      'A stunning and responsive social media app that predominantly uses react-advance-chat-engine.',
    technologies: ['ReactJS', 'Tailwind CSS', 'NodeJS'],
    category: 'web',
    github: 'https://github.com/Synonymous64/messaging-app/tree/master/client',
    external: 'https://praj-social-app.netlify.app/',
    year: '2022',
  },
  {
    id: 'projec11',
    title: 'ProNef NFT Marketplace',
    description:
      'Experience a smooth UI of ProNef NFT Marketplace. Fluently Featured, embraces you with the growing familiar communty made with 💜',
    technologies: ['ReactJT', 'Tailwind CSS', 'Etherium', 'Metamask'],
    category: 'blockchain',
    github: 'https://github.com/Synonymous64/landing-page',
    external: 'https://royal-recipe-4467.on.fleek.co/',
    year: '2022',
  },

  // Archived Projects (6)
  {
    id: 'project12',
    title: 'Notes and Scheduling Application with google Oauth',
    description:
      'Building a custom multisite compatible notes app to keep track of daily schedule with Google Oauth.',
    technologies: ['EJs', 'Javascript', 'CSS'],
    category: 'web',
    github: 'https://github.com/Synonymous64/Notes-App',
    year: '2023',
    archived: true,
  },
  {
    id: 'project13',
    title: 'NFT App - buy/sell',
    description:
      'Create, buy, and sell unique digital assets on the blockchain with your nft app. This app lets you use react-native to build a cross-platform mobile application that connects to various nft platforms and markets. You can also view, share, and trade your nfts with other users.',
    technologies: ['React Native', 'Tailwind CSS', 'Expo'],
    category: 'mobile',
    github: 'https://github.com/Synonymous64/react-native-nft-market',
    external:
      'https://expo.dev/@synonymous7/react-native-project?serviceType=classic&distribution=expo-go',
    year: '2022',
    archived: true,
  },
  {
    id: 'project14',
    title: 'Kanban Web App',
    description:
      'A simple Kanban board that lets you manage your tasks and provides an immersive way of keeping you more productive',
    technologies: ['ReactJS', 'Tailwind CSS'],
    category: 'web',
    github:
      'https://github.com/Synonymous64/Kanban-app/tree/master/kanban-task-management-app',
    year: '2022',
    archived: true,
  },
  {
    id: 'project15',
    title: 'Image Generation Using Advance Machine Learning Techniques',
    description:
      'In this project, you will use deep learning, generative adversarial networks, style transfer, and image synthesis to generate realistic or artistic images. You will also create your own graphical artworks using an AI model that can respond to your prompts.',
    technologies: ['ReactJS', 'OpenAI', 'Tailwind CSS'],
    category: 'ai',
    github: 'https://github.com/Synonymous64/ai-image-generator-mern',
    external: 'https://ai-image-generator-mern.vercel.app/',
    year: '2022',
    archived: true,
  },
  {
    id: 'project16',
    title: 'Wallpaper App',
    description:
      'A simple and brillant wallpaper app, that let you store, upload, remove, download and set wallpapers on your phone as well as desktop.',
    technologies: ['React Native', 'Santiy,io', 'Tailwind CSS', 'Expo'],
    category: 'mobile',
    github: 'https://github.com/Synonymous64/wallpaper-app',
    year: '2022',
    archived: true,
  },
  {
    id: 'project17',
    title: 'Funky Web Scraper',
    description:
      'Webscraper that extract different categories of products from amazon.',
    technologies: ['ReactJS', 'Typescript'],
    category: 'blockchain',
    github:
      'https://github.com/Synonymous64/funky-web-scraper/tree/master/metadata-amazon-scraper',
    year: '2022',
    archived: true,
  },
  {
    id: 'project18',
    title: 'Dribble Clone',
    description:
      "This app lets you use next.js to build a fast and dynamic web application that mimics the features and functionalities of dribble, a popular online platform for designers. You can also upload, share, and comment on your own or others' design projects",
    technologies: ['ReactJS'],
    category: 'web',
    github: 'https://github.com/Synonymous64/dribble-clone',
    year: '2020',
    archived: true,
  },
];

export default PROJECTS;
