import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "menu", label: "Menu" },
  { id: "desserts", label: "Desserts" },
  { id: "reserve", label: "Reserve" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scrolling to enable glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section for active status link
      const scrollPosition = window.scrollY + 150;
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? "background-blur shadow-2xl bg-brand-bg/85 py-3 border-b border-brand-gold/10"
            : "bg-transparent py-5"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(16px)" : "none",
        }}
      >
        {/* Left: Brand Logo */}
        <div
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&auto=format&fit=crop&q=80"
            alt="BrewCraft Logo"
            className="w-8 h-8 rounded-full object-cover border border-brand-gold/40 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-brand-gold/5"
          />
          <span className="font-serif italic text-2xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-350">
            BrewCraft
          </span>
        </div>

        {/* Center: Main Nav Links */}
        <div id="nav-desktop-links" className="hidden md:flex items-center gap-8 relative">
          {NAV_LINKS.map((link) => (
            <button
              id={`nav-link-${link.id}`}
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-2 font-sans font-normal text-lg tracking-wider cursor-pointer hover:text-brand-gold transition-colors duration-300 ${
                activeId === link.id ? "text-brand-gold font-medium" : "text-brand-cream/70"
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right: Reserve Table Button */}
        <div id="nav-desktop-actions" className="hidden md:block">
          <button
            id="nav-reserve-btn"
            onClick={() => handleNavClick("reserve")}
            className="border border-brand-gold text-brand-gold font-sans font-medium text-sm tracking-widest uppercase px-6 py-2.5 rounded-sm hover:bg-brand-caramel hover:text-brand-bg hover:border-brand-caramel transition-all duration-300 ease-out active:scale-95 cursor-pointer shadow-lg shadow-brand-gold/5"
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile: Hamburger trigger */}
        <div id="nav-mobile-trigger" className="md:hidden">
          <button
            id="hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            className="text-brand-cream p-1 cursor-pointer focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 hover:text-brand-gold transition-colors duration-350" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-bg/95 backdrop-blur-md z-50 flex flex-col md:hidden"
          >
            {/* Header row in mobile screen */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-gold/10">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&auto=format&fit=crop&q=80"
                  alt="BrewCraft Logo"
                  className="w-8 h-8 rounded-full object-cover border border-brand-gold/40 shadow-md shadow-brand-gold/5"
                />
                <span className="font-serif italic text-2xl font-bold text-brand-cream">
                  BrewCraft
                </span>
              </div>
              <button
                id="close-hamburger-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-cream p-1 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 hover:text-brand-gold transition-colors duration-350" />
              </button>
            </div>

            {/* Link body */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-12">
              {NAV_LINKS.map((link) => (
                <button
                  id={`nav-mobile-link-${link.id}`}
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-2xl font-sans tracking-widest font-normal hover:text-brand-gold ${
                    activeId === link.id ? "text-brand-gold font-medium" : "text-brand-cream/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                id="nav-mobile-reserve-btn"
                onClick={() => handleNavClick("reserve")}
                className="mt-6 border border-brand-gold text-brand-gold font-sans font-medium text-base tracking-widest uppercase px-10 py-3.5 rounded-sm hover:bg-brand-caramel hover:text-brand-bg hover:border-brand-caramel transition-all duration-300"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
