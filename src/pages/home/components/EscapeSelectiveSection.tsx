import ScrollReveal from '@/components/base/ScrollReveal';

export default function EscapeSelectiveSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Two images stacked */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 md:gap-8">
            <ScrollReveal delay={100}>
              <span className="inline-block font-label text-[0.65rem] tracking-[0.25em] uppercase text-accent-500 border border-accent-500/40 px-3 py-1.5 rounded-full mb-2">
                2026 CONDITION
              </span>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-xl overflow-hidden border border-background-300/40 glitch">
                <img
                  src="https://static.readdy.ai/image/0efcf4a37b0dbf462ea2aae207f3f1fc/7547e1f6c9212d1a0a588eb4319f4e00.png"
                  alt="Digital dystopia — glitch, surveillance, algorithmic control"
                  title="Escape is selective surveillance imagery"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="rounded-xl overflow-hidden border border-background-300/40">
                <img
                  src="https://storage.readdy-site.link/project_files/4ed05e63-281d-450d-92e7-0000c4086451/233b984d-7ee8-4ba4-9b33-20f7fdc9326b_Industrialization-increases-environmental-pollution-on-a-large-scale.webp?v=dfc402fd6f0136693d3b926f5402828e"
                  alt="Environmental destruction — polluted Earth, extraction crisis"
                  title="Escape is selective environmental crisis"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="font-heading text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-tight text-foreground-950 mb-8 md:mb-10">
                Escape is<br />
                <span className="text-accent-500">selective.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-5">
                In 2026, the climate crisis has made Earth increasingly uninhabitable. Platforms and algorithms are controlling people&rsquo;s attention and labor. Deepfaking and information manipulation have weakened the sense of reality. The housing crisis and the wealth gap have made living space increasingly unequal. Wars and displacement have also turned leaving into a forced act.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed">
                In this context, the reissued work reimagines space not simply as escape, but as a place that rejects the old order and reorganizes the future.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}