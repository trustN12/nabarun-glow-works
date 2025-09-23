import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const [showMusicModal, setShowMusicModal] = useState(true);

  useEffect(() => {
    // Prevent scrolling
    // const preventScroll = (e: Event) => e.preventDefault();

    // Disable scrolling
    // document.body.style.overflow = "hidden"; // fallback
    // document.addEventListener("wheel", preventScroll, { passive: false });
    // document.addEventListener("touchmove", preventScroll, { passive: false });
    // document.addEventListener(
    //   "keydown",
    //   (e) => {
    //     const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "];
    //     if (keys.includes(e.key)) e.preventDefault();
    //   },
    //   { passive: false }
    // );

    const tl = gsap.timeline();

    //GSAP ANIMATIONS
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

    // Floating Hero Background
    gsap.to(heroRef.current, {
      y: -30,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      scale: 1.02,
    });

    // Aurora animations
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

    // Cleanup: remove scroll blockers
    // return () => {
    //   document.body.style.overflow = "auto";
    //   document.removeEventListener("wheel", preventScroll);
    //   document.removeEventListener("touchmove", preventScroll);
    // };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollNext = () => {
    // Enable scrolling
    // document.body.style.overflow = "auto";

    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Nabarun_cv.pdf";
    link.download = "Nabarun_Biswas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setShowMusicModal(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg overflow-x-hidden">
      <audio
        ref={audioRef}
        src="/lofi_back.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
        muted={false}
      />

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
        onClick={scrollNext}
      >
        <ArrowDown className="h-6 w-6 text-primary cursor-pointer" />
      </div>

      {/* Premium Music Modal */}
      {showMusicModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl">
          <div
            className="mx-4 relative bg-white/10 backdrop-blur-3xl border border-white/20 
        p-10 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.4)]
        max-w-md w-full text-center animate-in fade-in zoom-in duration-700"
          >
            {/* Floating dreamy aura */}
            <div className="absolute -top-24 -right-20 w-56 h-56 bg-gradient-to-tr from-pink-500/30 via-purple-500/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-28 -left-24 w-64 h-64 bg-gradient-to-bl from-yellow-400/30 via-pink-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-300" />

            {/* Floating glowing particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-2 h-2 bg-white/60 rounded-full blur-sm animate-bounce absolute top-10 left-1/4" />
              <div className="w-1.5 h-1.5 bg-pink-300/80 rounded-full blur-sm animate-pulse absolute top-20 right-1/3" />
              <div className="w-2 h-2 bg-cyan-300/70 rounded-full blur-md animate-ping absolute bottom-12 left-1/3" />
            </div>

            {/* Music description */}
            <p className="mb-6 text-md text-white/70 font-light drop-shadow-sm">
              Background music will be playing <br />
              for a more immersive, dreamy experience
            </p>

            {/* Best Experience Note */}
            <p className="mb-8 text-sm text-white/70 italic animate-pulse">
              For better experiences in mobile turn on
              <span className="font-semibold text-cyan-300"> Desktop mode</span>
            </p>

            {/* Okay Button */}
            <Button
              onClick={handlePlayMusic}
              className="relative px-12 py-4 rounded-2xl font-semibold text-lg 
          bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-white 
          shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-110 
          transition-transform duration-500 overflow-hidden group"
            >
              <span className="relative z-10">Okay</span>
              {/* Magical glow effect */}
              <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
