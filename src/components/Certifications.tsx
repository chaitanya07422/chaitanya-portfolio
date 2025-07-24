import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Certifications = () => {
  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      'NPTEL': 'bg-primary text-primary-foreground',
      'Coursera': 'bg-accent text-accent-foreground', 
      'CISCO Network Academy': 'bg-secondary text-secondary-foreground',
      'Infosys': 'bg-primary text-primary-foreground'
    };
    return colors[platform] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and completed courses that showcase my commitment to continuous learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors text-center">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Badge className={`${getPlatformColor(cert.platform)} w-full justify-center`}>
                  {cert.platform}
                </Badge>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(cert.verificationLink, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;