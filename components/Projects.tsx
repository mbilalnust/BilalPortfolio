import React from 'react';
import { WORK_ITEMS, PROJECTS } from '../data';
import { rich } from '../utils/richText';

// Two tiles: selected work (light, 12 cards) and open source (parchment).
// Cards are hairline-bordered at 18px radius with no shadow — in this system the
// one shadow is reserved for photographic elements, and cards are not that.
const Projects: React.FC = () => {
  return (
    <>
      <section id="work" className="bg-white px-6 py-section">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <span className="block text-caption font-semibold text-primary mb-3">
              Selected work
            </span>
            <h2 className="text-[32px] sm:text-display-lg font-semibold text-ink">
              Problems, and what changed.
            </h2>
            <p className="mt-3 max-w-[720px] text-lead-airy font-light text-ink-48">
              Each of these started as something broken or invisible. The measurable part is at the
              bottom of the card.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col bg-white border border-hairline rounded-card p-6"
              >
                <h3 className="text-tagline font-semibold text-ink mb-2">{item.title}</h3>
                <div className="text-caption font-semibold text-primary mb-3">{item.where}</div>
                <p className="flex-1 text-ink-80 mb-4">{item.description}</p>
                <div className="text-caption text-ink-80 border-t border-black/[.04] py-3">
                  {rich(item.result)}
                </div>
                {item.githubUrl && (
                  <div className="mt-auto">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment px-6 py-section">
        <div className="max-w-[980px] mx-auto">
          <div className="mb-12">
            <span className="block text-caption font-semibold text-primary mb-3">Open source</span>
            <h2 className="text-[28px] sm:text-display-md font-semibold text-ink">
              Things I build in the evenings.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="flex flex-col bg-white border border-hairline rounded-card p-6"
              >
                <h3 className="text-tagline font-semibold text-ink mb-2">{project.title}</h3>
                <p className="flex-1 text-ink-80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block text-caption text-ink-48 border border-hairline rounded-full px-3 py-[5px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold text-primary hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
