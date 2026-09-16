import { motion } from 'framer-motion';

export default function Logo({ size = 'medium' }) {
  // Define sizes
  const sizes = {
    small: { width: 60, height: 60, strokeWidth: 1.5, dotSize: 4 },
    medium: { width: 120, height: 120, strokeWidth: 2, dotSize: 8 },
    large: { width: 200, height: 200, strokeWidth: 2.5, dotSize: 12 },
  };

  const config = sizes[size] || sizes.medium;
  const padding = 12;
  const cornerSize = config.width * 0.25;

  return (
    <motion.div 
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${config.width} ${config.height}`}
        className="filter drop-shadow-lg"
      >
        {/* Top-left corner */}
        <line
          x1={padding}
          y1={padding}
          x2={padding + cornerSize}
          y2={padding}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + cornerSize}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />

        {/* Top-right corner */}
        <line
          x1={config.width - padding}
          y1={padding}
          x2={config.width - padding - cornerSize}
          y2={padding}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={config.width - padding}
          y1={padding}
          x2={config.width - padding}
          y2={padding + cornerSize}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />

        {/* Bottom-left corner */}
        <line
          x1={padding}
          y1={config.height - padding}
          x2={padding + cornerSize}
          y2={config.height - padding}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding}
          y1={config.height - padding}
          x2={padding}
          y2={config.height - padding - cornerSize}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />

        {/* Bottom-right corner */}
        <line
          x1={config.width - padding}
          y1={config.height - padding}
          x2={config.width - padding - cornerSize}
          y2={config.height - padding}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={config.width - padding}
          y1={config.height - padding}
          x2={config.width - padding}
          y2={config.height - padding - cornerSize}
          stroke="#378ADD"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />

        {/* Center dot - Red accent with pulse animation */}
        <motion.circle
          cx={config.width / 2}
          cy={config.height / 2}
          r={config.dotSize}
          fill="#E24B4A"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
