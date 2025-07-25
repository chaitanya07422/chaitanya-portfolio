import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, Star, Calendar, Building } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Current Project', 'Machine Learning', 'Web Application', 'IoT & AI', 'Web Development'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Current Project': 'bg-primary text-primary-foreground',
      'Machine Learning': 'bg-accent text-accent-foreground',
      'Web Application': 'bg-secondary text-secondary-foreground',
      'IoT & AI': 'bg-primary text-primary-foreground',
      'Web Development': 'bg-accent text-accent-foreground'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning AI/ML, web development, IoT, and innovative solutions 
            that demonstrate my passion for technology and problem-solving.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'hover:bg-secondary'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden ${
                project.category === 'Current Project' ? 'border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                {project.category === 'Current Project' && (
                  <div className="absolute -top-1 -right-1">
                    <Badge className="bg-primary text-primary-foreground animate-glow">
                      <Star className="w-3 h-3 mr-1" />
                      Current
                    </Badge>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  {project.achievement && (
                    <Badge variant="outline" className="border-accent text-accent">
                      🏆 Finalist
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">{project.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Company badge for work projects */}
                {project.company && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="w-4 h-4 mr-1" />
                    {project.company}
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={project.status === 'In Development' ? 'default' : 'secondary'}
                    className={project.status === 'In Development' ? 'animate-glow' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center gap-2">
                          {project.title}
                          {project.category === 'Current Project' && (
                            <Badge className="bg-primary text-primary-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </DialogTitle>
                        <p className="text-primary font-medium">{project.subtitle}</p>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {project.company && (
                          <div className="flex items-center text-muted-foreground">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{project.company}</span>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span className="text-muted-foreground text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {project.achievement && (
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                            <h4 className="font-semibold text-accent mb-2 flex items-center">
                              🏆 Achievement
                            </h4>
                            <p className="text-sm text-muted-foreground">{project.achievement}</p>
                          </div>
                        )}

                        <div className="flex space-x-2">
                          {project.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github || "https://github.com/chaitanya07422"} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {project.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github || "https://github.com/chaitanya07422"} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;