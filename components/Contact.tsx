import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { GOOGLE_FORM_URL, PROFILE } from '../data.ts';

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

          <div className="bg-white rounded-2xl overflow-hidden p-1 shadow-2xl">
            <div className="bg-slate-50 w-full h-[500px] rounded-xl overflow-hidden relative">
              {GOOGLE_FORM_URL ? (
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                  className="absolute inset-0 w-full h-full"
                >
                  Loading…
                </iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400 p-8 text-center">
                  <p>Please update GOOGLE_FORM_URL in data.ts to enable the contact form.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;