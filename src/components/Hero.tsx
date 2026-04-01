"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowDown } from "lucide-react";

interface HeroProps {
  onTerminalClick: () => void;
}

export default function Hero({ onTerminalClick }: HeroProps) {
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
          <span className="text-sm md:text-lg text-neon-pink tracking-[0.3em] uppercase">
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
                "0 0 10px #ff71ce, 0 0 20px #ff71ce, 0 0 40px #ff71ce",
                "0 0 20px #ff71ce, 0 0 40px #ff71ce, 0 0 80px #ff71ce",
                "0 0 10px #ff71ce, 0 0 20px #ff71ce, 0 0 40px #ff71ce",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VRUSHAL
          </motion.span>
          <br />
          <motion.span
            className="inline-block text-neon-cyan"
            animate={{
              textShadow: [
                "0 0 10px #01cdfe, 0 0 20px #01cdfe, 0 0 40px #01cdfe",
                "0 0 20px #01cdfe, 0 0 40px #01cdfe, 0 0 80px #01cdfe",
                "0 0 10px #01cdfe, 0 0 20px #01cdfe, 0 0 40px #01cdfe",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
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
          {["AI Engineer", "Systems Developer", "ML Enthusiast"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="px-4 py-2 text-lg border-2 border-neon-purple text-neon-purple neon-border-purple"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl text-neon-yellow mb-12 max-w-2xl mx-auto"
        >
          Building the future with code, one algorithm at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff71ce" }}
            whileTap={{ scale: 0.95 }}
            onClick={onTerminalClick}
            className="px-8 py-4 bg-transparent border-2 border-neon-pink text-neon-pink text-xl neon-border-pink flex items-center gap-2"
          >
            <Terminal size={24} />
            Open Terminal
          </motion.button>
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-10 left-10"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-neon-pink"
            style={{
              left: `${i * 30}px`,
              top: `${i * 20}px`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ★
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}