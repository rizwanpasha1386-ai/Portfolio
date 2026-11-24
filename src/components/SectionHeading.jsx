import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-accent rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
