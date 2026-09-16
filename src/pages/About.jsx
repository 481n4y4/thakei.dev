import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import skills from "../data/skills";
import khei from "../assets/img/khei.png";
import Contact from "../component/Contact";
import cv from "../assets/img/cv/myCV.jpg";
import { motion } from "framer-motion";

function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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

  return (
    <main className="text-white font-sans">
      <Navbar />
      
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 rounded-2xl">
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
            About Me
          </h2>
          <div 
            className="w-20 h-1 mx-auto transition-colors duration-300"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          ></div>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="lg:w-2/5"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute -inset-4 rounded-2xl blur opacity-30"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-dark) 100%)',
                  zIndex: -1
                }}
              ></div>
              <img
                src={khei}
                alt="Kheira Abinaya"
                className="relative w-full max-w-md rounded-2xl object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5 space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: 'var(--color-accent-blue)' }}
              variants={itemVariants}
            >
              Kheira Abinaya Gavin Lovedila
            </motion.h3>
            
            {[
              "Hi! I'm a dedicated student at SMK Negeri 7 Semarang, majoring in Network and Application Information System. I'm passionate about technology, software development, and artificial intelligence, and I love turning ideas into meaningful digital solutions that can make a real difference.",
              "Through my involvement in school organizations and team projects, I've developed strong leadership, teamwork, and project management skills that help me collaborate effectively and bring creative ideas to life.",
              "Currently, I'm deepening my knowledge of modern web technologies such as JavaScript, HTML, Tailwind CSS, and React, while also exploring the exciting world of AI and machine learning.",
              "I'm always excited to learn new things, build impactful projects, and grow alongside other passionate creators in the tech community. Let's create something amazing together! 🚀"
            ].map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-lg leading-relaxed transition-colors duration-300"
                style={{ color: 'var(--color-text-secondary)' }}
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 rounded-3xl"
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
            Skills
          </h2>
          <div 
            className="w-20 h-1 mx-auto transition-colors duration-300"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I actively work with a range of technologies that support both front-end and back-end development, including:
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 border group"
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
              <div 
                className="p-4 rounded-2xl transition-all duration-300"
                style={{ backgroundColor: 'var(--color-bg-base)' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h4 
                className="font-bold text-lg text-center transition-colors duration-300"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="max-w-6xl mx-auto px-6 py-24 rounded-2xl">
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
            My Resume
          </h2>
          <div 
            className="w-20 h-1 mx-auto transition-colors duration-300"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          ></div>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row-reverse gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="lg:w-2/5"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute -inset-4 rounded-2xl blur opacity-30"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-blue-dark) 100%)',
                  zIndex: -1
                }}
              ></div>
              <img
                src={cv}
                alt="Kheira Abinaya CV"
                className="relative w-full max-w-md rounded-2xl object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5 space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: 'var(--color-accent-blue)' }}
              variants={itemVariants}
            >
              Profile Resume
            </motion.h3>
            
            {[
              "I am a student at SMK Negeri 7 Semarang majoring in Network and Application Information Systems with a strong interest in technology, software development, and artificial intelligence. I enjoy turning ideas into meaningful digital solutions that have a real impact.",
              "Currently, I am proficient in using HTML, CSS, Tailwind CSS, JavaScript, and React.js in web interface development. Additionally, I am deepening my knowledge of backend development using Express.js, MongoDB, and Laravel to build fully integrated web applications.",
              "Through active involvement in school organizations and various team projects, I have developed leadership, teamwork, and project management skills, which help me collaborate effectively and turn creative ideas into functional products."
            ].map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-lg leading-relaxed transition-colors duration-300"
                style={{ color: 'var(--color-text-secondary)' }}
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1NpDRK_eSBVLpedeUc1dua2C6b-Bbrb2J"
                className="px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold text-white"
                style={{
                  backgroundColor: 'var(--color-accent-blue)',
                  color: 'var(--color-text-primary)'
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default About;
