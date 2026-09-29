import { useEffect, useState } from 'react';
import { Github, Linkedin, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { footerQuips } from '@/data/devHumor';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;
  const [quipIndex, setQuipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuipIndex((i) => (i + 1) % footerQuips.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border py-8 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-[11px] text-muted-foreground/70 mb-6 max-w-lg mx-auto">
          {footerQuips[quipIndex]}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> {personal.name}
            </p>
            <p className="font-mono text-[10px] text-muted-foreground mt-1">
              {personal.title} · {personal.company} · © {currentYear}
            </p>
          </div>

          <div className="flex gap-4">
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
                className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-2 py-1"
          >
            ↑ git checkout main (back to top)
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
