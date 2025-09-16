import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import project images
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';
import project5 from '@/assets/project5.jpg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Platform",
      description: "Modern e-commerce dashboard with real-time analytics, inventory management, and sales forecasting. Built with React, TypeScript, and integrated with SAP HANA for enterprise-grade data processing.",
      image: project1,
      technologies: ["React", "TypeScript", "SAP HANA", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Task Manager",
      description: "Intelligent task management system with AI-driven priority suggestions, team collaboration features, and advanced analytics. Seamlessly integrates with SAP systems for enterprise workflows.",
      image: project2,
      technologies: ["Next.js", "Python", "OpenAI API", "SAP ABAP", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Intelligence App",
      description: "Real-time weather application with predictive analytics, location-based services, and custom notification system. Features beautiful UI with advanced data visualization.",
      image: project3,
      technologies: ["Vue.js", "TypeScript", "Weather API", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive social media management platform with sentiment analysis, engagement tracking, and automated reporting features integrated with enterprise systems.",
      image: project4,
      technologies: ["React", "Python", "TensorFlow", "SAP Gateway", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description: "Advanced cryptocurrency portfolio management with real-time tracking, profit/loss analysis, and risk assessment tools. Features secure data handling and enterprise-grade architecture.",
      image: project5,
      technologies: ["Next.js", "TypeScript", "CoinGecko API", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards
      gsap.fromTo(projectsRef.current?.children, 
        { y: 100, opacity: 0, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animation
      gsap.fromTo(".projects-title", 
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="projects-title text-4xl md:text-6xl font-bold text-center mb-16 neon-text">
          Featured Projects
        </h2>
        
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-primary ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-primary/20 hover:bg-primary text-primary-foreground">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-secondary/20 hover:bg-secondary text-secondary-foreground">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-accent/20 hover:bg-accent text-accent-foreground">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-gradient-primary hover:bg-gradient-primary text-primary-foreground flex-1"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;