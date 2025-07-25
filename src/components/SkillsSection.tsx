import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "Node.js", "HTML", "CSS"],
      color: "text-primary"
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "Redux", "HTML5", "CSS3", "Responsive Design"],
      color: "text-accent-blue"
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      color: "text-success"
    },
    {
      title: "Databases & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Cloud Deployment"],
      color: "text-secondary-glow"
    }
  ];

  const languages = ["Tamil", "English"];

  return (
    <section id="skills" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-2 ${category.color}`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Languages</h3>
          <div className="flex justify-center gap-4">
            {languages.map((language, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-lg py-2 px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;