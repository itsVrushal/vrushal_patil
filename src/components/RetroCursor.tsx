"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function RetroCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const dotSpring = { damping: 20, stiffness: 500 };
  const ringSpring = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, dotSpring);
  const cursorYSpring = useSpring(cursorY, dotSpring);
  const ringXSpring = useSpring(cursorX, ringSpring);
  const ringYSpring = useSpring(cursorY, ringSpring);

  useEffect(() => {
    const checkTouch = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(isTouchDevice);
      if (isTouchDevice) return;

      const handleMouseMove = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        setIsVisible(true);
      };

      const handleMouseLeave = () => setIsVisible(false);
      
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('button, a, .interactive, [role="button"]')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    checkTouch();
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isHovering ? 2.5 : 1.5,
        }}
      />
    </>
  );
}