'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-4 ${
            light ? 'text-primary-light' : 'text-primary'
          }`}
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl leading-relaxed ${
            light ? 'text-white/70' : 'text-text-muted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
