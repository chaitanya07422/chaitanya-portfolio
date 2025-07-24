import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, ArrowDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Software Developer',
    'AI & ML Enthusiast', 
    'Problem Solver',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const typeRole = async () => {
      const role = roles[currentRole];
      
      // Type out the role
      for (let i = 0; i <= role.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setTypedText(role.slice(0, i));
      }
      
      // Wait before starting to delete
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Delete the role
      for (let i = role.length; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setTypedText(role.slice(0, i));
      }
      
      // Move to next role
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeRole();
  }, [currentRole]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-lg sm:text-xl text-muted-foreground animate-slide-in-right">
              Hi there! 👋 I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-scale-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              I'm a{' '}
              <span className="text-primary font-semibold relative">
                {typedText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Passionate about creating innovative solutions with cutting-edge technology. 
            Currently working on AI-powered learning devices and exploring the intersection of technology and education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;