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
  // Ambil hanya 3 item pertama untuk certificate dan projects
  const displayedCertificates = certificate.slice(0, 3);
  const displayedProjects = projects.slice(0, 3);

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
    <main className="text-white min-h-screen font-sans" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Navbar />

      {/* Hero Section - Full Width */}
      <section
        id="hero"
        className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6 blueprint-grid"
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
          {/* Terminal Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6 transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-accent-blue)'
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-mono transition-colors duration-300" style={{ color: 'var(--color-accent-blue)' }}>
              thakei.dev
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
            variants={itemVariants}
          >
            Hi, I'm Abinaya
          </motion.h1>

          {/* Typed Effect */}
          <motion.div 
            className="text-2xl md:text-3xl font-mono mb-6 h-12 transition-colors duration-300"
            style={{ color: 'var(--color-accent-blue)' }}
            variants={itemVariants}
          >
            <ReactTyped
              strings={[
                "FullStack Developer",
                "Creative Coder",
                "Tech Enthusiast"
              ]}
              typeSpeed={70}
              backSpeed={40}
              showCursor={true}
              cursorChar="|"
              loop={true}
            />
          </motion.div>

          {/* Description */}
          <motion.div 
            className="mt-6 p-6 rounded-xl max-w-2xl mx-auto border transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)'
            }}
            variants={itemVariants}
            whileHover={{
              borderColor: 'var(--color-accent-blue)',
              boxShadow: '0 0 15px rgba(55, 138, 221, 0.2)'
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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* About Card - Large 2x2 */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 rounded-2xl p-8 border transition-all duration-300 overflow-hidden relative group"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
            whileHover={{
              borderColor: 'var(--color-accent-blue)',
              boxShadow: '0 0 20px rgba(55, 138, 221, 0.2)'
            }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="relative z-10 h-full flex flex-col">
              <h2 
                className="text-3xl font-bold mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Who am i?
              </h2>
              <p 
                className="text-sm leading-relaxed flex-1 transition-colors duration-300"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I am a student at SMK Negeri 7 Semarang with a passion for web development. Experienced in React, Node.js, and MongoDB. I build clean, responsive solutions with modern technologies.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-4 font-semibold transition-all duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Read More <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Skills Grid - 4 cards in 2x2 layout */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-4 border transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border-grid)'
                }}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  borderColor: 'var(--color-accent-blue)',
                  boxShadow: '0 0 15px rgba(55, 138, 221, 0.2)'
                }}
              >
                <div className="p-2 rounded-lg transition-all duration-300" style={{ backgroundColor: 'var(--color-bg-base)' }}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-xs text-center transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificate Featured - Wide card */}
          {displayedCertificates[0] && (
            <motion.div
              className="lg:col-span-2 rounded-2xl overflow-hidden border transition-all duration-300 group relative"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInVariants}
              whileHover={{
                borderColor: 'var(--color-accent-blue)',
                boxShadow: '0 0 20px rgba(55, 138, 221, 0.2)'
              }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={displayedCertificates[0].image}
                  alt={displayedCertificates[0].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm line-clamp-1 transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                  {displayedCertificates[0].name}
                </h4>
                <Link
                  to="/certificate"
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-2 transition-all duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  View All <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Project Featured - Wide card */}
          {displayedProjects[0] && (
            <motion.div
              className="lg:col-span-2 rounded-2xl overflow-hidden border transition-all duration-300 group relative"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInVariants}
              whileHover={{
                borderColor: 'var(--color-accent-blue)',
                boxShadow: '0 0 20px rgba(55, 138, 221, 0.2)'
              }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={displayedProjects[0].image}
                  alt={displayedProjects[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm line-clamp-1 transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                  {displayedProjects[0].title}
                </h4>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-2 transition-all duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  View All <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
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
