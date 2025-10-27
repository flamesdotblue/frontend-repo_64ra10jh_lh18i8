import React from 'react';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import ReuseGuidelines from './components/ReuseGuidelines';
import ColorOptions from './components/ColorOptions';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <TechSpecs />
      <ReuseGuidelines />
      <ColorOptions />

      <footer id="contact" className="border-t border-white/10 bg-black py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold text-white">Arctech</div>
              <div className="text-sm">Shuttering visions into reality</div>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Arctech. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
