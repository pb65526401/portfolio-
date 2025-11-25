import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Platform",
      description: "A comprehensive property listing platform with advanced search, filtering, and CRUD operations. Built with modern tech stack for optimal performance.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "HMIS - Hospital Management",
      description: "Complete hospital management system with OPD, IPD, Lab, and Billing modules. Mobile-responsive dashboard for healthcare professionals.",
      tech: ["React Native", "Node.js", "MongoDB", "Express.js"],
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "SMS Application",
      description: "Programmatic SMS sending and receiving application with message scheduling. Integrated with Twilio API for reliable delivery.",
      tech: ["Node.js", "Express.js", "Twilio API"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "3D Portfolio Website",
      description: "Modern portfolio website featuring 3D interactive elements, dark/light theme toggle, and smooth animations. Built with React and Three.js.",
      tech: ["React.js", "Tailwind CSS", "Three.js", "Framer Motion"],
      image: "bg-gradient-to-br from-primary to-accent",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover-lift"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
