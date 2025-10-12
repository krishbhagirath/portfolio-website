import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { contact } from "@/content/contact";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-12">Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span></h2>
        
        <div className="bg-card p-8 rounded-2xl border border-border shadow-card space-y-6">
          <div className="flex items-center gap-4"><Mail className="h-6 w-6 text-primary" /><a href={`mailto:${contact.email}`} className="text-lg hover:text-primary transition-colors">{contact.email}</a></div>
          <div className="flex items-center gap-4"><Phone className="h-6 w-6 text-primary" /><span className="text-lg">{contact.phone}</span></div>
          <div className="flex items-center gap-4"><MapPin className="h-6 w-6 text-primary" /><span className="text-lg">{contact.location}</span></div>
          <div className="flex gap-4 pt-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"><Github className="h-6 w-6" /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
