'use client';

import { Search, ChefHat, Truck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Step {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    number: '01',
    title: 'Identify',
    description:
      'We survey and identify underserved communities, orphanages, and individuals in need across the Guntur district.',
  },
  {
    icon: ChefHat,
    number: '02',
    title: 'Prepare',
    description:
      'Our dedicated volunteers cook fresh, nutritious meals with love — ensuring quality, hygiene, and taste every time.',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Distribute',
    description:
      'Meals are carefully packaged and delivered directly to communities, shelters, and homes across the region.',
  },
  {
    icon: Heart,
    number: '04',
    title: 'Nourish',
    description:
      'We serve every meal with dignity and compassion, building lasting relationships and uplifting spirits.',
  },
];

export default function HowWeServe() {
  return (
    <section className="bg-neutral py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="HOW WE SERVE"
            title="From Kitchen to Community"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={step.number}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100/80"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Watermark Step Number */}
                  <span className="absolute top-4 right-5 text-7xl font-heading font-bold text-gray-100 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-primary/10 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon
                        className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-xl font-heading font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-text-muted text-[15px] leading-relaxed font-body">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
