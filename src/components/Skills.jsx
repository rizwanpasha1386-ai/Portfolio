import {
  Code2, Layout, Server, Database, Radio, Brain,
  Container, GraduationCap,
} from 'lucide-react';
import { skills, skillLevels } from '../data/config';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const iconMap = {
  Code2, Layout, Server, Database, Radio, Brain,
  Container, GraduationCap,
};

function SkillBadge({ name, level }) {
  const dotColor =
    level === 'proficient'
      ? 'bg-blue-400'
      : level === 'familiar'
      ? 'bg-emerald-400'
      : 'bg-amber-400';

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-gray-300 hover:border-accent/20 hover:bg-accent/5 transition-all duration-200">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      {name}
    </span>
  );
}

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with, organized by domain."
        />

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.entries(skillLevels).map(([key, info]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-gray-400">
              <span className={`w-2 h-2 rounded-full ${info.color}`} />
              {info.label}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map(([category, data], i) => {
            const Icon = iconMap[data.icon] || Code2;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-navy-900/50 border border-white/5 hover:border-accent/15 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
