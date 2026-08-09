import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Sparkles, Feather } from 'lucide-react';
import { chapters, getVersesForChapter, divineImages } from '../data/gita';

export const ChapterView = () => {
  const { id } = useParams<{ id: string }>();
  const chapterId = id ? parseInt(id, 10) : null;
  
  const chapter = useMemo(() => chapters.find(c => c.id === chapterId), [chapterId]);
  
  // We'll generate a realistic number of verses to show for UI purposes (e.g., first 10 verses)
  // Generating all 70+ verses might make the page endlessly long for this demo.
  const displayCount = chapter ? Math.min(10, chapter.verses_count) : 0;
  const verses = useMemo(() => chapterId ? getVersesForChapter(chapterId, displayCount) : [], [chapterId, displayCount]);

  if (!chapter) {
    return <Navigate to="/chapters" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fcf9f2] pt-24 pb-20">
      
      {/* Chapter Header Banner */}
      <div className="relative overflow-hidden bg-amber-950 text-white mb-16 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
           <img 
            src={divineImages[chapter.id % divineImages.length]} 
            alt="Chapter Background" 
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <Link to="/chapters" className="inline-flex items-center gap-2 text-amber-200/80 hover:text-amber-100 transition-colors mb-8 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Chapters
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
               <span className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 font-bold font-serif text-xl border border-amber-500/30">
                  {chapter.chapter_number}
               </span>
               <span className="text-amber-300 font-semibold uppercase tracking-wider text-sm">
                 {chapter.verses_count} Verses
               </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg">
              {chapter.name_english}
            </h1>
            <h2 className="text-2xl md:text-3xl text-amber-400 font-serif italic mb-6">
              {chapter.name_sanskrit}
            </h2>
            <p className="text-lg text-amber-50/80 max-w-3xl leading-relaxed drop-shadow-md">
              {chapter.summary}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Verses List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-12">
           <Feather className="w-6 h-6 text-amber-600" />
           <h3 className="text-2xl font-serif font-bold text-amber-950">Sacred Verses</h3>
           <Feather className="w-6 h-6 text-amber-600 transform scale-x-[-1]" />
        </div>

        <div className="space-y-12">
          {verses.map((verse, index) => {
            // Pick an image sequentially to ensure variety
            const imageIndex = (index + chapter.id) % divineImages.length;
            const verseImage = divineImages[imageIndex];
            
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={verse.id}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-amber-100 flex flex-col md:flex-row group"
              >
                {/* Image Side */}
                <div className={`md:w-5/12 relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={verseImage} 
                    alt={`Verse ${verse.verse} imagery`} 
                    className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-semibold tracking-widest text-amber-200 border border-amber-200/30">
                      VERSE {verse.verse}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`md:w-7/12 p-8 md:p-12 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  
                  <div className="flex items-center gap-2 mb-6 text-amber-500">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Sanskrit Shloka</span>
                  </div>

                  <p className="font-serif text-2xl md:text-3xl text-amber-950 mb-6 leading-loose whitespace-pre-line text-center md:text-left">
                    {verse.sanskrit}
                  </p>
                  
                  <div className="w-full h-px bg-amber-100 mb-6" />

                  <p className="text-amber-700/80 italic text-sm mb-6 leading-relaxed bg-amber-50 p-4 rounded-lg">
                    {verse.transliteration}
                  </p>

                  <h4 className="font-semibold text-amber-900 mb-2">Translation</h4>
                  <p className="text-amber-900/80 leading-relaxed mb-6">
                    {verse.translation}
                  </p>

                  <h4 className="font-semibold text-amber-900 mb-2">Essence</h4>
                  <p className="text-amber-900/70 leading-relaxed">
                    {verse.meaning}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
        
        {chapter.verses_count > displayCount && (
           <div className="mt-16 text-center">
              <p className="text-amber-900/60 italic">Showing {displayCount} of {chapter.verses_count} verses for preview.</p>
           </div>
        )}

      </div>
    </div>
  );
};
