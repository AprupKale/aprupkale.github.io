import { MapPin, Building2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Undergraduate Researcher
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Aprup Kale
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Passionate about exploring theoretical computer science in general, with a keen interest in algorithmic game theory.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span>Department of Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>National University of Singapore</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-card border-4 border-background shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/aprup-kale-2.jpeg"
                    alt="Aprup Kale Image"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
