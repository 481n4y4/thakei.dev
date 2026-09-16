import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import certificate from "../data/certificate";
import skills from "../data/skills";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import { motion } from "framer-motion";

function Home() {
  // Ambil hanya 1 item untuk featured certificate dan project
  const displayedCertificates = certificate.slice(0, 1);
  const displayedProjects = projects.slice(0, 1);

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

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="text-white min-h-screen font-sans blueprint-grid" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Navbar />

      {/* Hero Section - Full Width with 2 columns */}
      <section
        id="hero"
        className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundColor: 'var(--color-bg-base)' }}
      >
        {/* Blueprint Code Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-10 left-5 text-blue-400/30 font-mono text-sm">
            {`function Developer() {`}
            <br />
            {`  return "Hello World!";`}
            <br />
            {`}`}
          </div>
          <div className="absolute bottom-20 right-5 text-blue-300/30 font-mono text-sm">
            {`<Code passion="true" />`}
          </div>
        </div>

        <motion.div 
          className="z-10 text-center max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading with colored text */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
            variants={itemVariants}
          >
            <span style={{ color: 'var(--color-accent-red)' }}>thakei</span>
            <span style={{ color: 'var(--color-accent-blue)' }}>.dev_</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            className="text-2xl md:text-3xl font-mono mb-6 h-12 transition-colors duration-300"
            style={{ color: 'var(--color-accent-blue)' }}
            variants={itemVariants}
          >
            Hi, I'm Abinaya
          </motion.div>

          {/* Description */}
          <motion.div 
            className="mt-6 p-6 rounded-xl max-w-2xl mx-auto border transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)'
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-grid)';
            }}
          >
            <p className="md:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I turn{" "}
              <span className="font-semibold transition-colors duration-300" style={{ color: 'var(--color-accent-blue)' }}>ideas</span> into{" "}
              <span className="font-semibold transition-colors duration-300" style={{ color: 'var(--color-accent-blue)' }}>
                digital solutions
              </span>{" "}
              with clean code and modern technologies.
            </p>

            {/* Tech Stack */}
            <motion.div 
              className="mt-4 flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
            >
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "Express",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-sm border transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-base)',
                    borderColor: 'var(--color-accent-blue)',
                    color: 'var(--color-accent-blue)'
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.a
              href="/projects"
              className="group px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              style={{
                backgroundColor: 'var(--color-accent-blue)',
                color: 'var(--color-text-primary)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCode} />
              View My Work
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="/about"
              className="px-8 py-4 rounded-xl transition-all duration-300 font-semibold border"
              style={{
                borderColor: 'var(--color-accent-blue)',
                color: 'var(--color-accent-blue)'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                backgroundColor: 'rgba(55, 138, 221, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-rows-auto grid-auto-flow-dense">
          
          {/* About Card */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 rounded-2xl p-8 border transition-all duration-300 overflow-hidden relative"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
            whileHover={{
              scale: 1.02,
              y: -4
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-grid)';
            }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <h2 
                className="text-2xl font-bold transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Who am I?
              </h2>
              <p 
                className="text-sm leading-relaxed transition-colors duration-300"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Passionate FullStack developer from SMK Negeri 7 Semarang. Experienced with React, Node.js, and MongoDB.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-300 w-fit"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 rounded-2xl p-6 border transition-all duration-300 overflow-hidden relative"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-grid)';
            }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="relative z-10">
              <h3 
                className="text-xl font-bold mb-6 transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Skills
              </h3>
              <motion.div 
                className="grid grid-cols-4 sm:grid-cols-5 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-bg-base)',
                      borderColor: 'var(--color-border-grid)'
                    }}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-grid)';
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="font-bold text-xs text-center leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Certificate Featured */}
          {displayedCertificates[0] && (
            <motion.div
              className="md:col-span-1 lg:col-span-1 rounded-2xl overflow-hidden border transition-all duration-300 relative"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInVariants}
              whileHover={{
                scale: 1.02,
                y: -4
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-grid)';
              }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={displayedCertificates[0].image}
                  alt={displayedCertificates[0].name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm line-clamp-2 transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                  {displayedCertificates[0].name}
                </h4>
                <Link
                  to="/certificate"
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-3 transition-all duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  View All <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Project Featured */}
          {displayedProjects[0] && (
            <motion.div
              className="md:col-span-1 lg:col-span-1 rounded-2xl overflow-hidden border transition-all duration-300 relative"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInVariants}
              whileHover={{
                scale: 1.02,
                y: -4
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-grid)';
              }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={displayedProjects[0].image}
                  alt={displayedProjects[0].title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm line-clamp-2 transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                  {displayedProjects[0].title}
                </h4>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-3 transition-all duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  View All <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
