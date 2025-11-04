'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ludgik Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto rounded-2xl"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              Services
            </a>
            <a href="#treatments" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              Treatments
            </a>
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              About
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              Book Now
            </button>
          </nav>
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
