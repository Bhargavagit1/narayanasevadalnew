import Hero from '@/components/home/Hero';
import ImpactCounters from '@/components/home/ImpactCounters';
import AboutPreview from '@/components/home/AboutPreview';
import HowWeServe from '@/components/home/HowWeServe';
import GalleryPreview from '@/components/home/GalleryPreview';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactCounters />
      <AboutPreview />
      <HowWeServe />
      <GalleryPreview />
      <Testimonials />
      <CallToAction />
    </>
  );
}
