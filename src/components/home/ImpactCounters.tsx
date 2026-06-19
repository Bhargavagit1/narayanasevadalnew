'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Package, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface StatData {
  icon: React.ElementType;
  value: number;
  label: string;
}

const stats: StatData[] = [
  { icon: Utensils, value: 40000, label: 'Meals Served' },
  { icon: Users, value: 250, label: 'Volunteers' },
  { icon: Package, value: 200, label: 'Meals per Drive' },
  { icon: Calendar, value: 7, label: 'Years Active' },
];

function formatNumber(num: number): string {
  if (num >= 1000) {
    return num.toLocaleString('en-IN');
  }
  return num.toString();
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const startTime = performance.now();

          const easeOutQuart = (t: number): number => {
            return 1 - Math.pow(1 - t, 4);
          };

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
    </span>
  );
}

export default function ImpactCounters() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-[#162d6e] to-[#0f1d4a] py-20 md:py-28 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="OUR IMPACT"
            title="Numbers That Speak"
            light
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={stat.label}
                variant="fadeUp"
                delay={index * 0.12}
              >
                <motion.div
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-500"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    <AnimatedCounter target={stat.value} />
                    <span className="text-primary">+</span>
                  </div>

                  {/* Label */}
                  <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
