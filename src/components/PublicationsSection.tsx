import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Fairly Dividing Non-identical Random Items: Just Sample or Match",
    authors: "Aprup Kale, Rucha Kulkarni, Navya Garg",
    venue: "Preprint",
    type: "Preprint",
    year: 2025,
    url: "https://arxiv.org/abs/2512.17238",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Selected Publications
          </h2>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <a
              href="https://scholar.google.com/citations?user="
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Full List
            </a>
          </Button>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <article 
              key={index} 
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-primary font-medium">{pub.venue}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{pub.year}</span>
                  </div>
                </div>
                <a href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="shrink-0 gap-2">
                    <FileText className="h-4 w-4" />
                    arXiv
                  </Button>
                </a>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
