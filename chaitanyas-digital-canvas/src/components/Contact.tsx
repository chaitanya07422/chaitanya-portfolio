import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Copy, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const { toast } = useToast();
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_0s23l79',
        'template_xz0qn9j',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: portfolioData.personal.email,
        },
        '3ZlpL-EYmVg3YfUCl'
      )
      .then(() => {
        toast({ title: 'Message sent', description: 'I will respond shortly.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        toast({
          title: 'Unable to send',
          description: 'Please try again or email directly.',
        });
        console.error('EmailJS error:', error);
      })
      .finally(() => setIsSubmitting(false));
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied', description: `${type} copied to clipboard.` });
  };

  const socialLinks = [
    { icon: Github, url: portfolioData.personal.github, label: 'GitHub' },
    { icon: Linkedin, url: portfolioData.personal.linkedin, label: 'LinkedIn' },
    { icon: Code, url: portfolioData.personal.leetcode, label: 'LeetCode' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="contact"
          subtitle="Available for engineering roles, technical collaboration, and consulting inquiries."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="infra-card p-5 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                direct
              </h3>

              <button
                type="button"
                onClick={() => copyToClipboard(portfolioData.personal.email, 'Email')}
                className="flex items-center justify-between w-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                <span className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {portfolioData.personal.email}
                </span>
                <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(portfolioData.personal.phone, 'Phone')}
                className="flex items-center justify-between w-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                <span className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {portfolioData.personal.phone}
                </span>
                <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
              </button>

              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {portfolioData.personal.location}
              </span>
            </div>

            <div className="infra-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                links
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-2 border border-border hover:border-primary/30"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="infra-card p-5 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              send message
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                name="name"
                placeholder="your_name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="rounded-sm border-border bg-secondary/30 font-mono text-sm focus-visible:ring-primary"
              />
              <Input
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-sm border-border bg-secondary/30 font-mono text-sm focus-visible:ring-primary"
              />
            </div>
            <Input
              name="subject"
              placeholder="RE: interesting opportunity"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="rounded-sm border-border bg-secondary/30 font-mono text-sm focus-visible:ring-primary"
            />
            <Textarea
              name="message"
              placeholder="// tell me about the role, the stack, or why your CI is green..."
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="rounded-sm border-border bg-secondary/30 font-mono text-sm focus-visible:ring-primary"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm bg-primary hover:bg-primary/90 font-mono text-sm"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'sending...' : 'send'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
