import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building exceptional user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Full Stack Developer with expertise in modern web technologies. 
              My journey in software development has equipped me with strong skills in both 
              front-end and back-end development, with a particular focus on creating secure, 
              scalable, and user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in React.js, Node.js, and database management systems like 
              MongoDB and PostgreSQL, I enjoy solving complex problems and turning ideas 
              into reality through code.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Thanjavur, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>1+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Master of Computer Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Adaikala Matha College, Thanjavur</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">73%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Bachelor of Computer Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Adaikala Matha College, Thanjavur</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">83.3%</span>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;