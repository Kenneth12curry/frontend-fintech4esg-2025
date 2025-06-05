import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string; 
  once?: boolean;
}

export function CountUp({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  className = "",
  once = true,
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || (once && hasAnimated.current)) return;
    
    hasAnimated.current = true;
    let startTime: number | null = null;
    const startValue = start;
    const changeInValue = end - startValue;
    
    // If the delay is > 0, wait before starting the animation
    const timeoutId = setTimeout(() => {
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        
        // Easing function for smoother animation
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = startValue + changeInValue * easedProgress;
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }, delay * 1000);
    
    return () => clearTimeout(timeoutId);
  }, [isInView, start, end, duration, delay, once]);
  
  const formattedCount = count.toFixed(decimalPlaces);
  
  return (
    <span ref={nodeRef} className={cn("tabular-nums", className)}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}