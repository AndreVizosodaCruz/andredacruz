import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.6,
  once = true,
  className
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: -y }}
      animate={
        hasAnimated
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: -y }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
