import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data';

// Parchment footer. This is the one place the system goes deliberately dense —
// relaxed 2.41 line-height on the link stacks, whole IA visible at a glance.
const Footer: React.FC = () => {
  return (
    <footer className="bg-parchment px-6 pt-16 pb-8">
      <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-caption font-semibold text-ink mb-2">Elsewhere</div>
          <ul className="leading-[2.41]">
            {SOCIAL_LINKS.filter((l) => l.icon !== 'mail').map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-caption font-semibold text-ink mb-2">This site</div>
          <ul className="leading-[2.41]">
            <li><a href="#experience" className="text-primary hover:underline">Experience</a></li>
            <li><a href="#work" className="text-primary hover:underline">Selected work</a></li>
            <li><a href="#research" className="text-primary hover:underline">Research</a></li>
            <li><a href="#about" className="text-primary hover:underline">About</a></li>
          </ul>
        </div>

        <div>
          <div className="text-caption font-semibold text-ink mb-2">Contact</div>
          <ul className="leading-[2.41]">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="text-primary hover:underline">
                {PROFILE.email}
              </a>
            </li>
            <li className="text-ink-80">{PROFILE.location}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[980px] mx-auto mt-8 pt-[17px] border-t border-hairline text-fine-print text-ink-48">
        © {new Date().getFullYear()} {PROFILE.name}. Figures cited are from shipped work at the named
        employers; no proprietary code or client data is reproduced here.
      </div>
    </footer>
  );
};

export default Footer;
