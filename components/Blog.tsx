import React from 'react';
import { PUBLICATIONS } from '../data';

// Was the blog tile; this site has no blog. It is now the research tile —
// dark-2, a micro-step lighter than the experience tile above it.
const Research: React.FC = () => {
  return (
    <section id="research" className="bg-tile2 text-white px-6 py-section">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-12">
          <span className="block text-caption font-semibold text-primary-on-dark mb-3">
            Research
          </span>
          <h2 className="text-[32px] sm:text-display-lg font-semibold">
            Three peer-reviewed papers.
          </h2>
          <p className="mt-3 max-w-[720px] text-lead-airy font-light text-body-muted">
            Transportation and mobility, from the KAIST years and after.
          </p>
        </div>

        {PUBLICATIONS.map((pub, idx) => (
          <div
            key={pub.id}
            className={idx === 0 ? 'pb-6' : 'py-6 border-t border-white/[.12]'}
          >
            <h3 className="text-body font-semibold mb-1">
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-on-dark hover:underline"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p className="text-caption text-body-muted">{pub.venue}</p>
          </div>
        ))}

        <div className="mt-8">
          <a
            href="https://www.researchgate.net/profile/Muhammad-Bilal-91"
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center justify-center text-body text-primary-on-dark border border-primary-on-dark px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
          >
            Full profile on ResearchGate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
