import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages },
    { title: 'Cloud & Infrastructure', skills: portfolioData.skills.cloudInfrastructure },
    { title: 'OCI Administration', skills: portfolioData.skills.ociAdministration },
    { title: 'Backend & APIs', skills: portfolioData.skills.backend },
    { title: 'Databases & Caching', skills: portfolioData.skills.databases },
    { title: 'AI / LLM Engineering', skills: portfolioData.skills.aiLlm },
    { title: 'Practices', skills: portfolioData.skills.practices },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="summary"
          subtitle={portfolioData.personal.bio}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              education
            </h3>

            {portfolioData.education.map((edu, index) => (
              <div key={index} className="infra-card p-5">
                <h4 className="font-display text-base font-semibold text-foreground">
                  {edu.institution}
                </h4>
                <p className="text-sm text-primary mt-1">{edu.degree}</p>
                <p className="font-mono text-xs text-muted-foreground mt-2">
                  CGPA: {edu.cgpa}
                </p>
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground mt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </span>
                </div>
                {edu.coursework && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tech-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              technical skills
            </h3>
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
