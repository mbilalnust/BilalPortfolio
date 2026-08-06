import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data';

// bilalcustom global-nav: 44px, true black, 12px quiet links.
// No scroll-transparency — the bar is always black, like the system specifies.
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Six links is the ceiling before the row wraps at ~700px. If a seventh is ever
  // needed, drop one rather than shrinking the type.
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 h-11 flex items-center">
        <a href="#home" className="text-caption font-semibold text-white mr-auto">
          {PROFILE.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-fine-print text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 press"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-caption text-white/90 hover:text-white py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
