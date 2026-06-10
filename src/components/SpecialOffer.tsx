import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SpecialOffer() {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          let current = 0;
          const target = 20;
          const duration = 1200; // Total counter duration
          const intervalTime = Math.floor(duration / target);

          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(interval);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <section
      ref={sectionRef}
      id="special-offer"
      className="relative py-28 px-6 md:px-12 w-full overflow-hidden bg-gradient-to-r from-brand-bg to-[#150a04] border-y border-brand-gold/10 z-10"
    >
      {/* 1. Diagonal metallic light sweep effect */}
      <div 
        className="absolute inset-0 w-[300%] h-full pointer-events-none"
        style={{
          background: "linear-gradient(115deg, transparent 40%, rgba(212, 168, 83, 0.04) 48%, rgba(255, 230, 200, 0.08) 50%, rgba(212, 168, 83, 0.04) 52%, transparent 60%)",
          transform: "translateX(-30%)",
          animation: "sweep 7s ease-in-out infinite",
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep {
          0% { transform: translateX(-60%); }
          100% { transform: translateX(20%); }
        }
      ` }} />

      <div 
        id="offer-contents" 
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Animated large counter circle block */}
        <div id="offer-counter-orb" className="relative w-44 h-44 rounded-full border border-brand-gold/25 flex flex-col items-center justify-center bg-brand-bg/60 backdrop-blur-md mb-8 hover:border-brand-gold/50 transition-colors duration-300 shadow-2xl scale-in">
          <div className="absolute inset-2 border border-brand-gold/10 rounded-full border-dashed" />
          <span 
            id="offer-counter-val" 
            className="font-serif italic text-6xl font-bold text-brand-gold select-none"
          >
            {count}%
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-brand-cream/60 uppercase mt-1">
            Off Today
          </span>
        </div>

        {/* Text Area */}
        <h2 className="font-serif italic text-4xl md:text-6xl text-brand-cream/95 leading-tight mb-4 tracking-tight fade-up">
          20% Off Your First Order
        </h2>
        
        <p className="font-sans font-light text-brand-cream/75 text-xl max-w-xl mb-10 tracking-wide fade-up">
          Because great days start with great coffee. Claim this exclusive digital ticket and unlock your barista-crafted tasting flight.
        </p>

        {/* Button: coffee fill clip-path effect */}
        <div className="fade-up">
          <button
            id="claim-offer-btn"
            onClick={() => setIsClaimed(true)}
            disabled={isClaimed}
            className="group relative px-10 py-5 rounded-sm border border-brand-caramel font-sans font-medium text-sm tracking-[0.2em] uppercase text-brand-caramel hover:text-brand-bg cursor-pointer select-none overflow-hidden transition-colors duration-500 shadow-xl disabled:pointer-events-none"
          >
            {/* The absolute sliding filling coffee layer */}
            <span
              className="absolute inset-0 bg-brand-caramel transition-all duration-500 ease-out z-0 pointer-events-none"
              style={{
                clipPath: isClaimed ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                // In Normal state, we also fill from bottom on hover
              }}
            />
            {/* Hover visual fill style */}
            {!isClaimed && (
              <span
                className="absolute inset-0 bg-brand-caramel opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none"
                style={{
                  clipPath: "inset(100% 0 0 0)",
                }}
              />
            )}
            
            <style dangerouslySetInnerHTML={{ __html: `
              #claim-offer-btn:hover span {
                clip-path: inset(0% 0 0 0) !important;
              }
            ` }} />

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2 justify-center">
              {isClaimed ? (
                <>
                  <Check className="w-4 h-4 text-brand-bg animate-scale-in" />
                  Code: BREWCRAFT20 Claimed
                </>
              ) : (
                "Claim Offer"
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
