'use client';

import { motion } from 'framer-motion';
import { FadeInText } from './animated-text';
import { useLanguageStore } from '@/lib/store';

export default function ServicesSection() {
  const { t } = useLanguageStore();

  const services = [
    {
      icon: '💫',
      titleKey: 'laserTreatments' as const,
      descKey: 'laserTreatmentsDesc' as const,
      treatments: ['hairRemoval', 'skinResurfacing', 'pigmentation', 'vascularLesions'] as const,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '⏰',
      titleKey: 'antiAging' as const,
      descKey: 'antiAgingDesc' as const,
      treatments: ['botox', 'dermalFillers', 'threadLift', 'prpTherapy'] as const,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '✨',
      titleKey: 'skinRejuvenation' as const,
      descKey: 'skinRejuvenationDesc' as const,
      treatments: ['chemicalPeels', 'microneedling', 'hydraFacial', 'ledTherapy'] as const,
      color: 'from-orange-500 to-rose-500',
    },
    {
      icon: '🎯',
      titleKey: 'acneTreatment' as const,
      descKey: 'acneTreatmentDesc' as const,
      treatments: ['acneTherapy', 'scarTreatment', 'poreRefinement', 'oilControl'] as const,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🌟',
      titleKey: 'bodyContouring' as const,
      descKey: 'bodyContouringDesc' as const,
      treatments: ['fatFreezing', 'radiofrequency', 'ultrasound', 'bodyTightening'] as const,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '🔍',
      titleKey: 'skinAnalysis' as const,
      descKey: 'skinAnalysisDesc' as const,
      treatments: ['imaging3d', 'skinMapping', 'moistureAnalysis', 'uvDamageAssessment'] as const,
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <FadeInText>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('ourPremiumServices')}
              </span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {t('servicesDesc')}
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
              className="group relative bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{service.icon}</div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-neutral-800 dark:text-white">
                  {t(service.titleKey)}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>

                <div className="space-y-2 mb-6">
                  {service.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span>{t(treatment)}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all`}
                >
                  {t('learnMore')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            {t('notSureWhichTreatment')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            {t('getFreeConsultation')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
