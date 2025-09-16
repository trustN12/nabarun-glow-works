import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nabarun.biswas@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold neon-text">Nabarun Biswas</h3>
            <p className="text-muted-foreground">
              Fullstack Software Engineer specializing in modern web technologies and SAP solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Technologies</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>React & Next.js</p>
              <p>TypeScript & JavaScript</p>
              <p>SAP ABAP & HANA</p>
              <p>Node.js & Python</p>
              <p>PostgreSQL & MongoDB</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nabarun Biswas. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;