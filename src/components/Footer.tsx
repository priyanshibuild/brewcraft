import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="app-footer"
      className="relative bg-[#080300] border-t border-brand-gold/10 pt-24 pb-12 px-6 md:px-12 w-full overflow-hidden z-10"
    >
      {/* 4. Scattered coffee bean SVGs in corners as background illustrations */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-5 hover:opacity-10 transition-opacity duration-500 scale-75 select-none">
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="35" rx="20" ry="30" fill="#D4A853" transform="rotate(-30 30 35)" />
          <path d="M12 45C22 35 38 35 48 25" stroke="#0d0500" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 pointer-events-none opacity-5 hover:opacity-10 transition-opacity duration-500 scale-90 select-none">
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="35" rx="20" ry="30" fill="#D4A853" transform="rotate(45 30 35)" />
          <path d="M10 25C22 28 38 42 50 45" stroke="#0d0500" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top: Logo + Tagline */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-brand-gold/5 pb-12">
          {/* Logo */}
          <div 
            onClick={() => handleScrollToSection("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&auto=format&fit=crop&q=80"
              alt="BrewCraft Logo"
              className="w-10 h-10 rounded-full object-cover border border-brand-gold/40 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-brand-gold/5"
            />
            <span className="font-serif italic text-3xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
              BrewCraft
            </span>
          </div>

          {/* Tagline */}
          <p className="font-sans font-light italic text-base text-brand-cream/60 max-w-sm text-center md:text-right tracking-wide leading-relaxed">
            "Brewed with pure passion and dedication since 2012."
          </p>
        </div>

        {/* Middle: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Menu links */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif italic text-lg text-brand-gold font-normal tracking-wide">
              Selected Menu
            </h4>
            <ul className="flex flex-col items-start gap-2.5">
              <li>
                <button
                  onClick={() => handleScrollToSection("menu")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Hot Brewing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("menu")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Slow Steeped Iced
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("desserts")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Artisan Pâtisserie
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: About brand links */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif italic text-lg text-brand-gold font-normal tracking-wide">
              About Us
            </h4>
            <ul className="flex flex-col items-start gap-2.5">
              <li>
                <button
                  onClick={() => handleScrollToSection("story")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Our Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("features")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Coffee Farmer Co-ops
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("story")}
                  className="font-sans font-light text-sm text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
                >
                  Roasting Science
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit info */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif italic text-lg text-brand-gold font-normal tracking-wide">
              Visit Co.
            </h4>
            <ul className="flex flex-col items-start gap-2.5 text-left">
              <li className="font-sans font-light text-sm text-brand-cream/60 leading-relaxed">
                120 Coffee Guild Way,<br />
                San Francisco, CA 94103
              </li>
              <li className="font-sans font-light text-sm text-brand-cream/60 leading-relaxed">
                Mon - Fri: 7am - 10pm<br />
                Sat - Sun: 8am - 11pm
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us + Socials */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif italic text-lg text-brand-gold font-normal tracking-wide">
              Follow Us
            </h4>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-brown/30 border border-brand-gold/15 flex items-center justify-center text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/45 hover:bg-brand-brown/50 transition-all duration-300 active:scale-95"
                aria-label="Follow BrewCraft on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-brown/30 border border-brand-gold/15 flex items-center justify-center text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/45 hover:bg-brand-brown/50 transition-all duration-300 active:scale-95"
                aria-label="Follow BrewCraft on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-brown/30 border border-brand-gold/15 flex items-center justify-center text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/45 hover:bg-brand-brown/50 transition-all duration-300 active:scale-95"
                aria-label="Follow BrewCraft on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* TikTok Custom SVG */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-brown/30 border border-brand-gold/15 flex items-center justify-center text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/45 hover:bg-brand-brown/50 transition-all duration-300 active:scale-95"
                aria-label="Follow BrewCraft on TikTok"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.11.95 2.53 1.44 3.97 1.51v3.91a8.91 8.91 0 0 1-5.08-1.57v7.66c0 2.22-.84 4.39-2.4 5.92-1.92 1.84-4.7 2.69-7.39 2.14-2.8-.46-5.26-2.58-6.14-5.3-1.04-3.13.11-6.73 2.76-8.62a8.66 8.66 0 0 1 5.25-1.74c.26 0 .53.01.79.03V12a4.42 4.42 0 0 0-4.04 4.54 4.49 4.49 0 0 0 4.37 4.5c2.3.13 4.4-1.51 4.7-3.79c.07-.37.09-.76.09-1.14V0h-.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-gold/5 pt-8 text-center select-none">
          <p className="font-sans font-light text-xs text-brand-cream/40">
            &copy; 2026 BrewCraft. All Rights Reserved.
          </p>
          <p className="font-sans font-light text-xs text-brand-cream/40 flex items-center gap-1.5 justify-center">
            Made with <span className="text-sm">☕</span> &amp; Love
          </p>
        </div>

      </div>
    </footer>
  );
}
