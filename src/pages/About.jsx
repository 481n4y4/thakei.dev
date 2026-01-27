import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import skills from "../data/skills";
import khei from "../assets/img/khei.png";
import Contact from "../component/Contact";
import cv from "../assets/img/cv/myCV.jpg";

function About() {
  return (
    <main className="bg-gray-900 text-white font-sans">
      <Navbar />
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
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
              Hi! I’m a dedicated student at SMK Negeri 7 Semarang, majoring in
              Network and Application Information System. I’m passionate about
              technology, software development, and artificial intelligence, and
              I love turning ideas into meaningful digital solutions that can
              make a real difference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through my involvement in school organizations and team projects,
              I’ve developed strong leadership, teamwork, and project management
              skills that help me collaborate effectively and bring creative
              ideas to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I’m deepening my knowledge of modern web technologies
              such as JavaScript, HTML, Tailwind CSS, and React, while also
              exploring the exciting world of AI and machine learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m always excited to learn new things, build impactful projects,
              and grow alongside other passionate creators in the tech
              community. Let’s create something amazing together! 🚀
            </p>
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

      {/* Resume Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text ">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 "></div>
              <img
                src={cv}
                alt="Kheira Abinaya"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:w-3/5 space-y-6">
            <h3 className="text-2xl font-bold text-purple-300">
              Profile Resume
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a student at SMK Negeri 7 Semarang majoring in Network and
              Application Information Systems with a strong interest in
              technology, software development, and artificial intelligence. I
              enjoy turning ideas into meaningful digital solutions that have a
              real impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I am proficient in using HTML, CSS, Tailwind CSS,
              JavaScript, and React.js in web interface development.
              Additionally, I am deepening my knowledge of backend development
              using Express.js, MongoDB, and Laravel to build fully integrated
              web applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through active involvement in school organizations and various
              team projects, I have developed leadership, teamwork, and project
              management skills, which help me collaborate effectively and turn
              creative ideas into functional products.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default About;
