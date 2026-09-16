import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <main className="text-white font-sans blueprint-grid" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Navbar />
      
      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 rounded-2xl"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-4xl font-bold mb-4 transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Featured Projects
          </h2>
          <div 
            className="w-20 h-1 mx-auto transition-colors duration-300"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group rounded-2xl overflow-hidden border transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-grid)';
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 
                  className="text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {project.title}
                </h4>
                <p 
                  className="text-sm mb-4 line-clamp-2 transition-colors duration-300"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl cursor-pointer p-3 transition-all font-semibold group/btn border"
                  style={{
                    backgroundColor: 'var(--color-accent-blue)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-accent-blue)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
}

export default Projects;
