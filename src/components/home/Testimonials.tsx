'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Volunteer since 2020',
    quote:
      'Being part of Narayana Seva Dal has been the most fulfilling experience of my life. The joy of serving food to those in need and seeing their smiles is something that words cannot capture.',
    initials: 'R',
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'Priya Sharma',
    role: 'Monthly Supporter',
    quote:
      'I trust Narayana Seva Dal completely with my contributions. Their transparency and dedication to the cause is remarkable. Every rupee goes directly to feeding those who need it most.',
    initials: 'P',
    gradient: 'from-accent to-[#162d6e]',
  },
  {
    name: 'Dr. Venkat Rao',
    role: 'Community Partner',
    quote:
      'The dedication of NSD volunteers is extraordinary. They show up consistently, rain or shine, to serve the community. Their work has genuinely transformed lives in our neighbourhood.',
    initials: 'V',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="TESTIMONIALS"
            title="Voices of Our Community"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              variant="fadeUp"
              delay={index * 0.12}
            >
              <motion.div
                className="group relative bg-neutral rounded-2xl p-8 md:p-9 h-full border border-gray-100 hover:border-primary/20 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Large Quote Icon */}
                <Quote
                  className="w-12 h-12 text-primary/15 mb-4 -scale-x-100"
                  strokeWidth={1.5}
                  fill="currentColor"
                />

                {/* Quote Text */}
                <blockquote className="text-text-primary/80 text-[15px] leading-relaxed italic font-body mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* Avatar Circle */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shrink-0 shadow-md`}
                  >
                    <span className="text-white font-heading font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>

                  <div>
                    <p className="font-heading font-semibold text-text-primary text-[15px]">
                      {testimonial.name}
                    </p>
                    <p className="text-text-muted text-sm mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
