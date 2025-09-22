import React from 'react';
import { Hero } from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import { PublicationsSection } from '@/components/PublicationsSection'; // keep for full page usage later
import PublicationsPreview from '@/components/PublicationsPreview'; // new import
import NewsBlogSection from '@/components/NewsBlogSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Vision Section */}
      <VisionSection />
      <hr className="my-12 border-gray-300" />

      {/* Publications Preview (limit 3 + View More button) */}
      <PublicationsPreview />   {/* replaced PublicationsSection */}
      <hr className="my-12 border-gray-300" />

      {/* News & Blog Section */}
      <NewsBlogSection />
    </div>
  );
};

export default Index;
