import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Certifications = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const { primary, secondary } = portfolioData.certifications;

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="certifications"
          subtitle="Industry credentials in cloud infrastructure and AI."
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {primary.map((cert, index) => (
            <article key={index} className="infra-card border-l-2 border-l-primary p-5 flex flex-col">
              <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                {cert.name}
              </h3>
              <p className="font-mono text-xs text-primary mt-1">{cert.platform}</p>

              <div className="flex items-center font-mono text-xs text-muted-foreground mt-3">
                <Calendar className="w-3 h-3 mr-1.5" />
                {cert.date}
              </div>

              {'description' in cert && cert.description && (
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed flex-1">
                  {cert.description}
                </p>
              )}

              {cert.verificationLink && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 rounded-sm font-mono text-xs border-border"
                  onClick={() => window.open(cert.verificationLink, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  verify
                </Button>
              )}
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            additional credentials
          </p>
          <div className="flex flex-wrap gap-2">
            {secondary.map((cert) => (
              <div
                key={cert.name}
                className="infra-card px-3 py-2 flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <div>
                  <p className="font-mono text-xs text-foreground">{cert.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {cert.platform} · {cert.date}
                  </p>
                </div>
                {cert.verificationLink && (
                  <button
                    type="button"
                    onClick={() => window.open(cert.verificationLink, '_blank')}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-1"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
