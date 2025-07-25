import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import Lottie from 'lottie-react';
import heroLottie from '@/assets/lottie/hero-lottie.json';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const allSkills = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.tools,
    ...portfolioData.skills.webDevelopment,
    ...portfolioData.skills.softwareDevelopment,
    ...portfolioData.skills.softSkills
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startSkillAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startSkillAnimation = () => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < allSkills.length) {
          setVisibleSkills((prev) => [...prev, allSkills[nextIndex]]);
          return nextIndex;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 200);

    // Add first skill immediately
    setVisibleSkills([allSkills[0]]);
  };

  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages, color: 'bg-primary' },
    { title: 'Tools & Platforms', skills: portfolioData.skills.tools, color: 'bg-accent' },
    { title: 'Web Development', skills: portfolioData.skills.webDevelopment, color: 'bg-primary' },
    { title: 'Software Development', skills: portfolioData.skills.softwareDevelopment, color: 'bg-accent' },
    { title: 'Soft Skills', skills: portfolioData.skills.softSkills, color: 'bg-primary' }
  ];

  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Lottie Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <Lottie animationData={heroLottie} loop autoPlay style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer with a strong foundation in computer science and a keen interest in 
              artificial intelligence and machine learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className={`relative flex items-start mb-8 animate-fade-in-up`} 
                       style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline Dot */}
                    <div className={`absolute left-2 w-4 h-4 rounded-full ${edu.current ? 'bg-primary animate-glow' : 'bg-muted-foreground'} border-4 border-background`}></div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <Card className="hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-foreground">{edu.institution}</h4>
                          </div>
                          <p className="text-primary font-medium mb-2">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground mb-2">CGPA: {edu.cgpa}</p>
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <span className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {edu.duration}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              {edu.location}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
              
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.title} className={`animate-fade-in-up`} 
                     style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  <h4 className="text-lg font-medium mb-3 text-foreground">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`transition-all duration-300 transform hover:scale-105 ${
                          visibleSkills.includes(skill) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                          transitionDelay: `${visibleSkills.indexOf(skill) * 50}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}

              {/* Personal Note */}
              <Card className="bg-gradient-accent/10 border-accent/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about leveraging technology to solve real-world problems. 
                    My experience ranges from developing AI-powered applications to creating 
                    intuitive user interfaces. I enjoy working in collaborative environments 
                    and am always eager to learn new technologies and methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;