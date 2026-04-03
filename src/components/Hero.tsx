"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowDown } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onTerminalClick: () => void;
}

export default function Hero({ onTerminalClick }: HeroProps) {
  const [isHoveringClickHere, setIsHoveringClickHere] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-base md:text-xl text-neon-pink tracking-[0.3em] uppercase">
            Welcome to my world
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-neon-pink"
            animate={{
              textShadow: [
                "0 0 10px #ff71ce",
                "0 0 40px #ff71ce",
                "0 0 5px #ff71ce",
                "0 0 50px #ff71ce",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            VRUSHAL
          </motion.span>
          <br />
          <motion.span
            className="inline-block text-neon-cyan"
            animate={{
              textShadow: [
                "0 0 10px #01cdfe",
                "0 0 40px #01cdfe",
                "0 0 5px #01cdfe",
                "0 0 50px #01cdfe",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            PATIL
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {["AI Engineer", "Systems Developer", "ML Enthusiast"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="px-5 py-2.5 text-xl border-2 border-neon-purple text-neon-purple neon-border-purple cursor-default hover:scale-105 hover:shadow-[0_0_20px_#b967ff] transition-transform duration-150 ease-out"
              >
                {tag}
              </motion.span>
            ),
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.4, boxShadow: "0 0 20px #ff71ce" }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onClick={onTerminalClick}
            className={`px-10 py-5 bg-transparent border-2 border-neon-pink text-neon-pink text-2xl flex items-center gap-3 ${
              isHovering || isHoveringClickHere
                ? "animate-[pulse-glow_1s_infinite]"
                : "neon-border-pink"
            }`}
          >
            <Terminal size={20} />
            Open Terminal
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <div className="relative">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-14 left-1/2 -translate-x-1/2"
            >
              <svg
                width="20"
                height="35"
                viewBox="0 0 40 60"
                fill="none"
                className="drop-shadow-[0_0_10px_#ff71ce]"
              >
                <path
                  d="M20 0 L40 30 L28 30 L28 60 L12 60 L12 30 L0 30 Z"
                  fill="#ff71ce"
                />
              </svg>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => setIsHoveringClickHere(true)}
              onMouseLeave={() => setIsHoveringClickHere(false)}
              className="cursor-pointer relative inline-block"
            >
              <div className="absolute -inset-0.5 bg-neon-pink/20 blur-sm rounded-sm"></div>
              <div className="relative -translate-y-4 px-1 py-2 bg-retro-darker border-2 border-neon-pink neon-border-pink rounded-sm transform -rotate-2">
                <span
                  className="text-base font-bold text-neon-pink"
                  style={{
                    textShadow:
                      "0 0 10px #ff71ce, 0 0 20px #ff71ce, 0 0 40px #ff71ce",
                    animation: "neon-flicker 2s infinite",
                  }}
                >
                  CLICK HERE
                </span>
              </div>
            </motion.div>

            {/* <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            >
              <svg 
                width="20" 
                height="15" 
                viewBox="0 0 30 20" 
                fill="none"
              >
                <path 
                  d="M15 20 L0 0 L30 0 Z" 
                  fill="#01cdfe"
                  className="drop-shadow-[0_0_10px_#01cdfe]"
                />
              </svg>
            </motion.div> */}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-neon-cyan w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
