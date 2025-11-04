'use client';

import { motion } from 'framer-motion';
import { FadeInText, GradientText } from './animated-text';

const services = [
  {
    title: 'Laser Treatments',
    description: 'Advanced laser technology for skin rejuvenation, hair removal, and pigmentation correction',
    icon: '💫',
    treatments: ['Hair Removal', 'Skin Resurfacing', 'Pigmentation', 'Vascular Lesions'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Anti-Aging',
    description: 'Combat signs of aging with proven treatments for wrinkles, fine lines, and skin elasticity',
    icon: '⏰',
    treatments: ['Botox', 'Dermal Fillers', 'Thread Lift', 'PRP Therapy'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Skin Rejuvenation',
    description: 'Restore your skin natural glow with customized rejuvenation treatments',
    icon: '✨',
    treatments: ['Chemical Peels', 'Microneedling', 'HydraFacial', 'LED Therapy'],
    color: 'from-orange-500 to-rose-500',
  },
  {
    title: 'Acne Treatment',
    description: 'Comprehensive solutions for acne, scarring, and problematic skin conditions',
    icon: '🎯',
    treatments: ['Acne Therapy', 'Scar Treatment', 'Pore Refinement', 'Oil Control'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Body Contouring',
    description: 'Non-invasive body sculpting and fat reduction treatments for your ideal silhouette',
    icon: '🌟',
    treatments: ['Fat Freezing', 'Radiofrequency', 'Ultrasound', 'Body Tightening'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Skin Analysis',
    description: 'AI-powered skin diagnostics and personalized treatment planning',
    icon: '🔍',
    treatments: ['3D Imaging', 'Skin Mapping', 'Moisture Analysis', 'UV Damage Assessment'],
    color: 'from-violet-500 to-purple-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <FadeInText>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Our{' '}
              <GradientText from="from-blue-600" to="to-purple-600">
                Premium Services
              </GradientText>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive dermatological and aesthetic treatments using the latest technology
              and techniques
            </p>
          </FadeInText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-neutral-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Treatment List */}
                <div className="space-y-2 mb-6">
                  {service.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-neutral-600 mb-6">
            Not sure which treatment is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
