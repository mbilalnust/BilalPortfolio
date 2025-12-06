import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data.ts';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Writings</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-indigo-700 transition-colors">
            View all articles <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-medium">
            View all articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;