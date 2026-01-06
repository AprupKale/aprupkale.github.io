import { Code, ExternalLink, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: ReactNode;
  tech: string;
  year?: number;
  url?: string;
  report?: string;
} 

const projects: Project[] = [
    {
        title: "Efficient Extractive Question Answering via Heterogeneous Transformer Ensembles",
        description: (
          <>
            Built and evaluated an ensemble QA system combining diverse base-sized transformer, systematically analysing architectural complementarity, calibration, and aggregation strategies. Showed that optimized soft-voting ensembles match large-model performance on SQuAD 1.1 (<strong>94.4 F1</strong>) at significantly lower deployment cost, highlighting strengths in our experimental design.
          </>
        ),
        tech: "Python, PyTorch, LLMs",
        year: 2025,
        url: "https://github.com/AprupKale/Extractive-QA",
        report: "extractive_qa_report.pdf",
    },
    {
        title: "Multimodal Histopathology Classification with Fine-Tuned Vision-Language Models",
        description: (
          <>
            Designed and implemented a CLIP-based multimodal pipeline for multi-label histopathology diagnosis, selectively fine-tuning image and text encoders and training a fused MLP head on <strong>44K image-report pairs</strong> from Quilt-1M. Conducted rigorous baseline comparisons, achieving <strong>0.99 micro-AUC</strong> and <strong>68% top-3 label accuracy</strong>, demonstrating gains from principled multimodal fusion.
          </>
        ),
        tech: "Python, PyTorch, CNNs, LLMs",
        year: 2024,
        url: "https://github.com/AprupKale/multimodal-classification",
        report: "multimodal_histopathology_report.pdf",
    },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
            A selection of projects I have worked on, either independently or as part of a team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <Card key={index} className="bg-background hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Code className="h-4 w-4 text-primary" />
                    <CardTitle className="font-serif text-lg">{proj.title}</CardTitle>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{proj.tech}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">{proj.description}</CardDescription>
                {(proj.url || proj.report) && (
                  <div className="flex items-center gap-2">
                    {proj.url && (
                      <a href={proj.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View
                        </Button>
                      </a>
                    )}

                    {proj.report && (
                      <a href={`/docs/${proj.report}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4" />
                          Report
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
