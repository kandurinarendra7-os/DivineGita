import React from 'react';
import { BookOpen, Heart, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-amber-950 border-t border-amber-900/50 text-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-amber-500" />
              <span className="font-serif text-xl font-bold text-amber-50 tracking-wide">
                The Divine Gita
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              A spiritual journey through the sacred teachings of Lord Krishna to Arjuna. 
              Discover ancient wisdom for modern life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-50 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/chapters" className="hover:text-amber-400 transition-colors">Chapters</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-50 font-semibold mb-4">Daily Wisdom</h3>
            <p className="text-sm italic mb-4 border-l-2 border-amber-500 pl-4 py-1">
              "You have the right to work, but never to the fruit of work."
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-900/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>© {new Date().getFullYear()} The Divine Gita. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for spiritual seekers
          </p>
        </div>
      </div>
    </footer>
  );
};
