'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/* ------------------------------------------------------------------ */
/*  Contact Info Data                                                  */
/* ------------------------------------------------------------------ */
const contactDetails = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Near Railway Station, Guntur, Andhra Pradesh, India 522001',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'narayanasevadal2019@gmail.com',
    href: 'mailto:narayanasevadal2019@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 7794988807',
    href: 'tel:+919000000000',
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(true);
  }

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
              Reach Out
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Have questions, want to volunteer, or just want to say hello?
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left — Form (3 cols) */}
            <ScrollReveal variant="fadeLeft" className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-text-primary mb-2">
                  Send us a Message
                </h2>
                <p className="text-text-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-success/10 border border-success/20 rounded-xl p-6 text-center"
                  >
                    <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-success" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-success mb-2">
                      Thank you!
                    </h3>
                    <p className="text-success/80">
                      We&apos;ll get back to you soon. Your message means a lot to us.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 text-sm text-text-muted hover:text-text-primary underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how you'd like to help or what you'd like to know..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-primary/25 cursor-pointer"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right — Contact Info (2 cols) */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-heading text-text-primary mb-2">
                    Contact Information
                  </h2>
                  <p className="text-text-muted mb-8">
                    You can also reach us directly through any of the channels below.
                  </p>
                </div>

                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                      <detail.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-muted mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-text-primary font-medium hover:text-primary transition-colors duration-200"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-medium">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-sm font-medium text-text-muted mb-4">
                    Follow us on Social Media
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-xl flex items-center justify-center transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-accent to-[#0f1d4a] rounded-2xl p-6 text-white mt-8"
                >
                  <h3 className="text-lg font-bold font-heading mb-2">
                    Volunteer With Us
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Join our food drives every weekend. No experience needed —
                    just a willingness to serve and a heart full of compassion.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
