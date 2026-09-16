import { motion } from "framer-motion";

function Logo({ size = "medium" }) {
  // Define sizes
  const sizeConfig = {
    small: {
      fontSize: "text-sm",
      fontFamily: "Cascadia Code, monospace"
    },
    medium: {
      fontSize: "text-base",
      fontFamily: "Cascadia Code, monospace"
    },
    large: {
      fontSize: "text-9xl",
      fontFamily: "Cascadia Code, monospace"
    }
  };

  const config = sizeConfig[size] || sizeConfig.medium;

  return (
    <motion.div
      className={`flex items-center justify-center font-bold tracking-tight ${config.fontSize}`}
      style={{ fontFamily: config.fontFamily }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span style={{ color: "var(--color-accent-blue)" }}>&lt;</span>
      <span style={{ color: "var(--color-text-primary)" }}>t</span>
      <span style={{ color: "var(--color-accent-red)" }}>/</span>
      <span style={{ color: "var(--color-accent-blue)" }}>&gt;</span>
    </motion.div>
  );
}

export default Logo;
