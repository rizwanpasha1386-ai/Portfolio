import { MapPin, GraduationCap, Target } from 'lucide-react';
import { personalInfo, education, aboutMe } from '../data/config';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: education.degree,
      sub: education.institution,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: education.location,
      sub: `${education.semester} • CGPA: ${education.cgpa}`,
    },
    {
      icon: Target,
      label: 'Focus Areas',
      value: 'Backend & AI Engineering',
      sub: 'Scalable Systems & Intelligent Apps',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Engineer by mindset, builder by practice."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-[15px]">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-navy-800/60 border border-white/5 hover:border-accent/20 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-white">{item.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
