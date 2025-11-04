'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: isMobile ? 0 : imageY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop"
          alt="Professional dermatology clinic"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          y: isMobile ? 0 : textY,
          opacity,
          scale,
        }}
        className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block mb-2 sm:mb-3">Advanced Skincare</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Targeted Solutions
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Experience the future of dermatology with our cutting-edge treatments
            designed for your unique skin needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-shadow w-full sm:w-auto"
            >
              Book Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-base sm:text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20"
        >
          {[
            { value: '15K+', label: 'Patients' },
            { value: '98%', label: 'Satisfaction' },
            { value: '25+', label: 'Treatments' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
