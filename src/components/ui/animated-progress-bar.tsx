import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  labelLeft?: React.ReactNode;
  labelRight?: React.ReactNode;
  color?: string;
  showAnimatedValue?: boolean;
  animationDuration?: number;
  delay?: number;
}

export const AnimatedProgressBar = ({
  value,
  max = 100,
  className,
  labelLeft,
  labelRight,
  color = "#10B981", // default green color
  showAnimatedValue = false,
  animationDuration = 1.5,
  delay = 0
}: AnimatedProgressBarProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef, { once: true });
  const percent = (value / max) * 100;
  
  useEffect(() => {
    if (!isInView) return;
    
    const timeout = setTimeout(() => {
      setCurrentValue(value);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);
  
  return (
    <div className="relative w-full">
      {(labelLeft || labelRight) && (
        <div className="flex justify-between mb-1 text-sm">
          {labelLeft && <span>{labelLeft}</span>}
          {labelRight && <span>{labelRight}</span>}
        </div>
      )}
      
      <div 
        ref={progressRef}
        className={cn("w-full h-2 bg-gray-200 rounded-full overflow-hidden", className)}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percent}%` : 0 }}
          transition={{ 
            duration: animationDuration, 
            ease: "easeOut",
            delay
          }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      
      {showAnimatedValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="text-sm mt-1 text-right font-medium"
        >
          {Math.round(currentValue)}%
        </motion.div>
      )}
    </div>
  );
};