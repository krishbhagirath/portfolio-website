import { navigation } from "@/content/navigation";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          {navigation.slice(1, 4).map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.name}</a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Krish Bhagirath | All Rights Reserved</p>
      </div>
    </footer>
  );
};
