import { motion } from "motion/react";
import { ArrowDown, Play } from "lucide-react";
import CanvasBeans from "./CanvasBeans";
import { STATS } from "../data";

export default function HeroSection() {
  const headlineWords = "Every Sip, A Perfect Story".split(" ");

  const handleScrollToNext = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToStory = () => {
    const element = document.getElementById("story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#0d0500]"
    >
      {/* Absolute Canvas Background */}
      <CanvasBeans />

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center mt-6">
        
        {/* Animated Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel px-6 py-2 rounded-full flex items-center gap-3 mb-8 hover:border-brand-gold/40 transition-colors duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
          </span>
          <span className="font-sans text-xs tracking-[0.2em] font-medium text-brand-cream/90 uppercase">
            Seasonal Collection Now Available
          </span>
        </motion.div>

        {/* Headline: Each word animates in with blur filter staggered */}
        <h1 
          id="hero-title"
          className="font-serif italic font-normal text-5xl md:text-8xl lg:text-[92px] leading-tight text-brand-cream mb-6 tracking-tight drop-shadow-xl"
        >
          {headlineWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, filter: "blur(20px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + idx * 0.18,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block mr-3 md:mr-5 hover:text-brand-gold transition-colors duration-300"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans font-light text-brand-cream/80 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 tracking-wide"
        >
          Handcrafted with the world's finest beans. From bold espressos to velvety cold brews, discover coffee that elevates your day.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full max-w-sm sm:max-w-none"
        >
          <button
            id="hero-btn-menu"
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto bg-brand-caramel hover:bg-brand-caramel/90 text-[#0d0500] font-sans font-medium text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-caramel/15 cursor-pointer hover:shadow-brand-caramel/30 transition-all duration-300"
          >
            Explore Menu
          </button>
          
          <button
            id="hero-btn-story"
            onClick={handleScrollToStory}
            className="w-full sm:w-auto border border-brand-gold/60 hover:border-brand-gold text-brand-gold/90 hover:text-brand-gold font-sans font-medium text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-brand-gold/5 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-brand-gold" />
            Watch Our Story
          </button>
        </motion.div>

        {/* Side-by-side Stat Cards */}
        <motion.div
          id="hero-stats"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="flex gap-6 justify-center items-center flex-wrap"
        >
          {STATS.map((stat) => (
            <div
              key={stat.id}
              id={stat.id}
              className="glass-panel px-8 py-4 rounded-sm min-w-[170px] hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="font-serif italic text-3xl font-semibold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-xs tracking-widest text-brand-cream/60 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator: animated bouncing arrow at bottom center */}
      <motion.div
        id="scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-cream font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 text-brand-gold" />
        </div>
      </motion.div>
    </section>
  );
}
