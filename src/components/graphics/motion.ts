export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const nodePulse = {
  animate: {
    opacity: [0.45, 1, 0.45],
    scale: [1, 1.06, 1],
    transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
  },
};
