import ScrollReveal from '@/components/base/ScrollReveal';

const thenNowData = [
  { label: 'THEN', year: '1974', items: ['Liberation', 'Dream', 'Utopia'], colorClass: 'text-foreground-950' },
  { label: 'NOW', year: '2026', items: ['Privilege', 'Industry', 'Controlled'], colorClass: 'text-accent-500' },
];

export default function SpaceFreedomSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-0 mb-16 md:mb-20">
          <ScrollReveal>
            <span className="inline-block font-label text-[0.65rem] tracking-[0.25em] uppercase text-foreground-400 border border-foreground-300/50 px-3 py-1.5 rounded-full whitespace-nowrap">
              THEN / NOW
            </span>
          </ScrollReveal>
          <div className="lg:ml-auto lg:w-[65%]">
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.88] tracking-tight text-foreground-950">
                SPACE = FREEDOM
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Content: Left text + Right comparison table */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Image + Text */}
          <div className="w-full lg:w-[48%]">
            <ScrollReveal delay={150}>
              <div className="rounded-2xl overflow-hidden border border-background-300/40 mb-8 md:mb-10">
                <img
                  src="https://static.readdy.ai/image/0efcf4a37b0dbf462ea2aae207f3f1fc/dec9cdedb53b6def60ed94d31550e09a.png"
                  alt="Utopian space landscape — freedom and transformation"
                  title="SPACE = FREEDOM utopian imagery"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed mb-4">
                In contrast to Earth, space in the film is imagined as a utopian alternative. It represents freedom, possibility, and the opportunity to create a new society. Space is not simply a physical location, but a conceptual space where new identities and futures can be formed. It is a place of hope, imagination, and transformation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed">
                This idea positions space as an escape from the constraints of Earth, offering a vision of liberation and renewal.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Then / Now comparison */}
          <div className="w-full lg:w-[52%]">
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-0 border-2 border-foreground-950">
                {thenNowData.map((column) => (
                  <div key={column.label} className={column.label === 'NOW' ? 'border-l-2 border-foreground-950' : ''}>
                    {/* Header */}
                    <div className="border-b-2 border-foreground-950 px-4 md:px-6 py-4 md:py-5">
                      <span className="font-label text-[0.6rem] tracking-[0.3em] uppercase text-foreground-400 block mb-1">
                        {column.label}
                      </span>
                      <span className={`font-heading text-2xl md:text-3xl ${column.colorClass}`}>
                        {column.year}
                      </span>
                    </div>
                    {/* Items */}
                    {column.items.map((item) => (
                      <div
                        key={item}
                        className={`border-b-2 border-foreground-950/20 last:border-b-0 px-4 md:px-6 py-5 md:py-6 transition-colors duration-300 hover:bg-background-200/50 cursor-default`}
                      >
                        <span className={`font-heading text-xl md:text-2xl lg:text-3xl tracking-wide ${column.colorClass}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Annotation */}
            <ScrollReveal delay={500}>
              <p className="font-body text-xs md:text-sm text-foreground-400 italic mt-4 text-right">
                The conceptual shift from 1974 to 2026
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}