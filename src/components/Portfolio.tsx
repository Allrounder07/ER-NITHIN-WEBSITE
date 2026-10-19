import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Code2, 
  Laptop, 
  Wheat, 
  ShoppingBag, 
  School, 
  Building2, 
  Printer,
  X,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { portfolioProjects } from '../data/portfolioData';

interface PortfolioProps {
  language: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Web Application', 'E-Commerce', 'Business Website', 'Digital Platform'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return <Wheat className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'School': return <School className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Printer': return <Printer className="w-5 h-5" />;
      default: return <Laptop className="w-5 h-5" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900/60 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'ENGINEERING PORTFOLIO' : 'ಪ್ರಾಜೆಕ್ಟ್ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {language === 'en' ? (
              <>
                Featured <span className="text-yellow-400">Projects & Solutions</span>
              </>
            ) : (
              <>
                ರೂಪಿಸಲಾದ <span className="text-yellow-400">ಪ್ರಮುಖ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {language === 'en'
              ? 'Real-world software engineering deployed for regional enterprises, agricultural producers, schools, and digital retail.'
              : 'ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಿಗಳು, ರೈತರು ಮತ್ತು ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಿಗಾಗಿ ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ಮಿಸಲಾದ ನೈಜ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-yellow-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-950 border border-sky-900/40 hover:border-sky-400/80 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-sky-950/80 hover:-translate-y-1"
            >
              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accentColor} text-white shadow-md`}>
                    {getProjectIcon(project.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-sky-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors font-heading flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                  Client: {project.clientType}
                </span>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric Card */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.metrics}
                </span>
                <span className="text-sky-400 group-hover:underline text-[11px]">
                  View Case Details
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-sky-500/50 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${activeProject.accentColor} text-white shadow`}>
                  {getProjectIcon(activeProject.icon)}
                </div>
                <div>
                  <span className="text-xs font-mono text-sky-400">{activeProject.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 mb-6">
                <strong>Industry / Client:</strong> {activeProject.clientType}
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono mb-2">
                    Key Features Engineered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-950 text-xs text-slate-200 border border-slate-800/80">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-sky-950 text-sky-300 border border-sky-800/60 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <span className="text-xs text-emerald-400 font-bold">
                  ★ Impact: {activeProject.metrics}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href={`https://wa.me/917259141830?text=${encodeURIComponent(`Hello ER Nithin, I loved your portfolio project: ${activeProject.title}. I want to build something similar!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-yellow-400 text-slate-950 text-xs font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Build Something Like This
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
