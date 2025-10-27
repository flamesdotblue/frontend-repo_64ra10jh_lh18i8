import React from 'react';
import { Palette, Check } from 'lucide-react';

const colors = [
  {
    key: 'black',
    name: 'Obsidian Black',
    hex: '#0b0b0c',
    film: 'Phenolic Film 240 gsm',
    finish: 'Ultra-smooth, low-gloss',
  },
  {
    key: 'red',
    name: 'Arc Red',
    hex: '#b11226',
    film: 'Phenolic Film 220 gsm',
    finish: 'Smooth, architectural',
  },
];

const Swatch = ({ name, hex, film, finish }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
    <div className="h-36 w-full" style={{ backgroundColor: hex }} />
    <div className="flex items-start justify-between p-5">
      <div>
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="text-sm text-white/60">{finish} • {film}</div>
      </div>
      <div className="rounded-full border border-white/20 bg-white/10 p-2 text-white/80">
        <Check className="h-4 w-4" />
      </div>
    </div>
  </div>
);

const ColorOptions = () => {
  return (
    <section id="colors" className="w-full bg-[#0a0a0b] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Color Options</h2>
            <p className="max-w-2xl text-white/70">Choose from two iconic, professional-grade faces engineered to deliver consistent release and premium concrete finishes.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 md:flex">
            <Palette className="h-4 w-4 text-pink-300" /> Face Film Finishes
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {colors.map((c) => (
            <Swatch key={c.key} {...c} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-6">
          <div className="max-w-3xl text-white/80">
            For custom branding and sizes, enterprise embossing, and project-specific calibration, our team can tailor Arctech to your system.
          </div>
          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Talk to Sales</a>
        </div>
      </div>
    </section>
  );
};

export default ColorOptions;
