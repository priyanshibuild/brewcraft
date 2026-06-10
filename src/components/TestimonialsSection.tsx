import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialsSection() {
  const [starsVisible, setStarsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-28 px-6 md:px-12 w-full max-w-7xl mx-auto z-10 bg-[#0d0500]"
    >
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-24">
        <span className="font-sans text-brand-caramel/90 tracking-[0.25em] text-sm uppercase font-semibold mb-4 fade-up">
          // Reviews
        </span>
        <h2 className="font-serif italic text-4xl md:text-5xl text-brand-cream/95 leading-tight line-draw pb-2 fade-up">
          What Our Guests Say
        </h2>
        <p className="font-sans font-light text-brand-cream/50 mt-4 max-w-md text-base tracking-widest uppercase fade-up">
          Real moments of joy shared by milk & espresso lovers
        </p>
      </div>

      {/* Staggered Arc/Wave Grid on Desktop */}
      <div 
        id="testimonials-deck" 
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center"
      >
        {TESTIMONIALS.map((testi, idx) => {
          // Calculate specific customized animation dynamics inline
          const customSway = {
            animation: "sway 5.2s ease-in-out infinite",
            animationDelay: testi.swayDelay,
            animationDirection: idx % 2 === 0 ? ("normal" as const) : ("reverse" as const),
          };

          return (
            <div
              key={testi.id}
              id={testi.id}
              className={`glass-panel p-8 rounded-sm shrink-0 flex flex-col items-center text-center relative group select-none border border-brand-gold/15 hover:border-brand-gold/40 transition-all duration-500 scale-in ${testi.offsetY}`}
              style={customSway}
            >
              {/* Initials Avatar Orb */}
              <div 
                id={`${testi.id}-avatar`}
                className="w-16 h-16 rounded-full bg-brand-brown/40 border border-brand-gold/20 flex items-center justify-center font-serif italic text-2xl text-brand-gold font-bold mb-6 group-hover:scale-105 group-hover:border-brand-gold/50 transition-all duration-300"
              >
                {testi.initials}
              </div>

              {/* Animating Stars Section */}
              <div 
                id={`${testi.id}-stars`}
                className="flex items-center gap-1.5 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                    style={{
                      opacity: starsVisible ? 1 : 0,
                      transform: starsVisible ? "scale(1)" : "scale(0.3)",
                      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.15 + i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote 
                id={`${testi.id}-quote`}
                className="font-sans italic font-light text-brand-cream/80 text-lg leading-relaxed mb-6"
              >
                "{testi.quote}"
              </blockquote>

              {/* Under-quote divider */}
              <div className="w-8 h-[1px] bg-brand-gold/15 group-hover:w-16 transition-all duration-500 mb-6" />

              {/* Citation */}
              <div id={`${testi.id}-citation`}>
                <cite className="not-italic font-serif text-xl tracking-wide text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                  {testi.name}
                </cite>
                <div className="font-sans text-[11px] tracking-[0.2em] text-brand-cream/55 uppercase mt-1">
                  {testi.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
