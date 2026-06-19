'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Copy, Check, CreditCard, QrCode, Heart, Award, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const BANK_DETAILS = {
  accountName: 'Narayana Seva Dal',
  accountNumber: '40991234567',
  bankName: 'State Bank of India',
  ifscCode: 'SBIN0000843',
  branch: 'Guntur Main Branch',
  upiId: '9848032919@ybl',
};

const IMPACT_TIERS = [
  { amount: '₹500', description: 'Provides hot, nutritious meals to 10 hungry people' },
  { amount: '₹1,000', description: 'Sponsors food distribution for 20 children and families' },
  { amount: '₹2,500', description: 'Covers essential cooking groceries and ingredients for a drive' },
  { amount: '₹5,000', description: 'Fully sponsors a complete weekend food drive (150+ meals)' },
];

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="min-h-screen bg-neutral pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-accent to-[#0f1d4a] py-20 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/10 mb-4">
              SUPPORT OUR MISSION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Empower Lives Through Food
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Your contribution goes directly toward sourcing fresh groceries, cooking nutritious meals, and distributing them to the needy in Guntur.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bank & UPI details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal variant="fadeLeft">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-text-primary">
                      Direct Bank Transfer
                    </h2>
                    <p className="text-sm text-text-muted">
                      Support us with direct transactions from any bank account
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Account Holder */}
                  <div className="flex items-center justify-between p-4 bg-neutral rounded-2xl">
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Account Holder Name
                      </p>
                      <p className="text-md font-bold text-text-primary mt-1">
                        {BANK_DETAILS.accountName}
                      </p>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="flex items-center justify-between p-4 bg-neutral rounded-2xl">
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Account Number
                      </p>
                      <p className="text-lg font-bold font-heading text-text-primary mt-1">
                        {BANK_DETAILS.accountNumber}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, 'acc')}
                      className="p-2.5 bg-white border border-gray-100 rounded-xl text-text-muted hover:text-primary transition-colors cursor-pointer"
                      aria-label="Copy account number"
                    >
                      {copiedField === 'acc' ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* IFSC Code */}
                  <div className="flex items-center justify-between p-4 bg-neutral rounded-2xl">
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        IFSC Code
                      </p>
                      <p className="text-lg font-bold font-heading text-text-primary mt-1">
                        {BANK_DETAILS.ifscCode}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, 'ifsc')}
                      className="p-2.5 bg-white border border-gray-100 rounded-xl text-text-muted hover:text-primary transition-colors cursor-pointer"
                      aria-label="Copy IFSC code"
                    >
                      {copiedField === 'ifsc' ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Bank Name */}
                  <div className="flex items-center justify-between p-4 bg-neutral rounded-2xl">
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Bank Name & Branch
                      </p>
                      <p className="text-md font-bold text-text-primary mt-1">
                        {BANK_DETAILS.bankName}, {BANK_DETAILS.branch}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Impact section */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                  Your Impact in Action
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {IMPACT_TIERS.map((tier, index) => (
                    <div key={index} className="p-5 border border-gray-100 rounded-2xl hover:border-primary/20 transition-all hover:bg-primary-light/10">
                      <p className="text-2xl font-bold font-heading text-primary mb-2">{tier.amount}</p>
                      <p className="text-sm text-text-muted leading-relaxed">{tier.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: QR Code Box (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0f1d4a] text-white border border-[#2b4c9e] rounded-3xl p-8 shadow-xl text-center relative overflow-hidden">
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                    <QrCode className="w-4 h-4 text-primary" /> Quick Scan & Pay
                  </div>

                  <h3 className="text-2xl font-bold font-heading mb-2">Scan UPI QR Code</h3>
                  <p className="text-sm text-white/60 mb-6">
                    Scan with Google Pay, PhonePe, Paytm, or any banking app
                  </p>

                  {/* QR Image Container */}
                  <div className="bg-white p-4 rounded-2xl inline-block shadow-md max-w-[280px] w-full mx-auto mb-6 relative aspect-square">
                    <Image
                      src="/images/upi-qr-code.png"
                      alt="Narayana Seva Dal UPI QR Code"
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>

                  {/* Copy UPI Address */}
                  <div className="inline-flex items-center justify-between w-full max-w-xs bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 text-left mx-auto">
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">UPI ID</p>
                      <p className="text-sm font-bold text-white truncate mt-0.5">{BANK_DETAILS.upiId}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_DETAILS.upiId, 'upi')}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors shrink-0 cursor-pointer text-white ml-2"
                      aria-label="Copy UPI ID"
                    >
                      {copiedField === 'upi' ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex justify-center items-center gap-6 mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-col items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-[10px] text-white/60 font-medium">Safe & Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-[10px] text-white/60 font-medium">100% Transparent</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
