import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
          About
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a Final Year Undergraduate Student in the Department of Computer Science at National University of Singapore. 
              My research currently focuses on algorithmic game theory, specifically fair division.
              I am broadly interested in all aspects of theoretical Computer Science, as well as explainable and fair AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am currently on the lookout for Research Assistant positions starting May 2026. 
              {/* I will also soon be applying for graduate school to pursue a PhD in Computer Science. */}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                  href="/docs/Aprup Kale - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </a>
              <a
                  href="/docs/Aprup Kale - Curriculum Vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Curriculum Vitae
                </Button>
              </a>
              <a
                  href="/docs/Aprup Kale - Transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Transcript
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Research Interests</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Fair Division</li>
                <li>• Algorithmic Game Theory</li>
                <li>• Explainable and Fair AI</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Education</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <p className="font-medium text-foreground">B.Comp. Computer Science</p>
                  <p className="text-muted-foreground">National University of Singapore, 2026</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
