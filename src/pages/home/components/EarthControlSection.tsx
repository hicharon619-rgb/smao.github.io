import ScrollReveal from '@/components/base/ScrollReveal';

export default function EarthControlSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Title area */}
        <ScrollReveal>
          <div className="mb-14 md:mb-20">
            <span className="font-label text-[0.65rem] tracking-[0.25em] uppercase text-accent-500/70 mb-4 block">
              1974
            </span>
            <h2 className="font-heading text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.88] tracking-tight text-foreground-950">
              IN 1974<br />
              EARTH = CONTROL
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid: Images + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column: Two images stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            <ScrollReveal delay={100}>
              <div className="rounded-xl overflow-hidden border border-background-300/40">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20industrial%20landscape%20with%20smokestacks%20urban%20decay%20muted%20grayscale%20tones%20heavy%20contrast%20film%20grain%20texture%20documentary%20photography%20style%20oppressive%20atmosphere%20environmental%20degradation%20muted%20black%20and%20white%20with%20slight%20blue%20undertone%20archival%20print%20quality%20dystopian%20cityscape%20vintage%20photo&width=1000&height=700&seq=earth-control-industry-03&orientation=landscape"
                  alt="Industrial landscape — oppression and systemic inequality"
                  title="IN 1974 industrial oppression imagery"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="rounded-xl overflow-hidden border border-background-300/40">
                <img
                  src="https://storage.readdy-site.link/project_files/4ed05e63-281d-450d-92e7-0000c4086451/5a88c6e0-24ac-4458-919c-e150ee60e564_1.png?v=5b0c1ac20ba77f31c6db362956975ab3"
                  alt="Historical documentary photography — social conditions"
                  title="IN 1974 historical reality imagery"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Text */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-6">
                In <span className="italic">Space Is the Place</span>, Earth is portrayed as a site of oppression, limitation, and systemic inequality. It is a place where existing social structures prevent freedom and self-determination. The representation of Earth reflects the lived realities of marginalized communities, particularly Black Americans in the 1970s.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-8">
                Earth is not only a physical place. It is a political and social condition shaped by power and control. As a result, Earth becomes something to escape from, rather than something to belong to.
              </p>
            </ScrollReveal>

            {/* Oppression keywords */}
            <ScrollReveal delay={500}>
              <div className="flex flex-wrap gap-3">
                <span className="font-label text-xs tracking-[0.2em] uppercase text-foreground-950 border-2 border-foreground-950 px-4 py-2">
                  OPPRESSION
                </span>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-foreground-950 border-2 border-foreground-950 px-4 py-2">
                  LIMITATION
                </span>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-accent-500 border-2 border-accent-500 px-4 py-2">
                  CONTROL
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}