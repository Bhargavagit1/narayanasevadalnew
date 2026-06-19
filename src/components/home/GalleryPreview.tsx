'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface GalleryItem {
  gradient: string;
  label: string;
}

const galleryItems: GalleryItem[] = [
  {
    gradient: 'from-primary/40 via-orange-300/30 to-amber-200/40',
    label: 'Food Distribution Drive',
  },
  {
    gradient: 'from-accent/40 via-blue-300/30 to-indigo-200/40',
    label: 'Community Kitchen',
  },
  {
    gradient: 'from-primary/30 via-rose-300/30 to-pink-200/40',
    label: 'Festival Celebrations',
  },
  {
    gradient: 'from-emerald-400/30 via-teal-300/30 to-cyan-200/40',
    label: 'Volunteer Gathering',
  },
  {
    gradient: 'from-violet-400/30 via-purple-300/30 to-fuchsia-200/40',
    label: 'Supporting Elders',
  },
  {
    gradient: 'from-amber-400/30 via-yellow-300/30 to-orange-200/40',
    label: 'Serving with Love',
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-neutral py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="GALLERY"
            title="Moments of Service"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.label}
              variant="scaleUp"
              delay={index * 0.08}
            >
              <motion.div
                className="group relative rounded-xl aspect-[4/3] overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />

                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-xl rotate-45" />
                </div>

                {/* Center icon hint */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">📸</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 tracking-wide">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-accent font-semibold text-lg hover:text-primary transition-colors duration-300"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
