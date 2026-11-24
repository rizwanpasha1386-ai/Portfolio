import { GraduationCap, Trophy, Heart, Award, Code2 } from 'lucide-react';
import { education, achievements } from '../data/config';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const iconMap = { Trophy, Heart, Award, Code2 };

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Education & Achievements"
          subtitle="Academic background and notable activities."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-xl bg-navy-900/50 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Education</h3>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">
                {education.institution}
              </h4>
              <p className="text-sm text-gray-400">{education.degree}</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-lg bg-accent/10 text-accent font-medium border border-accent/15">
                  CGPA: {education.cgpa}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/5">
                  {education.semester}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {education.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-xl bg-navy-900/50 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <Trophy size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Achievements & Activities</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((item, i) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      item.highlight
                        ? 'bg-accent/5 border border-accent/10'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-md mt-0.5 ${
                        item.highlight
                          ? 'bg-accent/15 text-accent'
                          : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
