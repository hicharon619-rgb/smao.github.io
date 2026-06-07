import ScrollReveal from '@/components/base/ScrollReveal';

export default function FinalStatementSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-44 px-4 md:px-6 bg-background-50">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Empty / gradient visual space */}
        <ScrollReveal>
          <div className="mx-auto w-full max-w-[600px] h-[200px] md:h-[260px] rounded-2xl overflow-hidden mb-14 md:mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background-800/80 via-background-700/40 to-background-50" />
            <div className="absolute inset-0 opacity-30" style={{
              background: 'radial-gradient(ellipse at center, oklch(0.3 0.01 250 / 0.5) 0%, transparent 70%)'
            }} />
          </div>
        </ScrollReveal>

        {/* Final title */}
        <ScrollReveal delay={150}>
          <h2 className="font-heading text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.95] tracking-tight text-foreground-950 mb-10 md:mb-14">
            SPACE IS<br />A SYSTEM,<br />NOT A SOLUTION.
          </h2>
        </ScrollReveal>

        {/* Body text */}
        <ScrollReveal delay={300}>
          <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed max-w-xl mx-auto mb-6">
            This reissue transforms Space Is the Place from a utopian vision into a critical reflection on the present planetary condition. It asks whether space still offers freedom, or whether it now reproduces the same inequalities found on Earth.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed max-w-xl mx-auto">
            By reimagining the film in relation to climate crisis, technological control, and unequal access, the project reopens the question of the future.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}