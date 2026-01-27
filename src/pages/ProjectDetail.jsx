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

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen font-sans flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-300 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md shadow-md z-50">
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white hover:text-purple-300 transition-colors text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Back to Projects
          </Link>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </h1>
        </nav>
      </header>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 pt-16 sm:pt-20 lg:pt-24">
        {/* Project Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
            {project.date && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-purple-400"
                />
                <span>{project.date}</span>
              </div>
            )}
            {project.techStack && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTools} className="text-purple-400" />
                <span className="hidden sm:inline">{project.techStack.join(", ")}</span>
                <span className="sm:hidden">{project.techStack.slice(0, 2).join(", ")}...</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-6 sm:mb-8 lg:mb-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Content - Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3 space-y-6 sm:space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300">
                Project Overview
              </h2>
              <div className="text-gray-300 leading-relaxed text-base sm:text-lg bg-gray-800/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                {project.description}
              </div>
            </section>

            {/* Features */}
            {project.feature && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300">
                  Key Features
                </h2>
                <div className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl whitespace-pre-line text-base sm:text-lg">
                  {project.feature}
                </div>
              </section>
            )}

            {/* Additional Content */}
            {project.details && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-300">
                  Project Details
                </h2>
                <div className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-base sm:text-lg">
                  {project.details}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:w-1/3 space-y-6 sm:space-y-8">
            {/* Action Buttons */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-2 sm:mb-4">
                Project Links
              </h3>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-semibold text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Live Demo
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-semibold text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Repository
                </a>
              )}
            </div>

            {/* Tech Stack */}
            {project.techStack && (
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-3 sm:mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-2 bg-purple-900/50 text-purple-200 rounded-lg text-xs sm:text-sm font-medium border border-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-3 sm:mb-4">
                Project Info
              </h3>
              <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                {project.status && (
                  <div className="flex justify-between items-center">
                    <span>Status:</span>
                    <span className="text-green-400 font-semibold">
                      {project.status}
                    </span>
                  </div>
                )}
                {project.role && (
                  <div className="flex justify-between items-center">
                    <span>Role:</span>
                    <span className="text-purple-400">{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex justify-between items-center">
                    <span>Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;