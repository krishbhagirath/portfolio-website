import { useState, useEffect, useRef } from "react";
import { Calendar, Github } from "lucide-react";
import { workExperience, volunteerExperience, education } from "@/content/experience";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"work" | "volunteer" | "education">("work");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = activeTab === "work" ? workExperience : activeTab === "volunteer" ? volunteerExperience : education;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [experiences]);

  // Reset visible items when tab changes
  useEffect(() => {
    setVisibleItems(new Set());
  }, [activeTab]);

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-4 text-center">
          Experience
        </h2>
        <p className="text-center text-foreground/70 font-light mb-16">
          Building innovative solutions across full-stack development, AI/ML, and embedded systems
        </p>
        
        <div className="flex gap-6 justify-center mb-16">
          <button 
            onClick={() => setActiveTab("work")} 
            className={`text-sm font-light transition-colors ${
              activeTab === "work" 
                ? "text-foreground border-b border-foreground pb-1" 
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Work
          </button>
          <button 
            onClick={() => setActiveTab("volunteer")} 
            className={`text-sm font-light transition-colors ${
              activeTab === "volunteer" 
                ? "text-foreground border-b border-foreground pb-1" 
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Volunteer
          </button>
          <button 
            onClick={() => setActiveTab("education")} 
            className={`text-sm font-light transition-colors ${
              activeTab === "education" 
                ? "text-foreground border-b border-foreground pb-1" 
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                className={`relative pl-24 transition-all duration-700 ${
                  visibleItems.has(idx)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-foreground border-4 border-background z-10"></div>

                {/* Experience card */}
                <div className="relative bg-card border border-border rounded-lg p-6 hover:border-foreground/30 transition-all">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-4 top-4 p-2 rounded-md border border-border hover:border-foreground/40 hover:bg-foreground/5 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    {exp.logo && (
                      <img 
                        src={exp.logo} 
                        alt={exp.organization} 
                        className="w-12 h-12 object-contain flex-shrink-0 rounded" 
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-light mb-1">{exp.title}</h3>
                      <p className="text-foreground/80 font-light mb-2">{exp.organization}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 font-light">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <p key={i} className="text-sm text-foreground/70 leading-relaxed font-light flex items-start gap-3">
                        <span className="text-foreground/80 mt-1.5 text-lg leading-none">•</span>
                        <span>{resp}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
