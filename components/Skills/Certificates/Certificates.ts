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
    id: 'Forage-KPMG',
    title: 'Data Analytics Consultant Intern',
    issuer: 'Forage',
    date: 'June 2023',
    credentialUrl:
      'https://drive.google.com/file/d/115Z0krobee5JBY1d5qiubD4fCXqmw0xy/view',
    skills: [
      'Data Quality Assessment',
      'Data Insights',
      'Data Insights and Presentation',
    ],
  },
  {
    id: 'Forage-Deloitte',
    title: 'Deloitte Technology Virtual Programme',
    issuer: 'Forage',
    date: 'June 2023',
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
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description:
      'Foundational certification demonstrating cloud expertise and AWS knowledge.',
    date: 'September 2023',
    credentialUrl: 'https://www.credly.com/verify/example-credential',
    skills: [
      'Cloud Computing',
      'AWS',
      'Cloud Infrastructure',
      'Cloud Security',
    ],
    badgeUrl: '/images/badges/aws-cloud-practitioner-badge.png',
  },
  {
    id: 'react-typescript',
    title: 'React and TypeScript Masterclass',
    issuer: 'Udemy',
    description:
      'Advanced course on building scalable applications with React and TypeScript.',
    date: 'November 2023',
    credentialUrl: 'https://www.udemy.com/certificate/example-credential',
    skills: [
      'React',
      'TypeScript',
      'State Management',
      'Performance Optimization',
    ],
    badgeUrl: '/images/badges/react-typescript-badge.png',
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
