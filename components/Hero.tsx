import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter, ExternalLink, BarChart } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data';

const Hero: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github size={24} />;
      case 'linkedin': return <Linkedin size={24} />;
      case 'twitter': return <Twitter size={24} />;
      case 'mail': return <Mail size={24} />;
      case 'tableau': return <BarChart size={24} />;
      case 'external': return <ExternalLink size={24} />;
      default: return <ExternalLink size={24} />;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <p className="text-primary font-bold tracking-wide uppercase mb-3 bg-indigo-50 inline-block px-3 py-1 rounded-full text-sm">
            Data Scientist & ML Engineer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hi, I'm <span className="text-primary">{PROFILE.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-normal leading-relaxed">
            {PROFILE.tagline}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label={link.platform}
                title={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full transform rotate-6 scale-105 opacity-20 blur-lg"></div>
            <img 
              src={PROFILE.avatarUrl} 
              alt={PROFILE.name} 
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;