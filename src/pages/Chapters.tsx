import React from 'react';
import { motion } from 'motion/react';
import { chapters } from '../data/gita';
import { Book, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Chapters = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f2] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-950 mb-6">
              The 18 <span className="text-amber-600">Chapters</span>
            </h1>
            <p className="text-lg text-amber-900/70 max-w-2xl mx-auto">
              Journey through the 700 verses of spiritual wisdom. Each chapter represents a different aspect of yoga and the path to self-realization.
            </p>
          </motion.div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/chapter/${chapter.id}`} className="bg-white rounded-xl p-6 shadow-lg shadow-amber-900/5 border border-amber-100 hover:shadow-xl hover:border-amber-300 transition-all group flex flex-col h-full cursor-pointer relative overflow-hidden block">
                {/* Subtle background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4 border-b border-amber-100 pb-4 relative z-10">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold font-serif shadow-inner">
                    {chapter.chapter_number}
                  </span>
                  <span className="text-xs font-semibold text-amber-600/80 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {chapter.verses_count} Verses
                  </span>
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h2 className="text-xl font-bold text-amber-950 mb-1 group-hover:text-amber-700 transition-colors">{chapter.name_english}</h2>
                  <h3 className="text-sm font-medium text-amber-600 mb-4 italic">{chapter.name_sanskrit}</h3>
                  <p className="text-amber-900/70 text-sm leading-relaxed mb-6">
                    {chapter.summary}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-amber-50 flex items-center justify-between text-amber-700 font-medium text-sm group-hover:text-amber-600 transition-colors relative z-10">
                  <span className="flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Explore Chapter
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
