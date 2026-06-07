import ScrollReveal from '@/components/base/ScrollReveal';

export default function Reissue2026Section() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-background-50">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Image */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border border-background-300/40 mb-12 md:mb-16 mx-auto max-w-[800px]">
            <img
              src="https://static.readdy.ai/image/0efcf4a37b0dbf462ea2aae207f3f1fc/47a7764d7722d725a9c9b8f80bd65292.png"
              alt="Abstract planetary grid — design fiction aesthetic"
              title="REISSUE 2026 abstract planet grid"
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={150}>
          <span className="font-label text-[0.65rem] tracking-[0.25em] uppercase text-accent-500/80 mb-4 block">
            Design Fiction
          </span>
          <h2 className="font-heading text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-foreground-950 mb-8 md:mb-10">
            REISSUE 2026
          </h2>
        </ScrollReveal>

        {/* Body text */}
        <ScrollReveal delay={250}>
          <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16">
            In the original work of 1974, Sun Ra imagined space as a way out for Black people, a place to escape oppression and recreate the future. By 2026, this setting still holds, but the focus shifts. The question is no longer only whether we are oppressed, but whether the Earth itself is still suitable for freedom, survival, and real existence.
          </p>
        </ScrollReveal>

        {/* The big question */}
        <ScrollReveal delay={350}>
          <h3 className="font-heading text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.92] tracking-tight text-accent-500 italic mb-10 md:mb-12">
            WHO GETS TO<br />LEAVE EARTH?
          </h3>
        </ScrollReveal>

        {/* Side questions */}
        <ScrollReveal delay={500}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 text-foreground-400">
            <span className="font-body italic text-sm md:text-base">
              Who decides?
            </span>
            <span className="hidden sm:block text-foreground-300">|</span>
            <span className="font-body italic text-sm md:text-base">
              Who is excluded?
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}