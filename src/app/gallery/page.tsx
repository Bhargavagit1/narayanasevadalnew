	'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/*  Gallery Data                                                       */
/* ------------------------------------------------------------------ */
type Category =
  | 'All'
  | 'Food Distribution'
  | 'Volunteer Activities'
  | 'Special Events'
  | 'Community Service';

const categories: Category[] = [
  'All',
  'Food Distribution',
  'Volunteer Activities',
  'Special Events',
  'Community Service',
];

interface GalleryItem {
  id: number;
  category: Exclude<Category, 'All'>;
  caption: string;
  image?: string;
  gradient?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Food Distribution',
    caption: 'Swathi - Founder',
    image: '/images/Gal-1.png',
  },
  {
    id: 2,
    category: 'Volunteer Activities',
    caption: 'Donation campaign at Orphanage',
    image: '/images/Gal-2.png',
  },
  {
    id: 3,
    category: 'Special Events',
    caption: 'Railway Station',
    image: '/images/Railway Station.png',
  },
  {
    id: 4,
    category: 'Food Distribution',
    caption: 'Distributing meals near the government hospital',
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    id: 5,
    category: 'Community Service',
    caption: 'Community cleanup drive organized by volunteers',
    gradient: 'from-blue-800 to-indigo-900',
  },
  {
    id: 6,
    category: 'Volunteer Activities',
    caption: 'New volunteer orientation and training session',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    id: 7,
    category: 'Special Events',
    caption: 'Diwali special feast for underprivileged families',
    gradient: 'from-orange-500 to-rose-500',
  },
  {
    id: 8,
    category: 'Food Distribution',
    caption: 'Morning meal distribution to daily-wage workers',
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    id: 9,
    category: 'Community Service',
    caption: 'Blanket distribution during winter months',
    gradient: 'from-slate-600 to-blue-900',
  },
  {
    id: 10,
    category: 'Volunteer Activities',
    caption: 'Volunteer appreciation gathering and awards',
    gradient: 'from-rose-400 to-orange-400',
  },
  {
    id: 11,
    category: 'Special Events',
    caption: 'Ugadi new year celebration with the community',
    gradient: 'from-teal-500 to-emerald-600',
  },
  {
    id: 12,
    category: 'Community Service',
    caption: 'School supplies donation to local children',
    gradient: 'from-violet-500 to-purple-700',
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
              Our Moments
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              A glimpse into the moments that define our mission — the smiles,
              the teamwork, and the lives we touch every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 md:py-28 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-white text-text-muted border border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Real Image or Gradient Fallback */}
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient || 'from-orange-400 to-amber-500'}`}
                    />
                  )}

                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-6 left-6 w-8 h-8 border border-white/20 rounded-sm rotate-45" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-black/30 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category.split(' ')[0]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Real Image or Gradient Background */}
              {selectedItem.image ? (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.caption}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedItem.gradient || 'from-orange-400 to-amber-500'}`}
                />
              )}

              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/30 rounded-full" />
                <div className="absolute bottom-12 left-12 w-16 h-16 border border-white/20 rounded-sm rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {selectedItem.category}
                </span>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
