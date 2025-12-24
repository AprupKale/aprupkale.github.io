import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Asymptotic Fair Division",
    description: "Investigating algorithms and theoretical bounds for fair division problems in asymptotic settings, focusing on efficiency and fairness guarantees.",
    tags: ["Fair Division", "Asymptotic Analysis"],  
    status: "Active",
  },
  {
    title: "Java in Source Academy",
    description: "Developing and maintaining the Java programming language support in the Source Academy, an educational platform for teaching programming concepts.",
    tags: ["PL Implementation", "Educational Tools"],
    status: "Inactive",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Research
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          My current research focus is in asymptotic fair division.
          I previously also worked on programming language implementation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-serif text-lg">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className="shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
