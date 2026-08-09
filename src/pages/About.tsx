import React from 'react';
import { motion } from 'motion/react';
import spiritualMeditation from '../assets/images/spiritual_meditation_1785154800088.jpg';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f2] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-950 mb-6">
              About The <span className="text-amber-600">Gita</span>
            </h1>
            <p className="text-lg text-amber-900/70 max-w-2xl mx-auto">
              A timeless dialogue that addresses the deepest questions of existence, duty, and spirituality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">The Essence of the Teachings</h2>
            <div className="space-y-4 text-amber-900/80 leading-relaxed text-lg">
              <p>
                The Bhagavad Gita, often referred to as simply the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. It is set in a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Krishna.
              </p>
              <p>
                At the start of the Dharma Yudhha (righteous war) between Pandavas and Kauravas, Arjuna is filled with moral dilemma and despair about the violence and death the war will cause in the battle against his own kin.
              </p>
              <p>
                Krishna counsels Arjuna to fulfill his Kshatriya (warrior) duty to uphold the Dharma through selfless action. The Krishna-Arjuna dialogue covers a broad range of spiritual topics, touching upon ethical dilemmas and philosophical issues that go far beyond the war Arjuna faces.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={spiritualMeditation} 
              alt="Spiritual Meditation" 
              className="rounded-2xl shadow-xl shadow-amber-900/10 border border-amber-200"
            />
          </motion.div>
        </div>

        <div className="bg-amber-950 text-amber-50 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-6">"Change is the law of the universe."</h3>
            <p className="text-amber-200/80 max-w-2xl mx-auto text-lg leading-relaxed">
              What you think of as death, is indeed life. In one instance you can be a millionaire, and in the other instance you can be steeped in poverty. Yours and mine, big and small—erase these ideas from your mind. Then everything is yours and you belong to everyone.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
