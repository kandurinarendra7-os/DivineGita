import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun } from 'lucide-react';
import { featuredShlokas } from '../data/gita';
import { Shloka } from '../types';
import { ReadAloudControl } from './ReadAloudControl';

export const VerseOfTheDay = () => {
  const [verse, setVerse] = useState<Shloka | null>(null);

  useEffect(() => {
    // Select a random verse from our featured collection on mount
    const randomIndex = Math.floor(Math.random() * featuredShlokas.length);
    setVerse(featuredShlokas[randomIndex]);
  }, []);

  if (!verse) return null;

  const speechText = `${verse.sanskrit.replace(/\n/g, ' ')}. Translation: ${verse.translation}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-amber-950 to-amber-900 text-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-amber-800/50"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Sun className="w-48 h-48 text-amber-400 rotate-45" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-amber-400 mb-8 bg-amber-950/50 px-4 py-2 rounded-full border border-amber-800/50 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Verse of the Day</span>
          <Sparkles className="w-4 h-4" />
        </div>
        
        <p className="font-serif text-2xl md:text-4xl text-white mb-8 leading-loose md:leading-loose max-w-3xl drop-shadow-md">
          {verse.sanskrit.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}<br />
            </React.Fragment>
          ))}
        </p>
        
        <div className="w-24 h-px bg-amber-500/30 mb-8" />
        
        <p className="text-amber-200/90 italic text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          "{verse.translation}"
        </p>

        <div className="mb-8">
          <ReadAloudControl text={speechText} label="Listen to Shloka" />
        </div>
        
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-950 border border-amber-800 text-sm font-medium text-amber-300 shadow-inner">
          <BookOpenIcon className="w-4 h-4" />
          Chapter {verse.chapter}, Verse {verse.verse}
        </div>
      </div>
    </motion.div>
  );
};

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);
