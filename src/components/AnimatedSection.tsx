import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const variantMap = {
  "fade-up": fadeUp,
  "fade-in": fadeIn,
  "scale-in": scaleIn,
  "slide-left": slideLeft,
  "slide-right": slideRight,
};

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: AnimatedSectionProps) => (
  <motion.div
    variants={variantMap[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ staggerChildren: staggerDelay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
