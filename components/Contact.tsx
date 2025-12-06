import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { GOOGLE_FORM_URL, PROFILE } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              I'm currently available for freelance projects and open to new opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-slate-400">{PROFILE.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl w-full max-w-md">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Send size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-slate-300 mb-8">
                  Have a project in mind or want to collaborate? Fill out the form and I'll get back to you soon!
                </p>
                {GOOGLE_FORM_URL ? (
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Open Contact Form
                  </a>
                ) : (
                  <div className="text-slate-400 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-sm">Please update GOOGLE_FORM_URL in data.ts to enable the contact form.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;