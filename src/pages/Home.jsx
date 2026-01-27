import { ReactTyped } from "react-typed";
import khei from "../assets/img/khei.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import certificate from "../data/certificate";
import skills from "../data/skills";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contact from "../component/Contact";

function Home() {
  // Ambil hanya 3 item pertama untuk certificate dan projects
  const displayedCertificates = certificate.slice(0, 3);
  const displayedProjects = projects.slice(0, 3);

  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-t from-gray-900 via-purple-900 to-black text-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <div className="z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon
              icon={faCode}
              className="text-purple-400 text-sm"
            />
            <span className="text-sm text-purple-200">Frontend Developer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            <ReactTyped
              strings={[
                "Hi, I'm Abinaya",
                "FullStack Developer",
                "Creative Coder",
              ]}
              typeSpeed={70}
              backSpeed={40}
              showCursor={true}
              cursorChar="|"
              loop={true}
            />
          </h1>

          <p className="mt-6 md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about building clean, responsive web applications with
            modern technologies and creating exceptional user experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold shadow-lg"
            >
              View Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#about"
              className="border-2 border-purple-500 px-8 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Who am I?
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 "></div>
              <img
                src={khei}
                alt="Kheira Abinaya"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:w-3/5 space-y-6">
            <h3 className="text-2xl font-bold text-purple-300">
              Kheira Abinaya Gavin Lovedila
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a student at SMK Negeri 7 Semarang majoring in Network and
              Application Information Systems with a strong interest in software
              development and artificial intelligence. I am experienced in
              developing web interfaces using HTML, CSS, Tailwind CSS,
              JavaScript, and React.js, and am currently exploring backend
              development with Express.js, MongoDB, and Laravel. Active in
              organizations and team projects, I possess collaboration,
              leadership, and project management skills to deliver functional
              digital solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1NpDRK_eSBVLpedeUc1dua2C6b-Bbrb2J"
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold shadow-lg"
              >
                Download CV
              </a>
              <a
                href="/about"
                className="border-2 border-purple-500 px-8 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 bg-gray-800/50 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            I actively work with a range of technologies that support both
            front-end and back-end development, including:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              className="group flex flex-col items-center gap-4 p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-700 hover:border-purple-500"
            >
              <div className="p-4 bg-gray-900 rounded-2xl group-hover:bg-purple-900/20 transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-bold text-lg text-center group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h4>
            </a>
          ))}
        </div>
      </section>

      {/* Certificate */}
      <section
        id="certificate"
        className="max-w-6xl mx-auto px-6 py-24 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Certificate
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            I possess a strong foundation in web development, problem-solving,
            and creative presentation. My skills include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-purple-500/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className=" bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {project.name}
                </h4>
                <a
                  href={project.Link}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-3 text-white transition-all font-semibold group/btn"
                >
                  View Certificate
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="text-center mt-12">
          <Link
            to="/certificate"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
          >
            View All Certificates
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 bg-gray-800/50 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-purple-500/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-3 text-white transition-all font-semibold group/btn"
                >
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
          >
            View All Projects
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
