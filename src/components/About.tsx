import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layout, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React, Vue, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Node.js, Python, RESTful APIs, GraphQL",
  },
  {
    icon: Code2,
    title: "LMS Expertise",
    description: "Moodle, Canvas, Custom LMS solutions",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Payment gateways, Video platforms, Analytics",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thinking about moving your course online but overwhelmed by the technical side?<br /> I specialize in creating intuitive platforms
            where publishing your content is straightforward and stress-free.
            Just use the tools you already know - video recordings and text materials - and
            I'll provide the system that makes them accessible to students everywhere. No complex software to learn,
            no technical barriers - just pure teaching, amplified.          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-smooth border-border hover:border-accent/50">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <skill.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div> */}

        {/* Timeline */}
        {/* <div
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience Timeline</h3>
          <div className="space-y-6">
            {[
              {
                year: "2024",
                title: "Senior E-Learning Developer",
                description: "Building custom LMS solutions for international clients",
              },
              {
                year: "2022",
                title: "Full-Stack Developer",
                description: "Developed interactive course platforms and admin dashboards",
              },
              {
                year: "2020",
                title: "Started Freelancing",
                description: "Launched career focusing on educational technology",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  {index < 2 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
