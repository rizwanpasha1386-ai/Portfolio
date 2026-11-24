import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Star, ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects } from '../data/config';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        project.featured
          ? 'bg-gradient-to-br from-navy-800/80 to-navy-900/80 border-accent/20 shadow-lg shadow-accent/5'
          : 'bg-navy-800/40 border-white/5 hover:border-white/10'
      }`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-accent/15 text-accent border border-accent/20">
                  <Star size={10} className="fill-current" />
                  Flagship Project
                </span>
              )}
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/5 text-gray-400">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent/90 border border-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-200"
            >
              <GithubIcon size={14} />
              Source Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          {expanded ? 'Hide Details' : 'View Details'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-white/5 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                    Overview
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <ArrowRight size={14} className="text-accent mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Engineering Challenges
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-amber-400 mt-0.5 shrink-0">▸</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production-grade systems I've designed and built."
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
