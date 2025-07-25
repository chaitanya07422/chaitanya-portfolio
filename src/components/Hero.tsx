import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, ArrowDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import Lottie from 'lottie-react';
import heroLottie from '@/assets/lottie/hero-lottie.json';

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
      {/* Lottie Animation as Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <Lottie animationData={heroLottie} loop autoPlay style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-lg sm:text-xl text-muted-foreground animate-slide-in-right">
              Hello World! 🚀 I'm
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #43e97b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0,0,0,0.15), 0 4px 24px #fff'
            }}
          >
            <span>
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
              style={{
                color: '#3b1c7a',
                background: 'none',
                textShadow: '2px 2px 8px rgba(255,255,255,0.7), 0 2px 12px #3b1c7a'
              }}
            >
              I'm a{' '}
              <span className="text-primary font-bold relative">
                {typedText}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            CI/CD Pipeline Test - Passionate about creating innovative solutions with cutting-edge technology. 
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
              href="https://github.com/chaitanya07422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-kadavakollu-354084278/"
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