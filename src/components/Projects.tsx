import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-card hover:scale-105">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="outline" size="sm">View Project</Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Image Carousel */}
                  {project.images.length > 0 && (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden">
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
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{project.overview}</p>
                  
                  {project.details && project.details.length > 0 && (
                    <div className="space-y-2">
                      {project.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground whitespace-pre-line">{detail}</p>
                      ))}
                    </div>
                  )}
                  
                  {project.externalLinks?.map((link, i) => (
                    <Button key={i} asChild variant="outline"><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></Button>
                  ))}

                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
