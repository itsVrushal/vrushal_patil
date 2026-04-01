"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, Award, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "projects", label: "Projects", icon: Code, href: "#projects" },
  { id: "achievements", label: "Achievements", icon: Award, href: "#achievements" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-retro-dark/80 backdrop-blur-md border-b-2 border-neon-purple"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.span
              className="text-2xl font-bold text-neon-pink neon-text-pink cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("#home")}
            >
              &lt;VP /&gt;
            </motion.span>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 103, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-neon-cyan border-2 border-transparent hover:border-neon-purple transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-neon-cyan p-2 mr-[25px]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-retro-darker/95"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-[25px] top-0 bottom-0 w-64 bg-retro-dark border-l-2 border-neon-purple"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)} className="text-neon-pink">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      handleRipple(e);
                      scrollToSection(item.href);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-neon-cyan border-2 border-neon-purple hover:bg-neon-purple/20 transition-colors text-left relative overflow-hidden"
                  >
                    <item.icon size={20} />
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}