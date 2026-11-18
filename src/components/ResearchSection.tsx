import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Quantum Property Testing",
    description: "Developing quantum algorithms for Hamiltonian property testing.",
    tags: ["Quantum Algorithms", "Property Testing"],  
    status: "Active",
  },
  {
    title: "Asymptotic Fair Division",
    description: "Investigated the existence of fair and efficient allocations of non-identical items in the asymptotic setting.",
    tags: ["Fair Division", "Asymptotic Analysis"],  
    status: "Inactive",
  },
  {
    title: "Java in Source Academy",
    description: "Worked on implementing a virtual machine and compiler for running Java programs in Source Academy",
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
          My current research focus is in quantum algorithms.
          I previously also worked on fair division and programming language implementation.
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
