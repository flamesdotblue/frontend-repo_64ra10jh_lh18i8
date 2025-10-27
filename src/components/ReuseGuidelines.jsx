import React from 'react';
import { Recycle, Leaf, Wrench } from 'lucide-react';

const Tip = ({ title, points, icon: Icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5 text-emerald-300" /></div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2 text-white/75">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </div>
);

const ReuseGuidelines = () => {
  return (
    <section id="guidelines" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Reuse & Handling Guidelines</h2>
          <p className="max-w-3xl text-white/70">
            Follow these best practices to maximize reuse cycles, maintain panel integrity, and achieve consistent fair-faced concrete.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Tip
            icon={Recycle}
            title="Before the Pour"
            points={[
              'Select flat, undamaged faces; avoid using compromised edges for critical pours.',
              'Pre-drill fastener points; use proper screw types and avoid over-torqueing.',
              'Apply a uniform, compatible shuttering oil/release agent; avoid pooling.',
              'Ensure tight joints and proper support spacing to prevent deflection.',
            ]}
          />
          <Tip
            icon={Leaf}
            title="During & After"
            points={[
              'Avoid impact from vibrators and tools; use spacers and protect edges.',
              'De-shutter as per structural guidance; do not pry at corners with metal tools.',
              'Clean immediately after de-shuttering with soft scrapers; no harsh abrasives.',
              'Re-apply release agent before next use once the surface is clean and dry.',
            ]}
          />
          <Tip
            icon={Wrench}
            title="Storage & Care"
            points={[
              'Seal freshly cut edges with protective paint; re-seal worn edges periodically.',
              'Stack flat on level dunnage with face-to-face alignment; strap if needed.',
              'Keep covered, shaded, and ventilated; avoid water pooling and direct sun.',
              'Label and rotate panels to track cycles; remove heavily damaged panels.',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ReuseGuidelines;
