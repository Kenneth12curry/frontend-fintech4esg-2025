import React, { ReactNode } from "react";
import { motion, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedComponentProps {
  children: ReactNode;
  animation?: 
    | "fadeIn" 
    | "slideUp" 
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "pulse"
    | "bounce"
    | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  viewport?: {
    amount?: number;
    margin?: string;
  };
}

// Animation variants
const animations: Record<string, Record<string, Variant>> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  pulse: {
    hidden: { scale: 0.95, opacity: 0.8 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse",
        duration: 1
      }
    },
  },
  bounce: {
    hidden: { y: 0 },
    visible: { 
      y: [-10, 0, -6, 0, -2, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 0.6
      }
    },
  },
  rotate: {
    hidden: { rotate: 0, opacity: 0 },
    visible: { rotate: 360, opacity: 1, transition: { duration: 0.5 } }
  }
};

const AnimatedComponent = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  viewport = {
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  },
}: AnimatedComponentProps) => {
  return (
    <motion.div 
      className={cn(className)} 
      initial="hidden"
      whileInView="visible"
      viewport={once ? { ...viewport, once } : viewport}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedComponent };