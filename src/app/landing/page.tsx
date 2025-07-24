'use client';

import LandingLayout from './LandingLayout';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';

export default function LandingPage() {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </LandingLayout>
  );
}
// This is the main landing page that composes the layout and sections