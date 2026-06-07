import ScrollReveal from '@/components/base/ScrollReveal';

export default function OriginalSignalSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Archive image */}
          <div className="w-full lg:w-[38%]">
            <ScrollReveal>
              <span className="inline-block font-label text-[0.65rem] tracking-[0.25em] uppercase text-accent-500 border border-accent-500/40 px-3 py-1.5 rounded-full mb-8 md:mb-10">
                ARCHIVE &nbsp;1974–2026
              </span>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-2xl overflow-hidden border border-background-300/50">
                <img
                  src="https://static.readdy.ai/image/0efcf4a37b0dbf462ea2aae207f3f1fc/613348080db2cb85a63f36e8a44780f4.png"
                  alt="Afrofuturist archival collage — Sun Ra inspired visual"
                  title="Afrofuturist archival collage SPACE IS THE PLACE"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-[62%] flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="font-heading text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-tight text-foreground-950 mb-8 md:mb-10">
                Original<br />Signal
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-5 max-w-xl">
                Space Is the Place is an Afrofuturist science fiction film made in 1972 and released in 1974. It was directed by John Coney, written by Sun Ra and Joshua Smith, and features Sun Ra and his Arkestra. The work moves across film, music, myth, and political imagination.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-10 md:mb-12 max-w-xl">
                This project reissues the film as a planetary narrative for 2026. Rather than treating space as a simple utopia, it asks who gets to leave Earth, who stays behind, and what kinds of futures are being designed.
              </p>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={450}>
              <blockquote className="border-l-[3px] border-accent-500/50 pl-5 md:pl-6 py-1">
                <p className="font-body italic text-lg md:text-xl text-foreground-600 leading-relaxed mb-2">
                  &ldquo;I came from a dream that the black man dreamed long ago. I&rsquo;m actually a presence sent to you by your ancestors.&rdquo;
                </p>
                <cite className="font-body text-sm text-foreground-400 not-italic">
                  — Sun Ra, <span className="italic">Space Is the Place</span>
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}