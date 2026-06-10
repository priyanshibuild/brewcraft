import { useState } from "react";
import { DESSERTS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function DessertsSection() {
  const [orderModal, setOrderModal] = useState<string | null>(null);

  const handleOrder = (dessertName: string) => {
    setOrderModal(dessertName);
    setTimeout(() => {
      setOrderModal(null);
    }, 2500);
  };

  return (
    <section 
      id="desserts" 
      className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-10 bg-[#0d0500]"
    >
      {/* Title with Gold Line Draw */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-serif italic text-4xl md:text-5xl text-brand-cream/95 font-normal leading-tight line-draw pb-2 fade-up">
          Sweet Endings
        </h2>
        <p className="font-sans font-light text-brand-cream/50 mt-4 max-w-md text-base tracking-widest uppercase fade-up">
          Exquisite freshly-baked treats to complement your roast
        </p>
      </div>

      {/* Grid */}
      <div 
        id="desserts-grid" 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {DESSERTS.map((des) => (
          <div
            key={des.id}
            id={des.id}
            className="glass-panel rounded-sm overflow-hidden flex flex-col group cursor-pointer border border-brand-gold/15 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/10 fade-up"
          >
            {/* Card Image */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <img
                src={des.image}
                alt={des.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-80" />
              
              {/* Floating Price */}
              <div className="absolute top-4 right-4 bg-brand-bg/90 border border-brand-gold/30 font-serif italic text-brand-gold px-3 py-1 rounded-sm text-sm tracking-wide shadow-md">
                {des.price}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col relative overflow-hidden min-h-[140px]">
              <div className="flex-1 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif italic text-2xl text-brand-cream/90 group-hover:text-brand-gold transition-colors duration-300 mb-2">
                  {des.name}
                </h3>
                <p className="font-sans font-light text-brand-cream/65 text-sm leading-relaxed mb-4">
                  {des.description}
                </p>
              </div>

              {/* Slider-up Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pt-0 bg-transparent transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex justify-center">
                <button
                  onClick={() => handleOrder(des.name)}
                  className="w-full bg-brand-caramel text-brand-bg font-sans font-medium text-xs tracking-widest uppercase py-2 hover:bg-brand-gold transition-all duration-300 rounded-sm shadow-md cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Real Toast Notification for Order Actions */}
      <AnimatePresence>
        {orderModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 glass-panel border border-brand-gold bg-brand-bg/95 z-50 px-8 py-4 rounded-sm shadow-2xl flex items-center gap-3"
          >
            <span className="text-xl">🍰</span>
            <span className="font-sans text-brand-cream tracking-wide">
              Selected <strong className="text-brand-gold font-normal italic font-serif">{orderModal}</strong>! Preparing your sweet indulgence...
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
