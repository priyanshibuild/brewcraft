import React, { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Users, Check } from "lucide-react";

export default function ReserveSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2 Guests",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all details.");
      return;
    }

    setIsSubmitting(true);

    // Run the coffee-fill submission loading animation for 1.8 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "2 Guests",
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="reserve"
      className="relative py-28 px-6 md:px-12 w-full max-w-7xl mx-auto z-10 bg-[#0d0500]"
    >
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-sans text-brand-caramel/90 tracking-[0.25em] text-sm uppercase font-semibold mb-4 fade-up">
          // Reservation
        </span>
        <h2 className="font-serif italic text-4xl md:text-5xl text-brand-cream/95 leading-tight line-draw pb-2 fade-up">
          Reserve a Table
        </h2>
        <p className="font-sans font-light text-brand-cream/50 mt-4 max-w-md text-base tracking-widest uppercase fade-up">
          Secure private alcoves, firesides, or bar-side lounges
        </p>
      </div>

      <div 
        id="reservation-split" 
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch"
      >
        
        {/* Left: Interactive reservation form */}
        <div 
          id="reservation-form-container" 
          className="md:col-span-7 glass-panel p-8 md:p-10 rounded-sm flex flex-col justify-between border border-brand-gold/15 fade-left"
        >
          {isSubmitted ? (
            <div 
              id="reservation-success-box" 
              className="flex-1 flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-brand-caramel flex items-center justify-center mb-6 animate-bounce shadow-lg shadow-brand-caramel/20">
                <Check className="w-8 h-8 text-[#0d0500]" />
              </div>
              <h3 className="font-serif italic text-3xl text-brand-gold mb-3">
                Your Table is Secured
              </h3>
              <p className="font-sans font-light text-brand-cream/80 text-base max-w-md leading-relaxed mb-6">
                Thank you, <strong className="font-normal text-brand-cream">{formData.name}</strong>. We have reserved an artisan space for <strong className="font-normal text-brand-cream">{formData.guests}</strong> on <span className="text-brand-gold italic font-serif">{formData.date}</span> at <span className="text-brand-gold italic font-serif">{formData.time}</span>. A booking slip has been sent to <span className="text-brand-cream/60">{formData.email}</span>.
              </p>
              <button
                onClick={handleResetForm}
                className="border border-brand-gold/40 text-brand-gold hover:text-brand-cream hover:border-brand-gold font-sans font-medium text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-brand-gold/10 transition-all duration-300 cursor-pointer"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form 
              id="booking-form" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div 
                  className="space-y-2"
                  style={{ transitionDelay: "100ms" }}
                >
                  <label htmlFor="reserve-name" className="block font-sans text-xs tracking-widest text-brand-cream/60 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="reserve-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full glass-panel border border-brand-gold/15 hover:border-brand-gold/30 rounded-sm py-3 px-4 font-sans text-brand-cream text-base placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-caramel focus:border-brand-caramel transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,149,108,0.15)] bg-brand-bg/40"
                  />
                </div>

                {/* Email */}
                <div 
                  className="space-y-2"
                  style={{ transitionDelay: "150ms" }}
                >
                  <label htmlFor="reserve-email" className="block font-sans text-xs tracking-widest text-brand-cream/60 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="reserve-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full glass-panel border border-brand-gold/15 hover:border-brand-gold/30 rounded-sm py-3 px-4 font-sans text-brand-cream text-base placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-caramel focus:border-brand-caramel transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,149,108,0.15)] bg-brand-bg/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div 
                  className="space-y-2"
                  style={{ transitionDelay: "200ms" }}
                >
                  <label htmlFor="reserve-date" className="block font-sans text-xs tracking-widest text-brand-cream/60 uppercase flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-caramel" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="reserve-date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full glass-panel border border-brand-gold/15 hover:border-brand-gold/30 rounded-sm py-3 px-4 font-sans text-brand-cream text-base placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-caramel focus:border-brand-caramel transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,149,108,0.15)] bg-brand-bg/40"
                  />
                </div>

                {/* Time */}
                <div 
                  className="space-y-2"
                  style={{ transitionDelay: "250ms" }}
                >
                  <label htmlFor="reserve-time" className="block font-sans text-xs tracking-widest text-brand-cream/60 uppercase flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-caramel" />
                    Time
                  </label>
                  <input
                    type="time"
                    id="reserve-time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full glass-panel border border-brand-gold/15 hover:border-brand-gold/30 rounded-sm py-3 px-4 font-sans text-brand-cream text-base placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-caramel focus:border-brand-caramel transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,149,108,0.15)] bg-brand-bg/40"
                  />
                </div>

                {/* Guests */}
                <div 
                  className="space-y-2"
                  style={{ transitionDelay: "300ms" }}
                >
                  <label htmlFor="reserve-guests" className="block font-sans text-xs tracking-widest text-brand-cream/60 uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-caramel" />
                    Guests
                  </label>
                  <select
                    id="reserve-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full glass-panel border border-brand-gold/15 hover:border-brand-gold/30 rounded-sm py-3 px-4 font-sans text-brand-cream text-base focus:outline-none focus:ring-1 focus:ring-brand-caramel focus:border-brand-caramel transition-all duration-300 focus:shadow-[0_0_15px_rgba(200,149,108,0.15)] bg-brand-bg/90 cursor-pointer"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5-6 Guests">5 - 6 Guests</option>
                    <option value="Large Party">Large Party (6+)</option>
                  </select>
                </div>
              </div>

              {/* Submit: Reserve Now with coffee-fill state animation */}
              <div className="pt-4" style={{ transitionDelay: "350ms" }}>
                <button
                  type="submit"
                  id="submit-reserve-btn"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 rounded-sm border border-brand-gold font-sans font-semibold text-sm tracking-[0.2em] uppercase text-brand-gold hover:text-brand-bg cursor-pointer select-none overflow-hidden transition-colors duration-500 shadow-xl disabled:pointer-events-none"
                >
                  {/* The absolute sliding filling coffee layer on click/submission */}
                  <span
                    className="absolute inset-0 bg-brand-caramel transition-all duration-[1.8s] ease-out z-0 pointer-events-none"
                    style={{
                      clipPath: isSubmitting ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                    }}
                  />
                  {/* Hover visual fill style */}
                  {!isSubmitting && (
                    <span
                      className="absolute inset-0 bg-brand-caramel opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none"
                      style={{
                        clipPath: "inset(100% 0 0 0)",
                      }}
                    />
                  )}

                  <style dangerouslySetInnerHTML={{ __html: `
                    #submit-reserve-btn:hover span {
                      clip-path: inset(0% 0 0 0) !important;
                    }
                  ` }} />

                  {/* Button Label */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Securing Table..." : "Reserve Now"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right side: Info Card with address, hours, map with pulsing pin */}
        <div 
          id="reservation-info-container" 
          className="md:col-span-5 flex flex-col gap-6 fade-right"
        >
          {/* Info Card Body */}
          <div className="glass-panel p-8 rounded-sm border border-brand-gold/15 flex-1 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="font-serif italic text-3xl text-brand-cream/90 mb-4 border-b border-brand-gold/10 pb-3">
                BrewCraft Lounge
              </h3>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-medium text-xs tracking-wider uppercase text-brand-cream/50 mb-1">
                    Experience Lounge
                  </h4>
                  <p className="font-sans font-light text-brand-cream/85 text-base leading-relaxed">
                    120 Coffee Guild Way, Suite 100,<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-medium text-xs tracking-wider uppercase text-brand-cream/50 mb-1">
                    Phone Inquiries
                  </h4>
                  <p className="font-sans font-light text-brand-cream text-base hover:text-brand-gold transition-colors duration-300">
                    <a href="tel:5553217654">(555) 321-7654</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-brand-caramel shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-medium text-xs tracking-wider uppercase text-brand-cream/50 mb-1">
                    Hours of Service
                  </h4>
                  <p className="font-sans font-light text-brand-cream/85 text-base leading-relaxed">
                    <strong className="font-normal text-brand-cream">Mon - Fri:</strong> 7:00 AM - 10:00 PM <br />
                    <strong className="font-normal text-brand-cream">Sat - Sun:</strong> 8:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Custom visual map with golden pulsing pin */}
            <div 
              id="map-visual-placeholder" 
              className="mt-8 relative w-full h-[180px] rounded-sm bg-[#120904] border border-brand-gold/15 overflow-hidden flex items-center justify-center group"
            >
              {/* Abstract decorative geometric map patterns */}
              <div className="absolute inset-0 opacity-15 pointer-events-none text-[8px] font-mono select-none break-all p-2 text-brand-gold leading-none">
                {Array(20).fill("----|=========|----|=========|----|====").join("\n")}
              </div>
              
              {/* Vertical abstract street line mock */}
              <div className="absolute inset-y-0 left-1/3 w-[2px] bg-brand-gold/10 pointer-events-none" />
              {/* Horizontal abstract street line mock */}
              <div className="absolute inset-x-0 top-1/2 h-[2px] bg-brand-gold/10 pointer-events-none" />
              {/* Diagonal line */}
              <div className="absolute inset-0 w-full h-full bg-linear-to-tr from-transparent via-brand-gold/5 to-transparent pointer-events-none" />

              {/* Dark Ambient Gradient Edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120904] via-transparent to-[#120904] opacity-50" />

              {/* Glowing anchor location indicator */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-1.5 z-15">
                {/* Visual anchor pill header */}
                <div className="bg-brand-bg border border-brand-gold/30 px-2 py-0.5 rounded-sm scale-95 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-sans text-[8px] text-brand-gold uppercase tracking-widest font-semibold">BrewCraft</span>
                </div>
                
                {/* 2. Pulsing gold Pin */}
                <div className="relative flex h-4 w-4 mt-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold border border-brand-bg shadow-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
