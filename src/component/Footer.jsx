import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faEnvelope,
  faCode,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

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
      icon: faWhatsapp,
      href: "https://wa.me/6285179902663",
      label: "WhatsApp",
    },
    {
      icon: faEnvelope,
      href: "abinayagavin16@gmail.com",
      label: "Email",
    },
  ];

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
    <footer 
      className="relative text-gray-300 pt-16 pb-8 mt-20 border-t transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        borderColor: 'var(--color-border-grid)'
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-40" style={{ pointerEvents: 'none' }}></div>

      {/* Main Footer Content */}
      <motion.div 
        className="relative max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h3 
              className="text-2xl font-bold mb-4 transition-colors duration-300"
              style={{ color: 'var(--color-accent-blue)' }}
            >
              thakei.dev
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed max-w-md">
              Passionate about building clean, responsive web applications with
              modern technologies and creating exceptional user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h4 
              className="text-lg font-semibold mb-4 transition-colors duration-300"
              style={{ color: 'var(--color-accent-blue)' }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block transition-colors duration-300 hover:opacity-80"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h4 
              className="text-lg font-semibold mb-4 transition-colors duration-300"
              style={{ color: 'var(--color-accent-blue)' }}
            >
              Let's Connect
            </h4>
            <p style={{ color: 'var(--color-text-secondary)' }} className="mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <motion.div 
              className="flex justify-center md:justify-start space-x-4"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    borderColor: 'var(--color-border-grid)',
                    color: 'var(--color-accent-blue)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4
                  }}
                  variants={itemVariants}
                  aria-label={social.label}
                  title={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-grid)';
                  }}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-lg"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t transition-colors duration-300" style={{ borderColor: 'var(--color-border-grid)' }}></div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8"
          variants={itemVariants}
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm flex-wrap justify-center md:justify-start" style={{ color: 'var(--color-text-secondary)' }}>
            <span>© {currentYear} thakei.dev</span>
            <span style={{ color: 'var(--color-border-grid)' }}>•</span>
            <span>All Rights Reserved</span>
            <span style={{ color: 'var(--color-border-grid)' }}>•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: 'var(--color-accent-red)' }}
                className="text-xs"
              />
              <span>by Abinaya</span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm flex-wrap justify-center md:justify-end" style={{ color: 'var(--color-text-secondary)' }}>
            <a
              href="https://github.com/481n4y4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-colors duration-300 flex items-center space-x-1"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <FontAwesomeIcon icon={faCode} className="text-xs" />
              <span>Source Code</span>
            </a>
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center space-x-1 hover:opacity-80 transition-colors duration-300"
              whileHover={{ y: -2 }}
              aria-label="Back to top"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <span>Back to Top</span>
              <FontAwesomeIcon icon={faArrowUp} className="transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Made With Love */}
        <motion.div 
          className="text-center mt-6 pt-6 border-t transition-colors duration-300"
          style={{ borderColor: 'var(--color-border-grid)', color: 'var(--color-text-secondary)' }}
          variants={itemVariants}
        >
          <p className="text-xs">
            Built with React, Tailwind CSS, and lots of ☕
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
