import React from 'react';
import { PROFILE, METRICS } from '../data';

// bilalcustom hero: light tile, centered stack, two pill CTAs.
// No gradients and no decorative chrome — the system has zero gradient tokens.
// The avatar is the one photographic element, so it carries the one shadow.
const Hero: React.FC = () => {
  return (
    <>
      <header id="home" className="bg-white px-6 py-[112px] text-center">
        <div className="max-w-[980px] mx-auto">
          <img
            src={PROFILE.avatarUrl}
            alt={PROFILE.name}
            width={120}
            height={120}
            className="w-[120px] h-[120px] rounded-full object-cover mx-auto mb-6 shadow-product"
          />
          <h1 className="text-[34px] sm:text-display-lg lg:text-hero font-semibold text-ink mb-4">
            Data Scientist building
            <br />
            enterprise AI that ships.
          </h1>
          <p className="text-[21px] sm:text-lead font-normal text-ink-80 max-w-[720px] mx-auto mb-6">
            {PROFILE.tagline}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#work"
              className="press inline-flex items-center justify-center text-body bg-primary text-white px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="press inline-flex items-center justify-center text-body text-primary border border-primary px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center text-caption text-ink-48">
            <span>{PROFILE.location}</span>
            <span className="hidden sm:inline text-hairline" aria-hidden="true">·</span>
            <span>{PROFILE.languages}</span>
          </div>
        </div>
      </header>

      {/* Metric strip — parchment. The numbers stand in for the product render. */}
      <section className="bg-parchment px-6 py-section">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center">
            <span className="block text-caption font-semibold text-primary mb-3">
              Selected outcomes
            </span>
            <h2 className="text-[28px] sm:text-display-md font-semibold text-ink">
              Numbers from shipped work.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {METRICS.map((m) => (
              <div key={m.label}>
                <span className="block text-display-lg font-semibold text-ink">{m.value}</span>
                <span className="block mt-2 text-caption text-ink-48">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
