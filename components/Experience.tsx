import React from 'react';
import { Briefcase, MapPin, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE, PROFILE, EDUCATION } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Summary */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Summary</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
            {PROFILE.about}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
             <Award className="text-primary" size={24} /> Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {PROFILE.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm border border-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
             <Briefcase className="text-primary" size={28} /> Experience
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-8">
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{job.role}</h4>
                      <p className="text-primary font-medium text-lg">{job.company}</p>
                    </div>
                    <div className="text-right flex flex-col items-start md:items-end">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-semibold">
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-slate-600 list-disc ml-5">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
             <GraduationCap className="text-primary" size={28} /> Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors">
                 <h4 className="text-lg font-bold text-slate-900 mb-2">{edu.school}</h4>
                 <p className="text-primary font-medium mb-1">{edu.degree}</p>
                 <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                 {edu.description && (
                   <p className="text-slate-600 text-sm italic">{edu.description}</p>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;