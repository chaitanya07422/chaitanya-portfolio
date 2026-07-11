import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { navTooltips } from '@/data/devHumor';
import ThemeJokePopup from '@/components/ThemeJokePopup';

const navItems = [
  { label: 'home', href: '#home', id: 'home' },
  { label: 'summary', href: '#about', id: 'about' },
  { label: 'experience', href: '#experience', id: 'experience' },
  { label: 'projects', href: '#projects', id: 'projects' },
  { label: 'achievements', href: '#achievements', id: 'achievements' },
  { label: 'certs', href: '#certifications', id: 'certifications' },
  { label: 'contact', href: '#contact', id: 'contact' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoClicks, setLogoClicks] = useState(0);
  const [logoJoke, setLogoJoke] = useState(false);
  const [themeJoke, setThemeJoke] = useState(false);
  const themeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (themeTimeoutRef.current) clearTimeout(themeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navItems.map((item) => item.id);
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setLogoJoke(true);
      setTimeout(() => setLogoJoke(false), 3000);
      setLogoClicks(0);
    }
    scrollToSection('#home');
  };

  const handleThemeClick = () => {
    if (themeTimeoutRef.current) clearTimeout(themeTimeoutRef.current);
    setThemeJoke(true);
    themeTimeoutRef.current = setTimeout(() => setThemeJoke(false), 4000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="relative">
            <button
              type="button"
              onClick={handleLogoClick}
              className="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              <span className="text-primary">~/</span>
              {portfolioData.personal.name.split(' ').pop()?.toLowerCase()}
            </button>
            {logoJoke && (
              <span className="absolute top-full left-0 mt-1 font-mono text-[10px] text-accent whitespace-nowrap animate-fade-in">
                sudo hire-me ✓
              </span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                title={navTooltips[item.id]}
                onClick={() => scrollToSection(item.href)}
                className={`font-mono text-xs uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={handleThemeClick}
                title="Toggle theme"
                aria-label="Toggle theme — dark mode only"
                aria-expanded={themeJoke}
                className={`rounded-sm p-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  themeJoke
                    ? 'text-primary bg-primary/10 shadow-[0_0_12px_hsl(262_83%_58%_/_0.35)]'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Moon className={`h-3.5 w-3.5 ${themeJoke ? 'animate-pulse' : ''}`} />
              </button>
              {themeJoke && (
                <div className="absolute top-full right-0 mt-2 w-72 z-50">
                  <ThemeJokePopup />
                </div>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden rounded-sm relative ${
              themeJoke ? 'text-primary bg-primary/10' : 'hover:bg-secondary'
            }`}
            onClick={handleThemeClick}
            aria-label="Toggle theme — dark mode only"
            aria-expanded={themeJoke}
          >
            <Moon className={`h-4 w-4 ${themeJoke ? 'animate-pulse' : ''}`} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary rounded-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {themeJoke && (
          <div className="md:hidden pb-2 animate-popup-in">
            <ThemeJokePopup />
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden border border-border bg-card rounded-sm mt-1 mb-2 p-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 px-3 font-mono text-xs uppercase tracking-wide rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <span className="text-primary/50 mr-2">{navTooltips[item.id]}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
