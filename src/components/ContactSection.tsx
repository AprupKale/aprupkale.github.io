import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always happy to discuss research collaborations or potential job opportunities. 
              The best way to reach me is via email.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:aprup.kale@u.nus.edu"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>aprup.kale@u.nus.edu</span>
              </a>
              
              {/* <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Department of Computer Science</p>
                  <p>National University of Singapore</p>
                  <p>Singapore, 117543</p>
                </div>
              </div> */}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/AprupKale" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/aprup-kale-751b07210" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://x.com/aprup_kale" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
