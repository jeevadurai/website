import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MSFS Website Development",
      duration: "July 2024 - February 2025",
      role: "Full-Stack Developer",
      description: "A comprehensive web platform with advanced features and robust architecture. Designed RESTful APIs with Node.js and Express.js, integrating JWT authentication for security.",
      keyFeatures: [
        "RESTful API design with Node.js and Express.js",
        "JWT authentication implementation for enhanced security",
        "PostgreSQL query optimization for high performance",
        "Cloud deployment with scalability and high availability",
        "Efficient data management and retrieval systems"
      ],
      technologies: ["React.js", "Redux", "Node.js", "PostgreSQL", "Prisma", "JWT", "Express.js"],
      impact: "Delivered a scalable web platform with optimized performance and secure authentication"
    },
    {
      title: "Masha Books E-Commerce Admin Panel",
      duration: "February 2024 - June 2024",
      role: "Full-Stack Developer",
      description: "A comprehensive admin dashboard for e-commerce book management with full CRUD operations and user management capabilities.",
      keyFeatures: [
        "Complete Admin Dashboard development and debugging",
        "Add Book & Manage Books functionality with upload/edit capabilities",
        "Category selection and customer management systems",
        "Backend API optimization for smooth data operations",
        "Enhanced error handling and UI performance improvements"
      ],
      technologies: ["React.js", "Redux", "Node.js", "PostgreSQL", "Admin Dashboard"],
      impact: "Streamlined book management operations and improved admin user experience"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{project.role}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-foreground">Impact:</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;