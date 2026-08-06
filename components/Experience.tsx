import React from 'react';
import { EXPERIENCE } from '../data';
import { rich } from '../utils/richText';

// bilalcustom dark tile. No timeline dots, no card shadows — separation comes
// from a hairline between roles and from the tile color itself.
const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-tile1 text-white px-6 py-section">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-12">
          <span className="block text-caption font-semibold text-primary-on-dark mb-3">
            Experience
          </span>
          <h2 className="text-[32px] sm:text-display-lg font-semibold">
            Seven roles, four countries of data.
          </h2>
        </div>

        {EXPERIENCE.map((job, idx) => (
          <div
            key={job.id}
            className={
              idx === 0
                ? 'pb-8'
                : 'py-8 border-t border-white/[.12]'
            }
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6 mb-4">
              <div>
                <h3 className="text-tagline font-semibold">{job.role}</h3>
                <p className="mt-1 text-primary-on-dark">{job.company}</p>
              </div>
              <div className="text-caption text-body-muted sm:text-right sm:whitespace-nowrap tabular-nums">
                {job.period}
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> · </span>
                {job.location}
              </div>
            </div>

            <ul className="space-y-3">
              {job.description.map((desc, i) => (
                <li key={i} className="relative pl-[17px] leading-[1.47]">
                  <span className="absolute left-0 text-body-muted" aria-hidden="true">—</span>
                  {rich(desc)}
                </li>
              ))}
            </ul>

            {job.tech && (
              <div className="mt-4 flex flex-wrap gap-1">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block text-caption text-body-muted border border-white/20 rounded-full px-3 py-[5px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
