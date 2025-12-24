import { skills } from "@/content/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:scale-105 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs md:text-sm text-center text-foreground/80 font-light">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
