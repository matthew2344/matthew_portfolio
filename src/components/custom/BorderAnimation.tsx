import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const BorderAnimation = ({
  children,
  delay = 0,
  className = "",
  onComplete = () => {},
  disableBorder = false,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  onComplete?: () => void;
  disableBorder?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000 + delay * 1000); // 1000ms for the border animation duration + delay

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn("relative", className)}>
      {!disableBorder && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-black"
          initial={{ width: 0, left: "50%" }}
          animate={{ width: "100%", left: "0%" }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delay,
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={onComplete}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BorderAnimation;
