import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OriginalSignalSection from './components/OriginalSignalSection';
import EarthControlSection from './components/EarthControlSection';
import SpaceFreedomSection from './components/SpaceFreedomSection';
import SpacePresentSection from './components/SpacePresentSection';
import Reissue2026Section from './components/Reissue2026Section';
import EscapeSelectiveSection from './components/EscapeSelectiveSection';
import FinalStatementSection from './components/FinalStatementSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = 'SPACE IS THE PLACE — Reissued for 2026';
  }, []);

  return (
    <>
      {/* Global noise overlay */}
      <div className="noise-overlay" />

      <main>
        <HeroSection />
        <OriginalSignalSection />
        <EarthControlSection />
        <SpaceFreedomSection />
        <SpacePresentSection />
        <Reissue2026Section />
        <EscapeSelectiveSection />
        <FinalStatementSection />
      </main>

      <FooterSection />
    </>
  );
}