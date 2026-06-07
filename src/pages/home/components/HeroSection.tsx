import ScrollReveal from '@/components/base/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Deep%20space%20abstract%20composition%20with%20subtle%20star%20field%20texture%20and%20cosmic%20dust%20overlay%20grain%20noise%20effect%20archival%20vintage%20quality%20muted%20blue%20gray%20atmosphere%20misty%20nebula%20subtle%20ethereal%20artistic%20space%20background%20film%20grain%20editorial%20publication%20minimal%20dark%20overlay%20cinematic%20wide%20atmospheric%20non-realistic%20abstract%20cosmos&width=1920&height=1080&seq=hero-space-2026-01&orientation=landscape"
          alt="Space Is the Place — cosmic editorial background"
          title="SPACE IS THE PLACE cosmic editorial background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight text-background-50 mb-8 md:mb-12">
            SPACE<br />
            IS THE<br />
            PLACE
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-background-50/80 italic mb-6 md:mb-8 max-w-2xl mx-auto">
            A speculative planetary reissue of the 1974 film
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-body text-sm md:text-base text-background-50/60 max-w-xl mx-auto leading-relaxed mb-10 md:mb-14">
            This reissue brings Space Is the Place into 2026. It asks how the dream of escape changes when Earth is shaped by ecological collapse, surveillance, extraction, and unequal access to the future.
          </p>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={600}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-background-50/40">
              Scroll to receive transmission
            </span>
            <div className="w-px h-10 bg-background-50/20 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-3 bg-background-50/50 rounded-full animate-bounce" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}