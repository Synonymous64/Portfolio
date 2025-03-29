// Update your researchPapers data structure to include these new fields
export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: string;
  authors: string[];
  abstract: string;
  link?: string;
  tags?: string[]; // New field for categorization
  citations?: number; // New field for citation count
  downloadUrl?: string; // New field for PDF download link
}

// Example data format (to be placed in ../data/researchPapers.ts)
const researchPapersData: ResearchPaper[] = [
  {
    id: 'paper1',
    title:
      'Multi-domain Content Generation Using Advanced Machine Learning Techniques',
    journal:
      'International Conference on Information and Communication Technology for Intelligent Systems (ICTIS 2024) Spring Nature Journal',
    year: '2024',
    authors: [
      'Prajwal Urkude',
      'Divya Charde',
      'Shweta Pidurkar',
      'Manjiri Dhavtode',
      'Mrudula Gudadhe',
    ],
    abstract:
      'This research paper investigates the integration of Artificial Intelligence in modern web development.It compares the efficiency and effectiveness of various AI-based frameworks and tools used by developers today. The paper focuses on the challenges, opportunities, and impact on development speed and project scalability',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-6675-8_45',
    tags: [
      'Intelligent Systems',
      'Information Technologies',
      'Internet of Things',
      'Information Communication Technology',
      'ICTIS 2024 Proceedings',
    ],
    citations: 229,
    downloadUrl: '/portfolio-main/public/Prajwal_Urkude_Academic_Paper.pdf',
  },
  // {
  //   id: 'paper2',
  //   title: 'Quantum Computing Applications in Bioinformatics',
  //   journal: 'Nature Quantum Information',
  //   year: '2022',
  //   authors: ['Michael Zhang', 'Sarah Wilson', 'David Patel'],
  //   abstract:
  //     'Quantum computing offers potential solutions to computational challenges in bioinformatics. This study demonstrates quantum algorithms for protein folding simulations that outperform classical approaches by orders of magnitude, enabling more accurate structure predictions for complex proteins.',
  //   link: 'https://example.com/paper2',
  //   tags: ['Quantum Computing', 'Bioinformatics'],
  //   citations: 72,
  //   downloadUrl: '/papers/quantum-computing-bioinformatics.pdf',
  // },
  // Add more papers as needed
];

export default researchPapersData;
