import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-heading text-sm font-medium">{skill}</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;