import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, Feather } from 'lucide-react';
import { motion } from 'motion/react';
import { featuredShlokas } from '../data/gita';
import krishnaArjuna from '../assets/images/krishna_arjuna_chariot_1785154767179.jpg';
import gitaBook from '../assets/images/divine_gita_book_1785154780501.jpg';
import { VerseOfTheDay } from '../components/VerseOfTheDay';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f2]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-amber-950/60 to-[#fcf9f2] z-10" />
          <img 
            src={krishnaArjuna} 
            alt="Krishna and Arjuna on Chariot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
              THE SONG OF THE LORD
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              The Divine <span className="text-amber-400">Gita</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-50/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
              Discover eternal wisdom, inner peace, and the path to spiritual awakening through the sacred dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/chapters" 
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <BookOpen className="w-5 h-5" />
                Read the Chapters
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verse of the Day Section */}
      <section className="pt-20 bg-[#fcf9f2] relative z-20 -mt-10 rounded-t-[3rem] border-t border-amber-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <VerseOfTheDay />
        </div>
      </section>

      {/* Featured Shlokas Section */}
      <section className="py-20 bg-[#fcf9f2] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Feather className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">Divine Verses</h2>
            <p className="text-amber-900/70 max-w-2xl mx-auto">
              Timeless wisdom translated for the modern soul. Explore key verses that hold the power to transform perspective and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredShlokas.map((shloka, index) => (
              <motion.div 
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-amber-900/5 border border-amber-100 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    Chapter {shloka.chapter}, Verse {shloka.verse}
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <p className="font-serif text-xl text-amber-950 mb-4 leading-relaxed text-center">
                  "{shloka.sanskrit.split('\n')[0]}"
                </p>
                <p className="text-amber-900/80 italic text-sm mb-6 flex-grow">
                  "{shloka.translation}"
                </p>
                <div className="pt-4 border-t border-amber-100">
                  <p className="text-sm text-amber-950/70">
                    <span className="font-semibold text-amber-900">Essence:</span> {shloka.meaning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-amber-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={gitaBook} 
                alt="Sacred Bhagavad Gita" 
                className="rounded-2xl shadow-2xl shadow-black/50 border border-amber-800/50"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-50 mb-6">
                A Guide to <span className="text-amber-500">Life's Battles</span>
              </h2>
              <p className="text-amber-200/80 mb-6 leading-relaxed text-lg">
                The Bhagavad Gita is not just an ancient scripture; it is a practical manual for daily living. It addresses the core struggles of human existence—doubt, duty, action, and the search for peace.
              </p>
              <ul className="space-y-4 mb-8">
                {['Karma Yoga: The path of selfless action', 'Bhakti Yoga: The path of devotion', 'Jnana Yoga: The path of transcendental knowledge'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-amber-100">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors group"
              >
                Read our philosophy 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
