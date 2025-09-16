import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate elements in sequence
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonsRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(socialRef.current?.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.2"
    );

    // Floating animation for the hero container
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-4 text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 neon-text"
        >
          Nabarun Biswas
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Fullstack Software Engineer specializing in modern web technologies, 
          <span className="text-primary"> SAP ABAP</span> and 
          <span className="text-secondary"> SAP HANA</span> development
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="glow-button bg-gradient-primary hover:bg-gradient-primary text-primary-foreground px-8 py-4 text-lg"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg glow-button"
          >
            Download CV
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div ref={socialRef} className="flex justify-center space-x-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 pulse-glow"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-full border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-full border-2 border-accent/30 hover:border-accent hover:bg-accent/10"
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;