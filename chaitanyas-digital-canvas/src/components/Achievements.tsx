import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Users, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Achievements = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Competition':
        return <Trophy className="h-6 w-6 text-accent" />;
      case 'Leadership':
        return <Users className="h-6 w-6 text-primary" />;
      default:
        return <Award className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable accomplishments and recognitions that highlight my dedication to excellence and leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-transparent"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getIcon(achievement.category)}
                    <div>
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {achievement.date}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                {achievement.role && (
                  <Badge className="bg-primary text-primary-foreground">
                    {achievement.role}
                  </Badge>
                )}
                
                {achievement.title.includes('NASA') && (
                  <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm text-accent font-semibold">🚀 NASA Space Apps Challenge Impact</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Among 2,000+ global participants, recognized for innovative satellite data accessibility solutions.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;