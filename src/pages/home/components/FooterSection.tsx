import ScrollReveal from '@/components/base/ScrollReveal';

export default function FooterSection() {
  return (
    <footer className="relative w-full px-4 md:px-6 pb-10 md:pb-14 pt-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-background-900 rounded-2xl px-8 md:px-14 py-14 md:py-20 overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
            <span className="font-heading text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none text-background-50 whitespace-nowrap">
              SPACE IS THE PLACE
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1: Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <ScrollReveal>
                <h3 className="font-heading text-2xl md:text-3xl text-background-50 leading-tight mb-6">
                  SPACE IS<br />THE PLACE
                </h3>
                <p className="font-body text-sm text-background-50/40 leading-relaxed">
                  Reissued for 2026
                </p>
              </ScrollReveal>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <ScrollReveal delay={100}>
                <h4 className="font-label text-[0.6rem] tracking-[0.25em] uppercase text-background-50/60 mb-5">
                  NAVIGATION
                </h4>
                <ul className="space-y-3">
                  {['Original Signal', 'Earth = Control', 'Space = Freedom', 'Space in the Present', 'Reissue 2026'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s*=\s*/g, '-').replace(/\s+/g, '-')}`}
                        className="font-body text-sm text-background-50/50 hover:text-background-50/80 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Column 3: Transmission */}
            <div>
              <ScrollReveal delay={200}>
                <h4 className="font-label text-[0.6rem] tracking-[0.25em] uppercase text-background-50/60 mb-5">
                  TRANSMISSION
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="font-body text-sm text-background-50/50 hover:text-background-50/80 transition-colors duration-200 flex items-center gap-2">
                      <i className="ri-instagram-line text-base"></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-body text-sm text-background-50/50 hover:text-background-50/80 transition-colors duration-200 flex items-center gap-2">
                      <i className="ri-youtube-line text-base"></i>
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-body text-sm text-background-50/50 hover:text-background-50/80 transition-colors duration-200 flex items-center gap-2">
                      <i className="ri-facebook-line text-base"></i>
                      Facebook
                    </a>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

            {/* Column 4: Credits */}
            <div>
              <ScrollReveal delay={300}>
                <h4 className="font-label text-[0.6rem] tracking-[0.25em] uppercase text-background-50/60 mb-5">
                  CREDITS
                </h4>
                <div className="space-y-2">
                  <p className="font-body text-sm text-background-50/40">
                    
                  </p>
                  <p className="font-body text-sm text-background-50/40">
                    
                  </p>
                  <p className="font-body text-sm text-background-50/40">
                    CDS3001 Planetary Publishing
                  </p>
                  <p className="font-body text-sm text-background-50/40 mt-3">
                    Shiyu Mao
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom line */}
          <div className="relative z-10 mt-12 md:mt-16 pt-8 border-t border-background-50/10">
            <ScrollReveal delay={400}>
              <p className="font-body text-sm text-background-50/30 italic text-center">
                The signal does not end here.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}