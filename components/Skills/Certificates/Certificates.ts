// Certificates/index.ts
export interface Certificate {
  id?: string;
  title?: string;
  issuer?: string;
  description?: string;
  date: string;
  credentialUrl?: string;
  skills?: string[];
  // Optional: Add image or badge URL if you have certificate badges
  badgeUrl?: string;
}

// Centralized certificates data
const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Data Analytics Consultant Intern',
    issuer: 'Forage',
    date: 'June 21st, 2023',
    credentialUrl:
      'https://drive.google.com/file/d/115Z0krobee5JBY1d5qiubD4fCXqmw0xy/view',
    skills: [
      'Data Quality Assessment',
      'Data Insights',
      'Data Insights and Presentation',
    ],
  },
  {
    id: '2',
    title: 'Deloitte Technology Virtual Programme',
    issuer: 'Forage',
    date: 'June 22nd, 2023',
    credentialUrl:
      'https://drive.google.com/file/d/1AnP3U-cQM3GNIzcUFdAzMA1Di2-C1EUb/view',
    skills: [
      'Coding',
      'Data Analysis',
      'Development',
      'Cyber Security',
      'Forensic Technology',
    ],
    badgeUrl: '/images/badges/stanford-ml-badge.png',
  },
  {
    id: '3',
    title: 'Goldman Sachs Software Engineering Virtual Programmes',
    issuer: 'Goldman Sachs',
    date: 'June 26th, 2023',
    credentialUrl:
      'https://drive.google.com/file/d/115Z0krobee5JBY1d5qiubD4fCXqmw0xy/view',
    skills: ['Crack leaked password database'],
  },
  {
    id: '4',
    title: 'Introduction to Cloud Computing',
    issuer: 'Coursera',
    description: 'Advanced course on building scalable cloud.',
    date: 'August 9, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/X6GB7CYGRAWW',
  },
  {
    id: '5',
    title: 'Keys to a Happier Life',
    issuer: 'Alison',
    date: 'March 22nd, 2022',
    credentialUrl: 'http://alison.com/user/learner-verification/22563591/4334',
    skills: [
      'Goals Setting',
      'Meditation',
      'Positive Psychology',
      'Disciplined Mindset',
    ],
  },
  {
    id: '6',
    title: 'Crash Course on Python',
    issuer: 'Forage',
    date: 'June 22nd, 2023',
    credentialUrl:
      'https://coursera.org/share/8675d73c996e8a68c9a9aadab5798a93',
    skills: ['Coding', 'Data Analysis'],
  },
  {
    id: '7',
    title: 'TCS iON Career Edge - Young Professional',
    issuer: 'Forage',
    date: 'October 30th, 2021',
    credentialUrl:
      'https://drive.google.com/file/d/1HLCZfLESade4AGVD6ugzEcu4zyLTFgFa/view?usp=sharing',
    skills: [
      'Communication Skills',
      'Business Etiquette',
      'Overiview of Artificial Intelligence',
      'Accouting Fundamentals',
      'Business Communication',
    ],
  },
  {
    id: '8',
    title: 'Diploma in C, C++ and Java Programming',
    issuer: 'Atlanta Computer Institute',
    date: 'June 30th, 2018',
    credentialUrl:
      'https://drive.google.com/file/d/1tSiIutaYoerJ6phqPVKm3D0V6A_WIhbW/view?usp=sharing',
    skills: ['C', 'C++', 'Java'],
  },
  {
    id: '9',
    title: 'Application Development using Microservices and Serverless',
    issuer: 'Coursera',
    date: 'October 21th, 2022',
    credentialUrl:
      'https://coursera.org/share/09707f70a4618a082604742056950117',
    skills: ['Microservices', 'Serverless', 'Cloud Computing'],
  },
  {
    id: '10',
    title: 'Developing Applications with SQL, Databases and Django',
    issuer: 'IBM',
    date: 'October 8th, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/MY83UX4ZNNXZ',
    skills: ['SQL', 'Databases', 'Django'],
  },
  {
    id: '11',
    title: 'Developing Cloud Native Application',
    issuer: 'IBM',
    date: 'August 20th, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/R77V4W93QUPJ',
    skills: ['Cloud Native', 'Cloud Computing', 'Application Development'],
  },
  {
    id: '12',
    title: 'Developing cloud apps with Node.js and React',
    issuer: 'IBM',
    date: 'August 28th, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/P27EUMHUVLDN',
    skills: ['Node.js', 'React', 'Experess.js', 'MongoDB'],
  },
  {
    id: '13',
    title: 'Development of OS',
    issuer: 'Udemy',
    date: 'May 8th, 2022',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-dce4962e-164a-4070-b617-c80eb7ee87e0/',
    skills: ['Operating System', 'Development', 'C'],
  },
  {
    id: '14',
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM',
    date: 'August 12th, 2022',
    credentialUrl:
      'https://coursera.org/share/2e2d19f203cfa6c0a5e89a69c846460b',
    skills: ['Git', 'Github', 'Version Control', 'Collaboration'],
  },
  {
    id: '15',
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    issuer: 'IBM',
    date: 'September 2nd, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/N9W6Y8XA6FJ8',
    skills: ['Docker', 'Kubernetes', 'OpenShift', 'Containers'],
  },
  {
    id: '16',
    title: 'Introduction to web development using HTML, CSS, JavaScript',
    issuer: 'IBM',
    date: 'August 11th, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/225PF4EBM3G4',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '17',
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM',
    date: 'October 1st, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/U3M65THJMYBH',
    skills: ['Python', 'Flask'],
  },
  {
    id: '18',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'September 10th, 2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/certificate/YWQ3CPT2Y557',
    skills: ['Data Science', 'AI', 'Python', 'Data Analysis'],
  },
];

export default certificates;

// Optional: Add helper functions for filtering or sorting certificates
export const getCertificatesBySkill = (skill: string) =>
  certificates.filter((cert) =>
    cert.skills?.some((s) => s.toLowerCase().includes(skill.toLowerCase())),
  );

export const getLatestCertificates = (limit: number = 3) =>
  certificates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
