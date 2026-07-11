import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Experience = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="experience"
          subtitle="Backend engineering, cloud infrastructure, AI systems, and product development."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <article
              key={index}
              className={`infra-card p-5 sm:p-6 ${
                exp.current ? 'border-l-2 border-l-primary' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-1.5 py-0.5 rounded-sm">
                        current
                      </span>
                    )}
                    {exp.employmentType && (
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {exp.employmentType}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary mt-0.5">{exp.company}</p>
                </div>

                <div className="font-mono text-xs text-muted-foreground space-y-1 sm:text-right shrink-0">
                  <span className="flex items-center sm:justify-end gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center sm:justify-end gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {'responsibilityGroups' in exp && exp.responsibilityGroups && exp.responsibilityGroups.length > 0 ? (
                <div className="space-y-4 mb-4">
                  {exp.responsibilityGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                        {group.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {group.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm gap-2">
                            <span className="text-primary font-mono mt-0.5 shrink-0">&gt;</span>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : exp.responsibilities.length > 0 ? (
                <ul className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm gap-2">
                      <span className="text-primary font-mono mt-0.5 shrink-0">&gt;</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                  <span className="text-primary">$</span> technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
