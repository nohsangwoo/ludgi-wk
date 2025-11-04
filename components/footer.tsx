'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguageStore } from '@/lib/store';

export default function Footer() {
  const { t } = useLanguageStore();
  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-black dark:to-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Ludgik Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto rounded-2xl brightness-0 invert"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { key: 'services', href: '#services' },
                { key: 'treatments', href: '#treatments' },
                { key: 'about', href: '#about' },
                { key: 'contactUs', href: '#contact' },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors"
                  >
                    {t(link.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">{t('popularServices')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['laserTreatments', 'antiAging', 'skinRejuvenation', 'acneTreatment'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors"
                    >
                      {t(service as any)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-400">
              <li>📍 Seoul, South Korea</li>
              <li>📞 +82 2-1234-5678</li>
              <li>✉️ info@ludgik.com</li>
              <li className="pt-2 sm:pt-4">
                <div className="flex gap-4">
                  {['instagram', 'facebook', 'twitter'].map((social) => (
                    <motion.a
                      key={social}
                      href={`#${social}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </motion.a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-neutral-700 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
              © 2025 Ludgik. {t('allRightsReserved')}.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
