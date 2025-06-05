import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type HoverEffectType = 
  | "lift" 
  | "glow" 
  | "scale" 
  | "border-glow"
  | "rotate-subtle"
  | "none";

export interface HoverAnimationCardProps {
  className?: string;
  children: ReactNode;
  hoverEffect?: HoverEffectType;
  onClick?: () => void;
  hoveredScale?: number;
  as?: "div" | "card";
  cardProps?: React.ComponentPropsWithoutRef<typeof Card>;
}

export const HoverAnimationCard = ({
  className,
  children,
  hoverEffect = "lift",
  onClick,
  hoveredScale = 1.05,
  as = "div",
  cardProps
}: HoverAnimationCardProps) => {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          y: -8,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 300, damping: 20 } 
        };
      case "glow":
        return {
          boxShadow: "0 0 15px rgba(80, 70, 230, 0.5)",
          transition: { duration: 0.2 }
        };
      case "scale":
        return {
          scale: hoveredScale,
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      case "border-glow":
        return {
          boxShadow: "0 0 0 2px rgba(80, 70, 230, 0.3)",
          transition: { duration: 0.2 }
        };
      case "rotate-subtle":
        return {
          rotate: 1,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 10 }
        };
      case "none":
        return {};
      default:
        return { scale: 1.05 };
    }
  };

  if (as === "card") {
    return (
      <motion.div
        className={cn(className)}
        whileHover={getHoverAnimation()}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        <Card {...cardProps}>{children}</Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      whileHover={getHoverAnimation()}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};