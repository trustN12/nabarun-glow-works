import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/trustN12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nabarun-biswas-102bb118a', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:academyshreyn12@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="glass-card border-t border-primary/30 shadow-glow-dreamy overflow-x-hidden">
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



          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Technologies</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>React & Next.js</p>
              <p>TypeScript & JavaScript</p>
              <p>SAP ABAP & HANA</p>
              <p>Node.js & Express.js</p>
              <p>PostgreSQL, SQL & NoSQL</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nabarun Biswas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;