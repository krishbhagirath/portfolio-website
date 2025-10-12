import { CheckCircle2 } from "lucide-react";
import { about } from "@/content/about";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative flex justify-center items-center animate-fade-in order-2 lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
                <img
                  src={about.image}
                  alt="About Krish Bhagirath"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>

            <ul className="space-y-4">
              {about.points.map((point, index) => (
                <li key={index} className="flex gap-3 items-start group">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
