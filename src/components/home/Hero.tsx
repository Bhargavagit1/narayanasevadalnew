'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Narayana Seva Dal volunteers serving food to those in need"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle animated grain texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-40 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={childVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight"
        >
          Serving Humanity,
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            One Meal at a Time.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
        >
          Narayana Seva Dal is a volunteer-driven community charity initiative
          feeding the hungry and supporting those in need since 2019.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={childVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/impact"
            className="group relative bg-primary rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Our Impact</span>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Bouncing Chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
