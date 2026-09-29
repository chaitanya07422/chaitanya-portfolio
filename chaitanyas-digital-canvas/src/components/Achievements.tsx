import type { ReactNode } from 'react';
import { Trophy, Award, Users, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categoryIcons: Record<string, ReactNode> = {
  Competition: <Trophy className="h-4 w-4 text-accent shrink-0" />,
  Leadership: <Users className="h-4 w-4 text-primary shrink-0" />,
  Patent: <FileText className="h-4 w-4 text-primary shrink-0" />,
  Engineering: <Award className="h-4 w-4 text-primary shrink-0" />,
  'Competitive Programming': <Code2 className="h-4 w-4 text-accent shrink-0" />,
};

const Achievements = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const featured = portfolioData.achievements.filter(
    (a) => 'featured' in a && a.featured
  );
  const metrics = portfolioData.achievements.filter(
    (a) => !('featured' in a && a.featured)
  );

  return (
    <section
      id="achievements"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="achievements"
          subtitle="Engineering impact, global competition recognition, intellectual property, and technical milestones."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {featured.map((achievement, index) => (
            <article
              key={index}
              className="infra-card border-l-2 border-l-primary p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                {categoryIcons[achievement.category]}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {achievement.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1 leading-snug">
                    {achievement.title}
                  </h3>
                  {'subtitle' in achievement && achievement.subtitle && (
                    <p className="font-mono text-xs text-accent mt-0.5">{achievement.subtitle}</p>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>

              {'stats' in achievement && achievement.stats && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {achievement.stats.map((stat) => (
                    <span
                      key={stat}
                      className="font-mono text-[10px] border border-border px-2 py-1 rounded-sm text-muted-foreground"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 mt-4 font-mono text-xs text-muted-foreground">
                <span>{achievement.date}</span>
                {achievement.role && (
                  <>
                    <span className="text-border">·</span>
                    <span className="text-primary">{achievement.role}</span>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metrics.map((achievement, index) => (
            <article key={index} className="infra-card p-4">
              <div className="flex items-start gap-2 mb-2">
                {categoryIcons[achievement.category] || (
                  <Award className="h-4 w-4 text-primary shrink-0" />
                )}
                <h3 className="text-sm font-medium text-foreground leading-snug">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                {achievement.description}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-2 pl-6">
                {achievement.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
