import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { link } from "fs";

const sections = [
  {
    title: "Talks and Presentations",
    // description: "Talks and presentations.",
    items: [
        { title: "Java in the Browser: Expanding Programming Education with Source Academy", venue: "KTH Royal Institute of Technology and Uppsala University", date: "Feb 2025", linkLabel: "Slides", linkHref: "https://drive.google.com/file/d/1ouXADOfG3Yka9yoN2O355duf05DaSTwp/view?usp=sharing" },
        { title: "Simplifying Java Education: A Classroom-Focused JVM for the Web", venue: "Java Platform Group, Oracle", date: "Feb 2025", linkLabel: "Slides", linkHref: "https://drive.google.com/file/d/1Foz49yD-o8kPkjJnEY-7MB5dJt4aIBmb/view?usp=sharing" },
      // { title: "", venue: "", location: "", date: "", linkLabel: "", linkHref: "" },
    ],
  },
  {
    title: "Honors and Awards",
    // description: "Honors and awards.",
    items: [
        { title: "REx Grant", issuer: "National University of Singapore", date: "2024" },
      // { title: "", issuer: "", date: "", note: "", linkLabel: "", linkHref: "" },
    ],
  },
  {
    title: "Reviewing Duties",
    // description: "Conference and journal service.",
    items: [
        { role: "Program Committee", venue: "AAAI 2026", year: "2025" },
      // { role: "", venue: "", year: "", note: "", linkLabel: "", linkHref: "" },
    ],
  },
];

const MiscellaneousSection = () => {
  return (
    <section id="misc" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Miscellaneous
          </h2>
          <p className="text-muted-foreground mt-3">
            Talks, awards, and professional service that complement my research and teaching.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:shadow-md transition-shadow"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="font-serif text-lg">{section.title}</CardTitle>
                  {/* Optional: show a count badge once you add entries */}
                  <Badge variant="secondary" className="shrink-0">
                    {section.items.length}
                  </Badge>
                </div>
                {/* <CardDescription className="leading-relaxed">
                  {section.description}
                </CardDescription> */}
              </CardHeader>

              <CardContent>
                {section.items.length === 0 ? (
                  <div className="rounded-lg border border-dashed p-4">
                    <p className="text-sm text-muted-foreground">
                      Add entries here.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Keep items concise. Prefer one-line titles and a short venue/date line.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {section.items.map((item: any, idx: number) => (
                      <li key={idx} className="group">
                        {/* Minimal, flexible rendering (you fill fields; only non-empty will show) */}
                        <div className="space-y-1">
                          {item.title && (
                            <p className="text-sm font-medium text-foreground">
                              {item.title}
                            </p>
                          )}
                          {(item.venue || item.issuer || item.role) && (
                            <p className="text-sm text-muted-foreground">
                              {[item.role, item.venue, item.issuer].filter(Boolean).join(" • ")}
                            </p>
                          )}
                          {(item.location || item.date || item.year) && (
                            <p className="text-xs text-muted-foreground">
                              {[item.location, item.date, item.year].filter(Boolean).join(" • ")}
                            </p>
                          )}
                          {item.note && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.note}
                            </p>
                          )}
                          {item.linkHref && (
                            <a
                              href={item.linkHref}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block text-sm text-foreground underline underline-offset-4 opacity-80 hover:opacity-100"
                            >
                              {item.linkLabel || "Link"}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiscellaneousSection;
