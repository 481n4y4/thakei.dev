import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCode,
  faExternalLinkAlt,
  faCalendarAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projectsData";
import { motion } from "framer-motion";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div 
        className="text-white min-h-screen font-sans flex items-center justify-center px-4"
      >
        <div className="text-center max-w-md mx-auto">
          <h2 
            className="text-3xl font-bold mb-4 transition-colors duration-300"
            style={{ color: 'var(--color-accent-blue)' }}
          >
            Project Not Found
          </h2>
          <p 
            className="mb-6 transition-colors duration-300"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div 
      className="text-white min-h-screen font-sans blueprint-grid"
    >
      <header 
        className="fixed top-0 w-full backdrop-blur-md shadow-md z-50 border-b transition-all duration-300"
        style={{
          backgroundColor: 'var(--color-bg-base)',
          borderColor: 'var(--color-border-grid)'
        }}
      >
        {/* Navigation with Button */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 border px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-sm sm:text-base"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-grid)',
              color: 'var(--color-text-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(55, 138, 221, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-grid)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            <span>Back to Projects</span>
          </Link>

          <h1 
            className="text-lg sm:text-xl md:text-2xl font-bold truncate max-w-[200px] sm:max-w-none ml-2 sm:ml-4 transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {project.title}
          </h1>
        </nav>
      </header>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 pt-16 sm:pt-20 lg:pt-24 rounded-2xl">
        {/* Project Header */}
        <motion.div 
          className="mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {project.title}
            </h1>
            
            {/* Floating Back Button for Mobile */}
            <div className="sm:hidden">
              <Link
                to="/#projects"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-sm"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border-grid)',
                  color: 'var(--color-text-primary)'
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                <span>Back to Projects</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
            {project.date && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ color: 'var(--color-accent-blue)' }}
                />
                <span>{project.date}</span>
              </div>
            )}
            {project.techStack && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon 
                  icon={faTools}
                  style={{ color: 'var(--color-accent-blue)' }}
                />
                <span className="hidden sm:inline">{project.techStack.join(", ")}</span>
                <span className="sm:hidden">{project.techStack.slice(0, 2).join(", ")}...</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div 
          className="mb-6 sm:mb-8 lg:mb-10 rounded-xl sm:rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Project Content - Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Main Content - Left Column */}
          <motion.div 
            className="lg:w-2/3 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Description */}
            <motion.section variants={itemVariants}>
              <h2 
                className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Project Overview
              </h2>
              <div 
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl leading-relaxed text-base sm:text-lg border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border-grid)',
                  color: 'var(--color-text-secondary)'
                }}
              >
                {project.description}
              </div>
            </motion.section>

            {/* Features */}
            {project.feature && (
              <motion.section variants={itemVariants}>
                <h2 
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  Key Features
                </h2>
                <div 
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border whitespace-pre-line text-base sm:text-lg leading-relaxed transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    borderColor: 'var(--color-border-grid)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  {project.feature}
                </div>
              </motion.section>
            )}

            {/* Additional Content */}
            {project.details && (
              <motion.section variants={itemVariants}>
                <h2 
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  Project Details
                </h2>
                <div 
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border text-base sm:text-lg leading-relaxed transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    borderColor: 'var(--color-border-grid)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  {project.details}
                </div>
              </motion.section>
            )}
          </motion.div>

          {/* Sidebar - Right Column */}
          <motion.div 
            className="lg:w-1/3 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Action Buttons */}
            <motion.div 
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 border transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              variants={itemVariants}
            >
              <h3 
                className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Project Links
              </h3>

              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform font-semibold text-sm sm:text-base border"
                  style={{
                    backgroundColor: 'var(--color-accent-blue)',
                    borderColor: 'var(--color-accent-blue)',
                    color: 'var(--color-text-primary)'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Live Demo
                </motion.a>
              )}

              {project.repo && (
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform font-semibold text-sm sm:text-base border"
                  style={{
                    backgroundColor: 'var(--color-accent-blue)',
                    borderColor: 'var(--color-accent-blue)',
                    color: 'var(--color-text-primary)'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Repository
                </motion.a>
              )}
              
              {/* Additional Back Button for Desktop in Sidebar */}
              <div className="hidden sm:block pt-2">
                <Link
                  to="/#projects"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 border rounded-lg sm:rounded-xl transition-all duration-300 transform font-semibold text-sm sm:text-base"
                  style={{
                    backgroundColor: 'var(--color-bg-base)',
                    borderColor: 'var(--color-border-grid)',
                    color: 'var(--color-text-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-grid)';
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to Projects
                </Link>
              </div>
            </motion.div>

            {/* Tech Stack */}
            {project.techStack && (
              <motion.div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border-grid)'
                }}
                variants={itemVariants}
              >
                <h3 
                  className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                  style={{ color: 'var(--color-accent-blue)' }}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-bg-base)',
                        borderColor: 'var(--color-accent-blue)',
                        color: 'var(--color-accent-blue)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Info */}
            <motion.div 
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-grid)'
              }}
              variants={itemVariants}
            >
              <h3 
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-accent-blue)' }}
              >
                Project Info
              </h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                {project.status && (
                  <div className="flex justify-between items-center">
                    <span>Status:</span>
                    <span className="font-semibold" style={{ color: 'var(--color-accent-blue)' }}>
                      {project.status}
                    </span>
                  </div>
                )}
                {project.role && (
                  <div className="flex justify-between items-center">
                    <span>Role:</span>
                    <span style={{ color: 'var(--color-accent-blue)' }}>{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex justify-between items-center">
                    <span>Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
