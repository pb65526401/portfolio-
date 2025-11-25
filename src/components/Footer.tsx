import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadkhan", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ahmadkhan", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahmadtalibkhan1@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-text mb-2">Ahmad Khan</div>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer | BSCS @ Punjab University
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ahmad Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
