import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import VideoCarousel from '@/components/video-carousel';
import ServicesSection from '@/components/services-section';
import ParallaxSection from '@/components/parallax-section';
import Footer from '@/components/footer';
import { Providers } from '@/components/providers';

export default function Home() {
  return (
    <Providers>
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <Header />
        <main>
          <HeroSection />
          <VideoCarousel />
          <ServicesSection />
          <ParallaxSection />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
