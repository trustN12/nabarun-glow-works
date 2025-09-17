import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero Title: Slide in from the top with a bounce and glow
    tl.fromTo(
      titleRef.current,
      { y: -100, opacity: 0, filter: "blur(20px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "bounce.out",
        scale: 1.1,
        color: "white",
      }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(
        buttonsRef.current?.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .fromTo(
        socialRef.current?.children,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    // Floating Hero Background: More dramatic floating effect
    gsap.to(heroRef.current, {
      y: -30,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      scale: 1.02,
    });

    // Floating Aurora Background with different speeds
    gsap.to(".pulse-glow", {
      scale: 1.05,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      rotation: 45,
    });

    gsap.to(".aurora-bg", {
      scale: 1.05,
      duration: 5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      rotation: -45,
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Nabarun_Biswas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Dreamy Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl aurora-bg"></div>
        <div
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-2xl aurora-bg"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div
        ref={heroRef}
        className="container mx-auto px-4 text-center relative z-10"
      >
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

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Button
            variant="default"
            size="lg"
            className="glow-button bg-gradient-primary hover:bg-gradient-primary text-primary-foreground px-10 py-5 text-lg font-semibold shadow-glow-dreamy"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          <Button
          onClick={handleDownloadCV}
            variant="outline"
            size="lg"
            className="glass-card border-primary/50 text-primary hover:bg-primary/10 hover:text-primary px-10 py-5 text-lg font-semibold glow-button"
          >
            Download CV
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div ref={socialRef} className="flex justify-center space-x-6">
          <a
            href="https://github.com/trustN12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 pulse-glow"
            >
              <Github className="h-6 w-6" />
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/nabarun-biswas-102bb118a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
          <a
            href="mailto:academyshreyn12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-accent/30 hover:border-accent hover:bg-accent/10"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        <ArrowDown className="h-6 w-6 text-primary cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;
