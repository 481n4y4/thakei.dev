import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import contact from "../assets/img/contact.png";
import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/it5_thakei?igsh=MWMwZzRqaTNtbjkxbw==",
      label: "Instagram",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/kheira-abinaya-677ba2286",
      label: "LinkedIn",
    },
    {
      icon: faGithub,
      href: "https://github.com/481n4y4",
      label: "GitHub",
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/kheira.abinaya?mibextid=ZbWKwL",
      label: "Facebook",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/6285179902663",
      label: "WhatsApp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section 
      id="contact" 
      className="max-w-6xl mx-auto px-6 py-24 relative"
    >
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 blueprint-grid opacity-30" 
        style={{ pointerEvents: 'none', borderRadius: '1rem' }}
      ></div>

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
          Get In Touch
        </h2>
        <div 
          className="w-20 h-1 mx-auto transition-colors duration-300"
          style={{ backgroundColor: 'var(--color-accent-blue)' }}
        ></div>
        <p 
          className="text-lg max-w-2xl mx-auto mt-4 transition-colors duration-300"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Let's discuss your project or just say hello!
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row gap-12 items-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="lg:w-2/5 hidden lg:block"
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
              src={contact}
              alt="Contact illustration"
              className="relative rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-3/5 w-full"
          variants={itemVariants}
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="4b01bfae-9d39-4341-a30d-554d890f359f"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-xl p-4 focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-border-grid)',
                    border: '1px solid'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-blue)';
                    e.target.style.boxShadow = '0 0 10px rgba(55, 138, 221, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-grid)';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl p-4 focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-border-grid)',
                    border: '1px solid'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-blue)';
                    e.target.style.boxShadow = '0 0 10px rgba(55, 138, 221, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-grid)';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full rounded-xl p-4 focus:outline-none transition-all duration-300 resize-none"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  color: 'var(--color-text-primary)',
                  borderColor: 'var(--color-border-grid)',
                  border: '1px solid'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent-blue)';
                  e.target.style.boxShadow = '0 0 10px rgba(55, 138, 221, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border-grid)';
                  e.target.style.boxShadow = 'none';
                }}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              style={{
                backgroundColor: 'var(--color-accent-blue)',
                color: 'var(--color-text-primary)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 20px rgba(55, 138, 221, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <motion.div className="mt-12" variants={itemVariants}>
            <h3 
              className="text-xl font-semibold text-center mb-8 transition-colors duration-300"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Connect with me on social media
            </h3>
            <motion.div 
              className="flex justify-center gap-6 flex-wrap"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 border"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    borderColor: 'var(--color-border-grid)',
                    color: 'var(--color-accent-blue)'
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    borderColor: 'var(--color-accent-blue)',
                    boxShadow: '0 0 15px rgba(55, 138, 221, 0.3)'
                  }}
                  variants={itemVariants}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-2xl"
                  />
                  <span 
                    className="text-xs transition-colors duration-300"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
