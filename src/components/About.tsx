import { about } from "@/content/about";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-12 text-center">
          About
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          <ul className="space-y-4 text-left">
            {about.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-foreground mt-2 font-light">•</span>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light flex-1">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
