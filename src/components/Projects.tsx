import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const DevpostIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-4 w-4" aria-hidden="true">
    <path fill="#13b5ec" d="M8 18.5 20 6h24l12 12.5-12 27.5H20z" />
    <path fill="#fff" d="M25 20h9.5c6.2 0 10.5 3.9 10.5 11s-4.2 11-10.4 11H25zm9.4 17.3c3.7 0 5.8-2.7 5.8-6.3 0-3.7-2.1-6.3-5.8-6.3H30v12.6z" />
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-12">
          Projects
        </h2>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const githubLink = project.externalLinks?.find((link) => link.label === "GitHub");
            const devpostLink = project.externalLinks?.find((link) => link.label === "Devpost");
            const primaryRepoLink = project.id === "pawgress" ? devpostLink ?? githubLink : githubLink;

            return (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer flex flex-col h-full rounded-lg overflow-hidden">
                    {/* Image Section - Light Gray Background */}
                    <div className="relative w-full rounded-t-lg overflow-hidden bg-gray-200 aspect-[16/9]">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover scale-102 group-hover:scale-115 transition-transform duration-500" 
                      />
                    </div>
                    
                    {/* Content Section - Dark Gray Background */}
                    <div className="flex flex-col flex-1 bg-secondary p-6 rounded-b-lg">
                      {/* Title */}
                      <h3 className="text-xl font-light mb-3 text-foreground leading-tight">{project.title}</h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground font-light mb-6 flex-1 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 py-3 px-4 rounded-lg bg-foreground text-background border border-foreground font-light hover:opacity-90 transition-opacity">
                          View Project
                        </button>
                        {primaryRepoLink && (
                          <a
                            href={primaryRepoLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="py-3 px-4 rounded-lg border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all flex items-center justify-center"
                          >
                            {primaryRepoLink.label === "Devpost" ? (
                              <DevpostIcon />
                            ) : (
                              <Github className="w-5 h-5 text-foreground" />
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader className="flex flex-row items-start justify-between gap-4">
                    <div>
                      <DialogTitle className="text-2xl font-semibold">{project.title}</DialogTitle>
                    </div>
                    {primaryRepoLink && (
                      <Button
                        asChild
                        variant="default"
                        className="group bg-foreground text-background hover:opacity-90"
                      >
                        <a href={primaryRepoLink.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {primaryRepoLink.label === "Devpost" ? (
                            <>
                              <DevpostIcon />
                              <span>Devpost</span>
                            </>
                          ) : (
                            <>
                              <Github className="h-4 w-4" />
                              <span>GitHub</span>
                            </>
                          )}
                        </a>
                      </Button>
                    )}
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Image Carousel */}
                    {project.images.length > 0 && (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, i) => (
                            <CarouselItem key={i}>
                              <div className="flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
                                <img src={image} alt={`${project.title} - Image ${i + 1}`} className="w-full h-auto max-h-[400px] object-contain" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                    
                    {project.details && project.details.length > 0 && (
                      <div className="space-y-2">
                        {project.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.externalLinks
                        ?.filter((link) => link.label !== "GitHub" && link.label !== primaryRepoLink?.label)
                        .map((link, i) => (
                          <Button 
                            key={i} 
                            asChild 
                            variant="outline"
                            className="group"
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              {link.label === "Devpost" ? (
                                <>
                                  <DevpostIcon />
                                  <span>Devpost</span>
                                </>
                              ) : (
                                <>
                                  {link.label}
                                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                            </a>
                          </Button>
                        ))}
                    </div>

                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};
