import ScrollReveal from '@/components/base/ScrollReveal';

export default function SpacePresentSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Main content card */}
        <div className="relative bg-background-800 rounded-2xl overflow-hidden">
          <div className="scanlines absolute inset-0 pointer-events-none z-10" />

          <div className="flex flex-col lg:flex-row">
            {/* Left: Crisis Earth image */}
            <div className="w-full lg:w-[42%] relative">
              <div className="relative h-[350px] md:h-[450px] lg:h-full min-h-[400px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Dystopian%20earth%20from%20space%20environmental%20crisis%20climate%20change%20visual%20pollution%20scanlines%20digital%20noise%20glitch%20effect%20surveillance%20aesthetic%20muted%20colors%20low%20saturation%20damaged%20film%20texture%20editorial%20design%20fiction%20warning%20aesthetic%20dark%20atmospheric%20orbital%20view%20degradation&width=900&height=1100&seq=space-present-crisis-06&orientation=portrait"
                  alt="Dystopian Earth from space — environmental crisis"
                  title="SPACE IN THE PRESENT crisis imagery"
                  className="w-full h-full object-cover"
                />
                {/* Red warning overlay strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-accent-500/90 py-3 px-4 text-center warning-flash">
                  <span className="font-label text-xs md:text-sm tracking-[0.3em] uppercase text-background-50">
                    ! Earth is in crisis !
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="w-full lg:w-[58%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <ScrollReveal>
                <div className="mb-6 md:mb-8">
                  <span className="font-label text-[0.65rem] tracking-[0.25em] uppercase text-accent-400/80 mb-3 block">
                    2026
                  </span>
                  <h2 className="font-heading text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.9] tracking-tight text-background-50">
                    SPACE IN<br />THE PRESENT
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <p className="font-body text-sm md:text-base text-background-50/80 leading-relaxed mb-5">
                  In 2026, space is no longer a utopia. It is a controlled system owned by corporations and governments. Access is limited, and only selected individuals can leave Earth.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="font-body text-sm md:text-base text-background-50/70 leading-relaxed mb-8">
                  Today, Earth is facing multiple interconnected crises. Climate change, environmental degradation, and resource depletion are transforming the planet into an increasingly unstable system. At the same time, social and economic inequalities continue to shape how people experience these conditions. Not everyone is equally affected, and not everyone has the same capacity to respond or adapt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <p className="font-body text-sm md:text-base text-background-50/60 leading-relaxed">
                  Earth is no longer simply a home, but a complex and fragile system under pressure.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}