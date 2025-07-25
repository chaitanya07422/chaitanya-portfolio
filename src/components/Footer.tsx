import { Heart, Github, Linkedin, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>

          {/* Built with love */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" /> using React + Tailwind
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/chaitanya07422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-kadavakollu-354084278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/kadavakollu123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;