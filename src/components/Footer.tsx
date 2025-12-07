import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sanskar Jadhav. Built with passion.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sanskarjadhav015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jadhav-sanskar-kishor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sanskarjadhav015@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
