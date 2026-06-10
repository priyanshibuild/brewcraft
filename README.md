# BrewCraft — Premium Artisan Coffee Website

BrewCraft is a high-end, responsive web application designed for an artisanal coffee roastery and lounge. The site features smooth, scroll-triggered cinematic entry animations, interactive beverage and patisserie catalogs, and a secure seat-reservation workflow with a custom liquid coffee loading effect.

## Live Demo
Check out the live website: **[https://priyanshibuild.github.io/brewcraft/](https://priyanshibuild.github.io/brewcraft/)**

## Key Features
* **Premium Design System**: Dark-roast aesthetic with HSL tailwinds, clean typography (Playfair Display & Cormorant Garamond), and smooth hover states.
* **Cinematic Scrolling**: Scroll-spy navigation and intersection-triggered fade entries (`fade-up`, `scale-in`, `fade-left`).
* **Interactive Menu Tabs**: Seamlessly toggle between Hot Coffee, Cold Brew, and Specialty Tea selections.
* **Secured Booking Simulation**: Table reservation form with interactive guest selection, simulated confirmation loader, and a success summary layout.
* **Interactive Map Pin**: Pulsing geolocated map anchor visual using custom CSS transitions.

## Tech Stack
* **Framework**: React 19 (TypeScript)
* **Build System**: Vite 6
* **Styling**: Tailwind CSS 4, Vanilla CSS variables
* **Icons**: Lucide React
* **Animations**: CSS transitions, Intersection Observer API

## Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshibuild/brewcraft.git
   cd brewcraft
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. Build for production:
   ```bash
   npm run build
   ```
