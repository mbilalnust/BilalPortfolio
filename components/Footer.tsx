import React from 'react';
import { PROFILE } from '../data.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm flex items-center gap-1">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;