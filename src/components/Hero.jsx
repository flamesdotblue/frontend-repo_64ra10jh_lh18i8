import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-400" />
          <span className="text-sm tracking-wide text-white/80">Futuristic Shuttering Ply</span>
        </div>

        <h1 className="font-['Mona_Sans',Inter,sans-serif] bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent md:text-7xl">
          Arctech
        </h1>
        <p className="mt-2 text-lg text-white/70 md:text-xl">
          Shuttering visions into reality
        </p>

        <p className="mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg">
          Premium, densified film-faced plywood engineered for mirror-smooth concrete finishes, extreme durability, and high reuse cycles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#specs"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Shield className="h-4 w-4" />
            View Technical Specs
          </a>
          <a
            href="#colors"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <Rocket className="h-4 w-4" />
            Explore Finishes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
