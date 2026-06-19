'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Utensils,
  UsersRound,
  CalendarHeart,
  Clock,
  Truck,
  PartyPopper,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

/* ------------------------------------------------------------------ */
/*  Animated Counter Hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();
          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ------------------------------------------------------------------ */
/*  Stats Data                                                         */
/* ------------------------------------------------------------------ */
const stats = [
  {
    icon: Utensils,
    value: 40000,
    suffix: '+',
    label: 'Meals Served',
    description: 'Hot, nutritious meals delivered to those in need',
  },
  {
    icon: UsersRound,
    value: 250,
    suffix: '+',
    label: 'Active Volunteers',
    description: 'Dedicated individuals serving selflessly',
  },
  {
    icon: Truck,
    value: 200,
    suffix: '+',
    label: 'Meals Per Drive',
    description: 'Average meals distributed in each food drive',
  },
  {
    icon: Clock,
    value: 7,
    suffix: '',
    label: 'Years of Service',
    description: 'Consistently serving since 2019',
  },
];

const activities = [
  {
    icon: CalendarHeart,
    title: 'Weekly Drives',
    description:
      'Every week, our volunteers gather to prepare and distribute fresh meals near the Guntur railway station and government hospital — reaching daily-wage workers, patients\u2019 families, and anyone who needs a warm meal.',
    highlights: ['Railway station area', 'Government hospital', 'Every weekend'],
  },
  {
    icon: PartyPopper,
    title: 'Special Events',
    description:
      'During festivals like Sankranti, Ugadi, and Diwali, we organize large-scale food distributions — serving over 1,000 meals per event with special festive dishes that bring joy to families.',
    highlights: ['Festival distributions', '1,000+ meals per event', 'Festive menus'],
  },
  {
    icon: Handshake,
    title: 'Community Partnerships',
    description:
      'We collaborate with local businesses, temples, and civic organizations to extend our reach. These partnerships help us access resources, venues, and volunteer networks across the district.',
    highlights: ['Local businesses', 'Temple partnerships', 'Civic organizations'],
  },
];

/* ------------------------------------------------------------------ */
/*  Stat Card Component                                                */
/* ------------------------------------------------------------------ */
function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { count, ref } = useCounter(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300 h-full">
        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <stat.icon className="w-7 h-7 text-primary" />
        </div>
        <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="text-primary font-semibold text-lg mb-2">
          {stat.label}
        </div>
        <p className="text-white/50 text-sm">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function ImpactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent to-[#0f1d4a] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Making a Difference
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Every number tells a story. Every meal served represents a moment of
              connection, dignity, and hope for someone in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Big Stats */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent to-[#0f1d4a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="By the Numbers"
            title="Impact in Action"
            subtitle="Real numbers. Real lives. Real change happening in our community every single week."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What We Do"
            title="How We Serve"
            subtitle="Our impact goes beyond numbers — it's built on consistent, compassionate action in the communities that need it most."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <ScrollReveal key={activity.title} variant="fadeUp" delay={index * 0.15}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <activity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-block bg-primary/5 text-primary text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-6">
                Want to be part of our impact?
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you volunteer your time, contribute resources, or simply spread
                the word — every action multiplies our collective impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg shadow-primary/25"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-text-primary border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
