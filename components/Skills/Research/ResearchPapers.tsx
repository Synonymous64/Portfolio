import React, { useState, useRef } from 'react';
import {
  FileText,
  Book,
  ExternalLink,
  Download,
  Users,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import researchPapers from './researchPapersData';

interface Paper {
  id: string;
  title: string;
  journal: string;
  year: string;
  authors: string[];
  abstract: string;
  link?: string;
  tags?: string[];
  citations?: number;
  downloadUrl?: string;
}

const ResearchPapers: React.FC = () => {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const paperRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const uniqueTags = Array.from(
    new Set(researchPapers.flatMap((paper) => paper.tags || [])),
  );

  const scrollToPaper = (paperId: string) => {
    if (expandedPaper !== paperId) {
      setExpandedPaper(paperId);
    }

    setTimeout(() => {
      paperRefs.current[paperId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 100);
  };

  const toggleExpand = (paperId: string, event: React.MouseEvent) => {
    event.preventDefault();

    if (expandedPaper === paperId) {
      setExpandedPaper(null);
    } else {
      setExpandedPaper(paperId);
    }
  };

  const filteredPapers = researchPapers.filter((paper) => {
    const matchesFilter =
      filter === 'all' || (paper.tags && paper.tags.includes(filter));
    const matchesSearch =
      searchTerm === '' ||
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
            Research Publications
          </h2>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search papers..."
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile-friendly category filters */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2">
            <div className="flex min-w-max gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Categories
              </button>

              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === tag
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="rounded-lg bg-gray-800 p-8 text-center">
            <p className="text-gray-400">
              No papers match your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPapers.map((paper: Paper) => (
              <motion.div
                key={paper.id}
                ref={(el: HTMLDivElement | null) => {
                  paperRefs.current[paper.id] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden rounded-xl border border-gray-700 bg-gray-800 shadow-lg transition-all duration-300 hover:border-purple-500/30 ${
                  expandedPaper === paper.id ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                <div
                  onClick={(e) => toggleExpand(paper.id, e)}
                  className="group relative cursor-pointer overflow-hidden p-5"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-gray-700/50 p-2 text-purple-400">
                      <FileText size={20} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-purple-300 md:text-xl">
                        {paper.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Book size={14} />
                          {paper.journal}
                        </span>

                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {paper.year}
                        </span>

                        {paper.citations && (
                          <span className="flex items-center gap-1 text-amber-400">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 6L2 12L9 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 12H14.5C16.5 12 22 11 22 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {paper.citations} citations
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <Users size={14} className="text-gray-500" />
                        <p className="text-sm text-gray-400">
                          {paper.authors.join(', ')}
                        </p>
                      </div>

                      {paper.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {paper.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-700/50 text-gray-400 transition-all group-hover:bg-purple-500/20 group-hover:text-purple-300">
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          expandedPaper === paper.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedPaper === paper.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-700 bg-gray-800/50 p-5 backdrop-blur-sm">
                        <div className="prose prose-sm prose-invert max-w-none">
                          <p className="leading-relaxed text-gray-300">
                            {paper.abstract}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {paper.link && (
                            <a
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                            >
                              <ExternalLink size={14} />
                              View full paper
                            </a>
                          )}

                          {paper.downloadUrl && (
                            <a
                              href={paper.downloadUrl}
                              download="Prajwal_Urkude_Academic_Paper.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                if (!paper.downloadUrl) {
                                  e.preventDefault();
                                  alert('CV will be available soon!');
                                }
                              }}
                            >
                              <button className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600">
                                <Download size={14} />
                                Download PDF
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}

        {filteredPapers.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Showing {filteredPapers.length} of {researchPapers.length} papers
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchPapers;
