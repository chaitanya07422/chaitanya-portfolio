import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Users, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A record of professional experience across product engineering, AI systems, and cloud infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border-l-4 ${
                exp.current ? 'border-l-primary bg-gradient-to-r from-primary/5 to-transparent' : 'border-l-accent'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 flex-wrap">
                      <Building className="h-5 w-5 text-primary" />
                      {exp.role}
                      {exp.employmentType && (
                        <Badge variant="secondary" className="text-xs">
                          {exp.employmentType}
                        </Badge>
                      )}
                      {exp.current && (
                        <Badge className="bg-primary text-primary-foreground animate-glow">
                          Current
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                {'responsibilityGroups' in exp && exp.responsibilityGroups && exp.responsibilityGroups.length > 0 ? (
                  <div className="space-y-6">
                    {exp.responsibilityGroups.map((group, groupIndex) => (
                      <div key={groupIndex}>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : exp.responsibilities.length > 0 ? (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Users className="mr-2 h-4 w-4 text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Code className="mr-2 h-4 w-4 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {exp.company === "PocketRocket Labs" && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      🎯 Current Project: Oriel (Kea)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      End-to-end development of an educational platform for children aged 5–14 on handheld devices—
                      spanning Qt/QML client applications, NCERT-aligned AI tutoring, scalable backend infrastructure, 
                      and sub-5ms vector search for conversational memory.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-accent/10 border-accent/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Professional Focus</h3>
              <p className="text-muted-foreground">
                Focused on delivering scalable, high-performance systems at the intersection of 
                embedded software, AI, and cloud infrastructure—with a commitment to continuous 
                technical growth and engineering excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
