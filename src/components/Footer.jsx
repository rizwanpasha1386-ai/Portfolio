import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo, socialLinks, navLinks } from '../data/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 items-start mb-8">
          <div>
            <a href="#" className="text-lg font-bold text-white">
              {personalInfo.name.split(' ')[0]}
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              {personalInfo.title}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed & built with <Heart size={10} className="text-red-500 fill-current" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
