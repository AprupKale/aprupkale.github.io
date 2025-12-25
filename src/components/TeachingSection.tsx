import { BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    code: "CS3230",
    title: "Design and Analysis of Algorithms",
    term: "AY2024/25 and AY2025/26",
    description:  "Fundamental concepts in algorithm design and analysis.",
  },
  {
    code: "CS2109S",
    title: "Introduction to AI and Machine Learning",
    term: "AY2024/25 and AY2025/26",
    description: "Core ideas and techniques in artificial intelligence and machine learning.",
  },
  {
    code: "CS2040S",
    title: "Data Structures and Algorithms",
    term: "AY2023/24 Semester 2",
    description: "Introduction to fundamental data structures and algorithms.",
  },
  {
    code: "CS2030S",
    title: "Programming Methodology II",
    term: "AY2023/24",
    description: "Continuation of programming concepts with a focus on object-oriented programming.",
  },
  {
    code: "CS2040S",
    title: "Programming Methodology I",
    term: "AY2023/24 Semester 1",
    description: "Introduction to fundamental programming concepts and techniques.",
  },
];

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Teaching
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I have taught (and continue teaching) courses in introductory Computer Science, Algorithm Design, and Machine Learning and Artificial Intelligence as an undergraduate part-time TA.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-mono text-sm">{course.code}</span>
                </div>
                <CardTitle className="font-serif text-lg">{course.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{course.term}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
