'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-[#1a3278] to-[#0d1f52] py-20 md:py-32 overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="scaleUp">
          {/* Pulsing Heart Icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="bg-primary/15 rounded-full p-5"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
                strokeWidth={1.8}
                fill="currentColor"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            Be Part of the{' '}
            <span className="bg-gradient-to-r from-primary via-orange-300 to-primary bg-clip-text text-transparent">
              Change
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed font-body">
            Every meal shared is a step toward a hunger-free community. Join our
            mission — volunteer your time, spread the word, or simply connect
            with us to learn more.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group bg-primary text-white rounded-full px-10 py-4 font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white/30 text-white rounded-full px-10 py-4 font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              View Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
