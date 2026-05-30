import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, Zap, Brain, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Next.js','Shadcn UI', 'Gsap', 'Framer', 'Tailwind CSS', 'Axios'] },
    { category: 'Backend', icon: Server, items: ['ASP.NET Core Web API', 'ADO.NET', 'ASP.NET MVC', 'Node.js', 'Express.js', 'Authentications', 'REST APIs'] },
    { category: 'Database', icon: Database, items: ['MSSQL', 'MongoDB', 'Convex'] },
    { category: 'DevOps & Tools', icon: Code, items: ['Basic Firebase', 'Netlify', 'Clerk', 'Razorpay', 'Git', 'Drizzle-ORM', 'Renders', 'Docker (Basics)', 'Postman'] },
    { category: 'AI/ML', icon: Brain, items: ['Open-Router APIs', 'VAPI AI', '11Labs AI Agents', 'ChatGPT Prompts', 'Gemini AI API'] }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(cardsRef.current?.children, 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animation
      gsap.fromTo(".about-title", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="about-title text-4xl md:text-6xl font-bold text-center mb-16 neon-text">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Passionate Full Stack Software Engineer building scalable, high-performance web applications with modern technologies like <span className='text-emerald-500'>MERN</span>, <span className='text-primary'>.NET</span>, <span className='text-cyan-400'>Agentic AI</span>, and <span className='text-secondary'>Generative AI</span>. Focused on clean architecture, responsive UI, secure backend systems, and industry-grade innovation.

          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.category} 
                className="glass-card p-8 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-dreamy group hover:scale-105 shimmer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary mr-3">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;