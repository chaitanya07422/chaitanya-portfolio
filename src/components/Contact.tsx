import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Copy, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_0s23l79',      // Replace with your EmailJS service ID
      'template_xz0qn9j',     // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kadavakolluchaitanya@gmail.com', // recipient
      },
      '3ZlpL-EYmVg3YfUCl'          // Replace with your EmailJS user ID (public key)
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
      console.error('EmailJS error:', error);
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard.`,
    });
  };

  const socialLinks = [
    { icon: Github, url: portfolioData.personal.github, label: 'GitHub' },
    { icon: Linkedin, url: portfolioData.personal.linkedin, label: 'LinkedIn' },
    { icon: Code, url: "https://leetcode.com/u/kadavakollu123/", label: 'LeetCode' }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between group cursor-pointer" 
                     onClick={() => copyToClipboard(portfolioData.personal.email, 'Email')}>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                    <span>{portfolioData.personal.email}</span>
                  </div>
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>

                <div className="flex items-center justify-between group cursor-pointer"
                     onClick={() => copyToClipboard(portfolioData.personal.phone, 'Phone')}>
                  <div className="flex items-center">
                    <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
                    <span>{portfolioData.personal.phone}</span>
                  </div>
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>

                <div className="flex items-center">
                  <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;