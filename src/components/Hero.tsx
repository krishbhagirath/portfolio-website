import { Github, Linkedin, Star, FileText } from "lucide-react";
import { hero } from "@/content/hero";
import { SquaresBackground } from "@/components/GalaxyBackground";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 sm:px-8 lg:px-12"
    >
      <SquaresBackground />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Left Aligned */}
          <div className="flex flex-col items-start text-left space-y-8">
            {/* Badge with current role */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 text-foreground/70" />
              <span className="text-sm text-foreground/80 font-light">
                {hero.badge}
              </span>
            </div>

            {/* Name - Split into first and last, smaller */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
                {hero.firstName}
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
                {hero.lastName}
              </h1>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground/90 tracking-wide">
              {hero.title}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-foreground/70 font-light max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-md border border-border text-base font-light text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                View Projects
              </a>
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-foreground text-background text-base font-light hover:bg-foreground/90 transition-all inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={hero.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-border hover:bg-card/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/70" />
              </a>
              <a
                href={hero.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-border hover:bg-card/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
          </div>

          {/* Right Image - Clean rectangle */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-lg overflow-hidden bg-secondary border border-border">
              <img
                src="/IMG_2819 (2).jpeg"
                alt="Krish Bhagirath"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
