import {
  GitBranch, Network, Globe, Container, Cloud, Leaf, Brain,
} from 'lucide-react';
import { currentlyLearning } from '../data/config';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const iconMap = { GitBranch, Network, Globe, Container, Cloud, Leaf, Brain };

export default function Learning() {
  return (
    <section id="learning" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Currently Learning"
          subtitle="Technologies and concepts I'm actively exploring to level up my engineering skills."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentlyLearning.map((item, i) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-4 rounded-xl bg-navy-800/40 border border-white/5 hover:border-accent/15 group transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pl-11">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
