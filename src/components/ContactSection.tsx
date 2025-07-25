import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "jeevadurai17@gmail.com",
      href: "mailto:jeevadurai17@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6385596828",
      href: "tel:+916385596828"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Thanjavur, Tamil Nadu",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      href: "#"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:jeevadurai17@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity. I'm always excited to work on new challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                <p className="text-muted-foreground">
                  I'm currently open to new opportunities and interesting projects. 
                  Feel free to reach out if you'd like to collaborate or just want to say hello!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Start a Project?</CardTitle>
                <p className="text-muted-foreground">
                  I'm passionate about creating exceptional digital experiences. 
                  Let's bring your ideas to life with modern web technologies.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">What I Can Help With:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Full Stack Web Development</li>
                      <li>• React.js Frontend Applications</li>
                      <li>• Node.js Backend Services</li>
                      <li>• Database Design & Optimization</li>
                      <li>• API Development & Integration</li>
                      <li>• Cloud Deployment & DevOps</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-foreground">Current Status:</h4>
                    <p className="text-sm text-muted-foreground">
                      🟢 Available for new projects and opportunities
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:jeevadurai17@gmail.com">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;