import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { contact } from "@/content/contact";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-12">
          Contact
        </h2>
        
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a href={`mailto:${contact.email}`} className="text-base hover:text-primary transition-colors font-light">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span className="text-base font-light">{contact.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span className="text-base font-light">{contact.location}</span>
          </div>
          <div className="flex gap-4 pt-4">
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
