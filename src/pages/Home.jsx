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
import Logo from "../component/Logo";
import { motion } from "framer-motion";

function Home() {
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
    <main className="text-white min-h-screen font-sans blueprint-grid">
      <Navbar />

      {/* Hero Section - 2 Columns with Logo */}
      <section
        id="hero"
        className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="flex flex-col justify-start gap-6 z-10"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Main Heading with colored text and blinking underscore */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 leading-tight"
                style={{ color: 'var(--color-text-primary)' }}
                variants={itemVariants}
              >
                <span style={{ color: 'var(--color-accent-red)' }}>thakei</span>
                <span style={{ color: 'var(--color-accent-blue)' }}>.dev</span>
                <motion.span
                  style={{ color: 'var(--color-text-primary)' }}
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  _
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold transition-colors duration-300"
                style={{ color: 'var(--color-text-primary)' }}
                variants={itemVariants}
              >
                Hi, I'm Abinaya
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'var(--color-text-secondary)' }}
                variants={itemVariants}
              >
                I turn{" "}
                <span className="font-semibold" style={{ color: 'var(--color-accent-blue)' }}>ideas</span> into{" "}
                <span className="font-semibold" style={{ color: 'var(--color-accent-blue)' }}>
                  digital solutions
                </span>{" "}
                with clean code and modern technologies.
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
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
                    className="px-4 py-2 rounded-lg text-sm border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-bg-surface)',
                      borderColor: 'var(--color-accent-blue)',
                      color: 'var(--color-accent-blue)'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={containerVariants}
              >
                <motion.a
                  href="/projects"
                  className="group px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-center"
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
                  className="px-8 py-4 rounded-xl transition-all duration-300 font-semibold border text-center"
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

            {/* Right Column - Logo */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Logo size="large" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-auto">
          
          {/* About Card - Tall */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl p-8 border transition-all duration-300 overflow-hidden relative flex flex-col"
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
                className="text-sm leading-relaxed transition-colors duration-300 flex-1"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Passionate FullStack developer from SMK Negeri 7 Semarang. Experienced with React, Node.js, and MongoDB. Building digital solutions with clean code and modern technologies.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-300 w-fit mt-auto pt-4"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </motion.div>

          {/* Skills Card - Wide */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 rounded-2xl p-6 border transition-all duration-300 overflow-hidden relative"
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
                className="grid grid-cols-5 sm:grid-cols-6 gap-4"
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
              className="md:col-span-1 lg:col-span-1 rounded-2xl overflow-hidden border transition-all duration-300 relative flex flex-col"
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
              <div className="h-40 overflow-hidden flex-1">
                <img
                  src={displayedCertificates[0].image}
                  alt={displayedCertificates[0].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
              className="md:col-span-1 lg:col-span-1 rounded-2xl overflow-hidden border transition-all duration-300 relative flex flex-col"
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
              <div className="h-40 overflow-hidden flex-1">
                <img
                  src={displayedProjects[0].image}
                  alt={displayedProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
