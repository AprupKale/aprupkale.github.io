import { Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Aprup Kale
          </button>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("research")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Research
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("publications")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Publications
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("teaching")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Teaching
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("misc")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Misc
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          <a
            href="mailto:aprup.kale@u.nus.edu"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
