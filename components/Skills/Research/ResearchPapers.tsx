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
    <div className="w-full py-8 px-4 md:px-8 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col mb-8 gap-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Research Publications
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search papers..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Mobile-friendly category filters */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${filter === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              All Categories
            </button>
            
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${filter === tag 
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
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <p className="text-gray-400">No papers match your search criteria.</p>
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
              className={`bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 shadow-lg border border-gray-700 hover:border-purple-500/30 ${
                expandedPaper === paper.id ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              <div
                onClick={(e) => toggleExpand(paper.id, e)}
                className="p-5 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-gray-700/50 text-purple-400 mt-1">
                    <FileText size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg md:text-xl text-white group-hover:text-purple-300 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-400 gap-3 mt-2">
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
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L2 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 12H14.5C16.5 12 22 11 22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {paper.citations} citations
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3">
                      <Users size={14} className="text-gray-500" />
                      <p className="text-sm text-gray-400">
                        {paper.authors.join(", ")}
                      </p>
                    </div>
                    
                    {paper.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {paper.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="shrink-0 ml-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-700/50 text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
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
                    <div className="p-5 border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                      <div className="prose prose-sm prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mt-6">
                        {paper.link && (
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors gap-2"
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
