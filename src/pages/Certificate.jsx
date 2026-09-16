import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import certificate from "../data/certificate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Contact from "../component/Contact";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function Certificate() {
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
    <main className="text-white font-sans blueprint-grid">
      <Helmet>
        <title>Certificates — thakei.dev</title>
        <meta name="description" content="View my professional certifications and achievements in web development, JavaScript, and other tech skills." />
        <meta property="og:title" content="Certificates — thakei.dev" />
        <meta property="og:description" content="My professional certifications and achievements in web development and tech skills." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Certificates — thakei.dev" />
        <meta name="twitter:description" content="My professional certifications and achievements in web development and tech skills." />
      </Helmet>
      <Navbar />
      
      {/* Certificate Section */}
      <section
        id="certificate"
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
            Certificate
          </h2>
          <div 
            className="w-20 h-1 mx-auto transition-colors duration-300"
            style={{ backgroundColor: 'var(--color-accent-blue)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I possess a strong foundation in web development, problem-solving, and creative presentation. My skills include:
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {certificate.map((cert) => (
            <motion.div
              key={cert.id}
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
                  src={cert.image}
                  alt={`${cert.name} - Professional certificate`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h4 
                  className="text-lg font-semibold mb-3 line-clamp-2 transition-colors duration-300"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {cert.name}
                </h4>
                <a
                  href={cert.Link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  aria-label={`View ${cert.name} certificate`}
                >
                  View Certificate
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
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

export default Certificate;
