'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const highlights = [
  'Community-driven food distribution across Guntur district',
  'Fully volunteer-powered — 100% of contributions reach those in need',
  'Consistent weekly and festival meal drives since 2019',
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image Placeholder */}
          <ScrollReveal variant="fadeLeft">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-2xl aspect-[4/3] w-full overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-20 h-20 border-2 border-primary/40 rounded-xl" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/20 rounded-2xl rotate-12" />
                </div>

                {/* Center content hint */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🍛</span>
                    </div>
                    <p className="text-text-muted text-sm font-medium">Community Service</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-primary text-white rounded-xl p-4 md:p-5 shadow-xl shadow-primary/30 z-10">
                <p className="text-2xl md:text-3xl font-heading font-bold leading-none">40,000+</p>
                <p className="text-sm text-white/80 mt-1 font-medium">Meals Served</p>
              </div>

              {/* Background accent shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/5 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal variant="fadeRight">
            <div>
              <SectionHeading
                tag="ABOUT US"
                title="A Journey of Compassion Since 2019"
              />

              <p className="mt-6 text-text-muted text-lg leading-relaxed font-body">
                Narayana Seva Dal was born from a simple yet powerful conviction —
                no one in our community should go hungry. What began as a small
                group of passionate volunteers in Guntur has grown into a dedicated
                movement, touching thousands of lives through consistent acts of
                service and unconditional love.
              </p>

              {/* Bullet Points */}
              <ul className="mt-8 space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-success mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-text-primary font-medium text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 mt-10 bg-accent text-white rounded-full px-7 py-3.5 font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
