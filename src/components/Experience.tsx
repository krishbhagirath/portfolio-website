import { useState } from "react";
import { Button } from "@/components/ui/button";
import { workExperience, volunteerExperience, education } from "@/content/experience";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"work" | "volunteer" | "education">("work");

  const experiences = activeTab === "work" ? workExperience : activeTab === "volunteer" ? volunteerExperience : education;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-8">Experience</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={() => setActiveTab("work")} variant={activeTab === "work" ? "default" : "outline"}>Work</Button>
          <Button onClick={() => setActiveTab("volunteer")} variant={activeTab === "volunteer" ? "default" : "outline"}>Volunteer</Button>
          <Button onClick={() => setActiveTab("education")} variant={activeTab === "education" ? "default" : "outline"}>Education</Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-card animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <img src={exp.logo} alt={exp.organization} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{exp.organization}</h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">{exp.period}</span>
                  </div>
                  <p className="text-primary font-semibold mb-4">{exp.title}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
