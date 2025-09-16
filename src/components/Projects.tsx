import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

// Import project images
import project1 from "@/assets/project1.webp";
import project2 from "@/assets/project2.webp";
import project3 from "@/assets/project3.webp";
import project4 from "@/assets/project4.webp";
import project5 from "@/assets/project5.webp";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Mediecho AI",
      description: `Built a cutting-edge AI medical consultation platform enabling patients to interact with a lifelike,
  voice-enabled doctor avatar. Integrated real-time speech recognition, natural language processing, and
  AI-generated medical reports. Implemented subscription plans with credit-based usage tracking and
  secure online payments.`,
      image: project1,
      technologies: [
        "NextJS",
        "Typescript",
        "Tailwind CSS",
        "shadcn/ui",
        "Accernity UI",
        "NeonDB",
        "postgreSQL",
        "Clerk Auth",
        "Razorpay",
        "Open-router API",
        "VAPI AI",
        "Framer",
        "Drizzle-ORM",
        "ChatGPT",
        "Assembly AI",
      ],
      liveUrl: "https://www.mediecho.in/",
      githubUrl: "https://github.com/trustN12/mediecho.git",
      featured: true,
    },
    {
      id: 2,
      title: "Frontend Guru",
      description:
        "A modern frontend learning platform with interactive video tutorials, AI assistant, and payment integration",
      image: project2,
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Magic UI",
        "Firebase",
        "Clerk Auth",
        "Razorpay",
        "React Query",
        "React Router DOM",
        "Framer Motion",
        "EmailJS",
        "ChatGPT",
        "11Labs AI",
      ],
      liveUrl: "https://frontend-guru.netlify.app/",
      githubUrl: "https://github.com/trustN12/frontend-guru",
      featured: true,
    },
    {
      id: 3,
      title: "MyCertifolio",
      description:
        "A personal digital portfolio to showcase certificates, academic thesis, and achievements with a clean, animated UI",
      image: project3,
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Magic UI",
        "Embla Carousel",
        "React Router DOM",
        "Framer Motion",
        "Zod",
        "React Hook Form",
        "TanStack React Query",
        "Lucide React",
        "Supabase",
        "Radix UI",
        "Sonner",
      ],
      liveUrl: "https://stirring-meringue-b80f45.netlify.app/",
      githubUrl: "https://github.com/trustN12/MYcertifolio",
      featured: false,
    },
    {
      id: 4,
      title: "CodeQuest App",
      description: "A web-app with a coding quiz and live javascript editor.",
      image: project4,
      technologies: [
        "React",
        "Tailwind CSS",
        "React-Ace",
        "React-Router",
        "Framer-motion",
      ],
      liveUrl: "https://code-quest-mu.vercel.app/",
      githubUrl: "https://github.com/trustN12/CodeQuest.git",
      featured: false,
    },
    {
      id: 5,
      title: "YouTube Backend API",
      description:
        "A full-featured backend API for YouTube-like functionality, built with MERN stack. Supports authentication, video uploads, secure storage, JWT-based sessions, and cloud integration.",
      image: project5, // you can replace this with a backend-themed placeholder
      technologies: [
        "Node.js",
        "Express.js",
        "Mongoose",
        "Cloudinary",
        "Bcrypt",
        "Body-Parser",
        "Express-FileUpload",
        "Dotenv",
        "JWT",
        "Postman"
      ],
      githubUrl: "https://github.com/trustN12/yt-backend-api.git",
      featured: true,
      isBackend: true, // ✅ added flag
    }
    
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards
      gsap.fromTo(
        projectsRef.current?.children,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title animation
      gsap.fromTo(
        ".projects-title",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
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

        <div
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden glass-card hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-glow-dreamy shimmer ${
                project.featured ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Live Preview (Eye) */}
                  {!project.isBackend && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="glow-button bg-gradient-primary text-primary-foreground shadow-glow-primary"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </a>
                  )}

                  {/* GitHub Code */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="glass-card border-secondary/50 text-secondary hover:bg-secondary/20 glow-button"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>

                  {/* External Link */}
                  {/* {!project.isBackend && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="glass-card border-accent/50 text-accent hover:bg-accent/20 glow-button"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )} */}
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
                  {/* Live Demo */}
                  {!project.isBackend && project.liveUrl && (
                    <Button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      variant="default"
                      size="sm"
                      className="glow-button bg-gradient-primary hover:bg-gradient-primary text-primary-foreground flex-1 shadow-glow-primary"
                    >
                      Live Demo
                    </Button>
                  )}
                  {/* Code */}
                  <Button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    variant="outline"
                    size="sm"
                    className="glass-card border-primary/50 text-primary hover:bg-primary/20 flex-1 glow-button hover:text-white"
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
