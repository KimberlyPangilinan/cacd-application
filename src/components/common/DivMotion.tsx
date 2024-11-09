import { motion } from "framer-motion";

interface DivMotionProps {
  children: React.ReactNode;
}

export const DivMotion = ({ children }: DivMotionProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.8, type: "tween" }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
};
