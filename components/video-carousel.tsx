'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/store';

const videos = [
  'grok-video-09a48336-332e-4690-a910-70cd8d259780.mp4',
  'grok-video-1b6444e8-2451-4eff-9a61-4e997bc87897.mp4',
  'grok-video-1f1d69ee-72cf-49d9-8705-edb248525a94.mp4',
  'grok-video-27713c76-31e1-4112-997f-be1aef611744.mp4',
  'grok-video-2bb63987-985c-4343-9025-87479a59a65b.mp4',
  'grok-video-2efcabe1-9c7f-4edf-8ad7-2aa11dd95fdd.mp4',
  'grok-video-3fbbe584-5f14-4d2c-b6d4-cc070c582358.mp4',
  'grok-video-44275541-0bef-4cd3-9dc9-b0defeb92d0a.mp4',
  'grok-video-5620d55f-50ed-40e7-a11f-1ec25e848de9.mp4',
  'grok-video-57b27f86-da45-43cc-a016-b269cc973092.mp4',
  'grok-video-58cae786-8a84-46a3-a2fc-ffa2cd76bab6.mp4',
  'grok-video-5da58687-27d2-4228-911e-f2c941bd342e.mp4',
  'grok-video-664f29e3-bad6-4391-b109-ea49db38b6d9.mp4',
  'grok-video-6a2ba354-0b7d-44c5-835e-2d26316741c8.mp4',
  'grok-video-72ce4cfb-a6e0-44e1-bf89-1d055b3e2a27.mp4',
  'grok-video-8dddccae-58bf-4155-95c2-a97c6c460d41.mp4',
  'grok-video-9e17553c-5326-41a0-ae5b-2eaeb1feef23.mp4',
  'grok-video-a687b327-4e9a-4279-88e2-124d838cf209.mp4',
  'grok-video-aab31cf9-e88c-41cf-a1fc-4e272765728f.mp4',
  'grok-video-ab54d7d7-c8a7-4870-9493-6dc6ac18dd2d.mp4',
  'grok-video-adbd3e98-9331-476a-b502-8d017183a3d1.mp4',
  'grok-video-ae6888a8-4198-4845-a617-ad647a4e3291.mp4',
  'grok-video-b3ffc977-7089-4a93-a37c-93ab716cc50a.mp4',
  'grok-video-b613a30b-925d-4fd1-86bc-72b80ee5ca19.mp4',
  'grok-video-bc9e6aee-0463-4ecf-81d8-754125ed1f0d.mp4',
  'grok-video-c67d8dae-c02e-42ac-accf-dc0af3c0ba07.mp4',
  'grok-video-d1001d35-d7a5-4d8a-abe9-84df00fc4ad9.mp4',
  'grok-video-d81ae436-77ea-4f3d-a05f-032f72ede1df.mp4',
  'grok-video-db14cf32-d592-46d3-a97c-73dc52c18db5.mp4',
  'grok-video-e24bf1be-5072-4389-8bcf-e56a2bbc2261.mp4',
  'grok-video-e2d24c2b-723b-4790-8f87-031d80adfc19.mp4',
  'grok-video-e43baa9e-60d6-4f5d-8ce6-f18e411c48a6.mp4',
  'grok-video-f8260831-59fc-49e4-be90-eb2a388d3f82.mp4',
  'grok-video-fa11e582-d6ed-4755-8537-bfb049acf522.mp4',
];

// Shuffle array for randomization
const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function VideoCarousel() {
  const { t } = useLanguageStore();
  const [shuffledVideos, setShuffledVideos] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffledVideos(shuffleArray(videos));
  }, []);

  // Create duplicated array for seamless loop
  const displayVideos = [...shuffledVideos, ...shuffledVideos];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white dark:from-neutral-900 to-neutral-50 dark:to-neutral-800 overflow-hidden">
      <div className="mb-8 sm:mb-12 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {t('realResults')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t('realResultsDesc')}
        </motion.p>
      </div>

      <div className="relative" ref={containerRef}>
        <div className="flex gap-4 sm:gap-6 animate-infinite-scroll hover:pause-animation">
          {displayVideos.map((video, index) => (
            <div
              key={`${video}-${index}`}
              className="flex-shrink-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <video
                src={`/videos/${video}`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
