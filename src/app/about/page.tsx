'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  HandHeart,
  Users,
  Eye,
  Quote,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We lead with empathy, recognizing the dignity in every person we serve and meeting them with kindness.',
  },
  {
    icon: HandHeart,
    title: 'Selflessness',
    description:
      'Our volunteers give freely of their time, energy, and resources — expecting nothing in return.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We believe in the power of collective action, uniting people from all walks of life for a common cause.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Every meal served, every rupee spent is accounted for — we operate with complete openness and integrity.',
  },
];

const timelineEvents = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      'Narayana Seva Dal was founded by a small group of passionate individuals in Guntur, starting with just 20 meals distributed near the railway station.',
  },
  {
    year: '2020',
    title: 'Serving Through Crisis',
    description:
      'During the COVID-19 pandemic, our team stepped up to provide thousands of meals to stranded migrants, daily-wage workers, and families in need.',
  },
  {
    year: '2021',
    title: 'Growing the Family',
    description:
      'Our volunteer base crossed 100 members as word spread. We expanded to cover hospital areas and added weekend drives for the elderly.',
  },
  {
    year: '2022',
    title: 'Festival Distributions',
    description:
      'Launched large-scale festival food drives during Sankranti, Ugadi, and Diwali — serving over 1,000 meals during each event.',
  },
  {
    year: '2023',
    title: 'Community Partnerships',
    description:
      'Partnered with local businesses, temples, and community organizations to multiply our impact and reach underserved areas across the district.',
  },
  {
    year: '2024',
    title: '40,000 Meals Milestone',
    description:
      'Reached the landmark of 40,000 meals served. Our volunteer network grew to 250+ dedicated members serving every week.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent to-[#0f1d4a] py-24 md:py-32 overflow-hidden">
        {/* Decorative elements */}
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Born from a simple act of sharing food with the hungry, Narayana Seva Dal
              has grown into a movement of compassion that touches thousands of lives every year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What Drives Us"
            title="Mission & Vision"
            subtitle="Every meal we serve is guided by our unwavering commitment to eradicating hunger and building a compassionate community."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal variant="fadeLeft">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-primary h-full">
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  To serve nutritious meals to the hungry and underprivileged with love and
                  dignity, ensuring that no one in our community goes to sleep on an empty
                  stomach. We mobilize volunteers and resources to create a sustainable chain
                  of compassion from kitchen to community.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-accent h-full">
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  A world where hunger is not a barrier to human potential. We envision
                  communities united by the simple act of sharing food — where every person
                  has access to a warm meal and the hope that comes with knowing someone cares
                  about their well-being.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Foundation"
            title="Values We Live By"
            subtitle="These core values guide every decision, every meal, and every interaction within our organization."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Journey"
            title="Growing With Purpose"
            subtitle="From 20 meals to 40,000 — every year has been a chapter of growth, resilience, and deepening impact."
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

            {timelineEvents.map((event, index) => (
              <ScrollReveal
                key={event.year}
                variant={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                delay={index * 0.1}
                className="mb-12 last:mb-0"
              >
                <div
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge — mobile: left, desktop: center */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                      <span className="text-white font-bold text-xs">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0
                        ? 'md:pr-0 md:text-right'
                        : 'md:pl-0 md:text-left'
                    }`}
                  >
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-lg font-bold font-heading text-text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary leading-snug mb-8">
                &ldquo;When you feed a hungry person, you don&apos;t just fill their stomach —
                you fill their heart with hope. That&apos;s the truest form of service.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-primary" />
                <p className="text-text-muted font-medium">
                  Founder, Narayana Seva Dal
                </p>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
