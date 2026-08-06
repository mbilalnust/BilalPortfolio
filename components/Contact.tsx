import React from 'react';
import { GOOGLE_FORM_URL, PROFILE } from '../data';

// Closing dark tile (tile3, the darkest — it sits at the bottom of the stack).
// The old version had a gradient card; this system has zero gradient tokens.
const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-tile3 text-white px-6 py-section">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-[32px] sm:text-display-lg font-semibold mb-4">Let's talk.</h2>
        <p className="max-w-[640px] mx-auto mb-8 text-[21px] sm:text-lead font-normal text-body-muted">
          Open to conversations about enterprise AI, applied ML, and analytics platforms.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`mailto:${PROFILE.email}`}
            className="press inline-flex items-center justify-center text-body bg-primary text-white px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
          >
            {PROFILE.email}
          </a>
          <a
            href="https://linkedin.com/in/m-bilal"
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center justify-center text-body text-primary-on-dark border border-primary-on-dark px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
          >
            LinkedIn
          </a>
          {GOOGLE_FORM_URL && (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center justify-center text-body text-primary-on-dark border border-primary-on-dark px-[22px] py-[11px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
            >
              Contact form
            </a>
          )}
        </div>

        <p className="mt-6 text-caption text-body-muted">{PROFILE.location}</p>
      </div>
    </section>
  );
};

export default Contact;
