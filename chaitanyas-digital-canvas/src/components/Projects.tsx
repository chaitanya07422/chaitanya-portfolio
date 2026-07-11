import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Building } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categoryColors: Record<string, string> = {
  'SaaS Platform': 'text-primary border-primary/30',
  'Cloud Infrastructure': 'text-accent border-accent/30',
  'Production Platform': 'text-primary border-primary/30',
  'IoT & AI': 'text-muted-foreground border-border',
  Competition: 'text-accent border-accent/30',
};

const Projects = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featured = portfolioData.projects.find((p) => 'featured' in p && p.featured);
  const otherProjects = portfolioData.projects.filter((p) => !('featured' in p && p.featured));

  const categories = ['All', ...Array.from(new Set(otherProjects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? otherProjects
      : otherProjects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="projects"
          subtitle="Production systems, cloud infrastructure, and research across SaaS, AI, and IoT."
        />

        {featured && (
          <article className="infra-card border-l-2 border-l-primary p-6 sm:p-8 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-1.5 py-0.5 rounded-sm">
                featured
              </span>
              <span className="font-mono text-xs text-muted-foreground">{featured.duration}</span>
              <span className="font-mono text-xs text-muted-foreground">· {featured.status}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
              {featured.title}
            </h3>
            <p className="text-sm text-primary mt-1">{featured.subtitle}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-3xl">
              {featured.description}
            </p>

            {'architectureGroups' in featured && featured.architectureGroups && (
              <div className="mt-6 space-y-5">
                {featured.architectureGroups.map((group, i) => (
                  <div key={i}>
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                      {group.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start text-sm gap-2">
                          <span className="text-primary font-mono mt-0.5 shrink-0">&gt;</span>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {'outcomes' in featured && featured.outcomes && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {featured.outcomes.map((outcome) => (
                  <div key={outcome} className="border border-border bg-secondary/30 px-3 py-2 rounded-sm">
                    <p className="text-xs text-muted-foreground leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                <span className="text-primary">$</span> stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {featured.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {featured.github && (
                <Button variant="outline" size="sm" className="rounded-sm font-mono text-xs border-border" asChild>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    source
                  </a>
                </Button>
              )}
              {'demoUrl' in featured && featured.demoUrl && (
                <Button variant="outline" size="sm" className="rounded-sm font-mono text-xs border-border" asChild>
                  <a href={featured.demoUrl as string} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    demo
                  </a>
                </Button>
              )}
            </div>
          </article>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-sm font-mono text-xs ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.toLowerCase()}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <article key={index} className="infra-card p-5 flex flex-col">
              <div className="flex justify-between items-start gap-2 mb-3">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest border px-1.5 py-0.5 rounded-sm ${
                    categoryColors[project.category] || 'text-muted-foreground border-border'
                  }`}
                >
                  {project.category}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{project.status}</span>
              </div>

              <h3 className="font-display text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-xs text-primary mt-0.5">{project.subtitle}</p>

              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1 line-clamp-3">
                {project.description}
              </p>

              {project.company && (
                <div className="flex items-center text-xs text-muted-foreground mt-2 font-mono">
                  <Building className="w-3 h-3 mr-1" />
                  {project.company}
                </div>
              )}

              {project.achievement && (
                <span className="font-mono text-[10px] text-accent mt-2">{project.achievement}</span>
              )}

              <div className="flex flex-wrap gap-1 mt-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-1 border-t border-border pt-3">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start text-xs gap-1.5 text-muted-foreground">
                    <span className="text-primary font-mono shrink-0">&gt;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground font-mono text-sm py-12">
            no projects in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
