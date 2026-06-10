import { FEATURES } from "../data";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-10 bg-[#0d0500]"
    >
      <div 
        id="features-grid" 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {FEATURES.map((feat, idx) => (
          <div
            key={feat.id}
            id={feat.id}
            className="glass-panel p-10 rounded-sm flex flex-col items-center text-center group cursor-default transition-all duration-500 ease-out hover:-translate-y-3 hover:border-brand-gold/50 hover:shadow-2xl hover:shadow-brand-gold/5 fade-up"
            style={{
              animationDelay: `${idx * 0.4}s`,
              animationDuration: "4s",
            }}
          >
            {/* Float wrapper with custom inline delay */}
            <div 
              className="animate-float" 
              style={{ animationDelay: `${idx * 0.4}s` }}
            >
              {/* Icon / Emblem */}
              <div 
                id={`${feat.id}-icon`}
                className="w-16 h-16 rounded-full bg-brand-brown/40 border border-brand-gold/15 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:border-brand-gold/40 transition-all duration-300"
              >
                {feat.icon}
              </div>
            </div>

            {/* Title */}
            <h3 
              id={`${feat.id}-title`}
              className="font-serif italic font-normal text-2xl text-brand-cream/90 group-hover:text-brand-gold transition-colors duration-300 mb-4"
            >
              {feat.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-[1px] bg-brand-gold/20 group-hover:w-20 group-hover:bg-brand-gold/50 transition-all duration-500 mb-4" />

            {/* Description */}
            <p 
              id={`${feat.id}-desc`}
              className="font-sans font-light text-brand-cream/60 group-hover:text-brand-cream/80 transition-colors duration-300 text-base leading-relaxed"
            >
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
