import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

const About = () => {
  const stats = [
    { label: "CGPA", value: "3.21", icon: Award },
    { label: "University", value: "Punjab University", icon: GraduationCap },
    { label: "Year", value: "2025", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Get to know more about my background and journey
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover-lift text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg leading-relaxed text-foreground mb-6">
              I'm a passionate <span className="text-primary font-semibold">full-stack developer</span> with expertise in building modern web applications. Currently completing my Bachelor of Science in Computer Science at Punjab University with a strong academic record.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              My technical journey spans across <span className="text-accent font-semibold">frontend technologies</span> like React.js, Tailwind CSS, and JavaScript, as well as <span className="text-accent font-semibold">backend development</span> with Node.js, Express.js, and MongoDB. I also have experience with Python and C++ programming.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I'm dedicated to creating elegant, efficient, and user-centric solutions. Whether it's building responsive interfaces or architecting robust backend systems, I bring creativity and technical excellence to every project.
            </p>

            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Punjab, Pakistan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
