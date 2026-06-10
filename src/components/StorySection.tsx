import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = imgContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative mouse coordinates from center of container (pixels)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Turn into rotation ranges (-15deg to +15deg)
    const rotateX = -(mouseY / (height / 2)) * 15;
    const rotateY = (mouseX / (width / 2)) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleScrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="story"
      className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-10 bg-[#0d0500] overflow-hidden"
    >
      <div 
        id="story-split-container" 
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        
        {/* Left Side: Brand Story Copy */}
        <div 
          id="story-text-container" 
          className="fade-left flex flex-col items-start text-left"
        >
          {/* Caravan kicker */}
          <span className="font-sans text-brand-caramel/90 tracking-[0.25em] text-sm uppercase font-semibold mb-4">
            // Our Story
          </span>
          
          {/* Main Title */}
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-brand-cream/95 leading-tight mb-6">
            Made with Heart, Served with Love
          </h2>
          
          {/* Descriptive Body Copy */}
          <p className="font-sans font-light text-brand-cream/70 text-lg leading-relaxed mb-6 tracking-wide">
            At BrewCraft, coffee is not just a daily beverage. It is an exploration of meticulous craftsmanship.
            Our journey began in 2012 with a simple vision: to curate single-origin heritage beans from tiny, 
            high-altitude farms globally, and bring their vibrant, natural stories straight to your morning cup.
          </p>

          <p className="font-sans font-light text-brand-cream/65 text-base leading-relaxed mb-8 tracking-wide">
            Under the guidance of our roasters, each roast batch is managed under slow, controlled temperatures to unlock
            delicate fruit accents, caramels, and smooth cocoa finishes. Every espresso run we pull is handled with heart, 
            striving to make every single sip a perfect memory.
          </p>

          {/* Transform sliding arrow button */}
          <button
            id="story-discover-btn"
            onClick={handleScrollToMenu}
            className="group flex items-center gap-3 font-sans font-medium text-sm tracking-[0.2em] uppercase text-brand-caramel hover:text-brand-gold transition-colors duration-300 cursor-pointer focus:outline-none"
          >
            Discover More
            <ArrowRight className="w-4 h-4 transition-transform duration-350 ease-out group-hover:translate-x-2" />
          </button>
        </div>

        {/* Right Side: Image Circular + 3D Tilt + Spin Ring */}
        <div 
          id="story-img-container" 
          className="fade-right flex items-center justify-center relative mt-8 md:mt-0"
        >
          {/* Ring Wrap */}
          <div
            ref={imgContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] flex items-center justify-center cursor-pointer select-none"
            style={{
              perspective: "1000px",
            }}
          >
            {/* Spinning decorative gold dashed ring */}
            <div
              id="story-decor-ring"
              className="absolute inset-0 border border-dashed border-brand-gold/30 rounded-full animate-spin-slow p-3 pointer-events-none"
              style={{
                borderRadius: "50%",
                // Expand slightly on hover
                transform: isHovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Inner crop image block with dynamic 3D tilt */}
            <div
              id="story-3d-image-item"
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-gold/20 shadow-2xl flex items-center justify-center"
              style={{
                borderRadius: "50%",
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: isHovered 
                  ? "0 25px 50px -12px rgba(212,168,83,0.15)"
                  : "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
                alt="BrewCraft Premium Coffee Sourcing"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: isHovered ? "scale(1.06)" : "scale(1)",
                }}
                referrerPolicy="no-referrer"
              />
              
              {/* Coffee glass glaze overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-brown/10 to-transparent pointer-events-none mix-blend-overlay" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
