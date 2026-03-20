import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-card mt-20 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            JNNCE ACM Student Chapter
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://jnnce.ac.in/jnndemo/" className="p-2 rounded-full hover:bg-teal-500/20 text-teal-600 dark:text-teal-400 transition-colors"><Globe size={20} /></a>
          <a href="https://www.instagram.com/jnnce.aiml/" className="p-2 rounded-full hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 transition-colors"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/posts/jnnce-acm_jnnce-jnnceaiml-falconaiml-activity-7028016541375827968-Ko31" className="p-2 rounded-full hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          <a href="https://x.com/hashtag/jnnce?src=hashtag_click" className="p-2 rounded-full hover:bg-gray-500/20 text-gray-800 dark:text-gray-300 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}