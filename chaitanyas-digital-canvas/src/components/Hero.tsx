import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, ArrowDown, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import TerminalWindow from '@/components/TerminalWindow';
import StatReadout from '@/components/StatReadout';
import GridBackground from '@/components/GridBackground';
import DevQuote from '@/components/DevQuote';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0A0A0F]"
    >
      <GridBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 rounded-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                online
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 px-2 py-1 rounded-sm">
                shipping code
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {personal.title} · {personal.company}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="name-gradient">{personal.name}</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              {personal.shortBio}
            </p>

            <DevQuote />

            <div className="grid grid-cols-2 gap-3 mt-8 max-w-md">
              {portfolioData.highlights.map((item, i) => (
                <StatReadout key={item.label} value={item.value} label={item.label} index={i} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="h-12 px-6 text-base bg-primary hover:bg-primary/90 hover:shadow-[0_0_24px_hsl(262_83%_58%_/_0.35)] text-primary-foreground rounded-sm font-mono focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => scrollToSection('experience')}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                git log --experience
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base rounded-sm border-border hover:border-primary/50 hover:bg-secondary font-mono"
                onClick={() => scrollToSection('contact')}
              >
                ping me
              </Button>
            </div>

            <div className="flex gap-5 mt-8">
              {[
                { href: personal.github, icon: Github, label: 'GitHub' },
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: personal.leetcode, icon: Code, label: 'LeetCode' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <TerminalWindow />
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="mt-16 mx-auto block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
