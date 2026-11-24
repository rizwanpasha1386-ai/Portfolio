import { ArrowDown, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo, socialLinks } from '../data/config';
import { motion } from 'framer-motion';

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Internship Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="text-accent">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 font-medium mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
          >
            View My Projects
            <ArrowDown size={16} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
