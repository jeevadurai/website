import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-current" /> by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">
              Jeeva Annadurai
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Jeeva Annadurai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;