import React from 'react';
import { Shield, Layers, Droplets, Ruler, Hammer, Package } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="mt-1 rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5 text-cyan-300" /></div>
    <div>
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-base font-semibold text-white">{value}</div>
    </div>
  </div>
);

const TechSpecs = () => {
  return (
    <section id="specs" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Technical Specifications</h2>
          <p className="max-w-3xl text-white/70">
            Arctech shuttering plywood is engineered for precision concrete work, delivering repeatable, premium surface finishes. Built to conform to demanding site conditions and industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Stat icon={Shield} label="Standard" value="Conforms to IS 4990 for concrete shuttering" />
          <Stat icon={Layers} label="Construction" value="Calibrated, densified hardwood core; multi-ply" />
          <Stat icon={Droplets} label="Bonding" value="BWP grade phenol-formaldehyde (PF) resin" />
          <Stat icon={Package} label="Face Film" value="Phenolic film 220–240 gsm for mirror-smooth finish" />
          <Stat icon={Ruler} label="Thickness" value="12 mm and 18 mm (other sizes on request)" />
          <Stat icon={Hammer} label="Reuse Potential" value="50–100+ cycles with proper handling" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">Performance Highlights</h3>
            <ul className="space-y-2 text-white/75">
              <li>• High load-bearing capacity and dimensional stability.</li>
              <li>• Excellent nail/screw holding with minimal edge split when pre-drilled.</li>
              <li>• Smooth, non-absorbent face for superior concrete sheens and reduced de-bonding.</li>
              <li>• Calibrated thickness for uniform pressure distribution and crisp edges.</li>
              <li>• Edge sealed with protective coating to reduce moisture ingress.</li>
              <li>• Resistant to boiling water, alkalinity from cement, and site abrasion.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">Recommended Use Cases</h3>
            <ul className="space-y-2 text-white/75">
              <li>• Columns, beams, slabs, walls, and architectural formwork.</li>
              <li>• Projects needing uniform, fair-faced concrete finishes.</li>
              <li>• High repetition shuttering for large-scale pours.</li>
              <li>• Precast concrete elements and tunnel form systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
