import React from 'react';
import { EDUCATION, SKILL_GROUPS } from '../data';

// Light tile, two-up. Education and recognition on the left, the technical stack
// on the right — the stack is a plain list, not chips, because it is long.
const About: React.FC = () => {
  return (
    <section id="about" className="bg-white px-6 py-section">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-12">
          <span className="block text-caption font-semibold text-primary mb-3">About</span>
          <h2 className="text-[32px] sm:text-display-lg font-semibold text-ink">Background.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-tagline font-semibold text-ink mb-4">Education</h3>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="mb-6">
                <div className="font-semibold text-ink">{edu.school}</div>
                <div className="mt-1 text-ink-80">{edu.degree}</div>
                <div className="text-caption text-ink-48">
                  {edu.period}
                  {edu.description ? ` · ${edu.description}` : ''}
                </div>
              </div>
            ))}

            <h3 className="text-tagline font-semibold text-ink mt-8 mb-4">Recognition</h3>
            <p className="text-ink-80">
              Korean Government Scholarship Program — 90 million KRW (~$62K USD) for the KAIST
              masters, selected as 1 of 4 from Pakistan.
            </p>
            <p className="mt-3 text-ink-80">
              Patent: traffic-signal synchronisation optimisation algorithm.
            </p>
          </div>

          <div>
            <h3 className="text-tagline font-semibold text-ink mb-4">Technical</h3>
            {SKILL_GROUPS.map((group) => (
              <div key={group.heading} className="mb-[17px]">
                <div className="text-caption font-semibold text-ink-48 mb-1">{group.heading}</div>
                <div className="text-ink-80">{group.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
