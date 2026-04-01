"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

function GlowText({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <motion.span
      className="inline-block"
      animate={{
        textShadow: [
          `0 0 5px ${color}, 0 0 10px ${color}`,
          `0 0 20px ${color}, 0 0 40px ${color}`,
          `0 0 5px ${color}, 0 0 10px ${color}`,
        ],
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-cyan"><GlowText color="#01cdfe">Work</GlowText></span>{" "}
          <span className="text-neon-pink"><GlowText color="#ff71ce">Experience</GlowText></span>
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan" />
              <div className="ml-8 p-6 border-2 border-neon-purple neon-border-purple hover:border-neon-cyan transition-colors group interactive">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neon-pink group-hover:text-neon-cyan transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-neon-yellow">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-neon-cyan">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neon-purple mt-1">▹</span>
                      <span className="text-neon-cyan">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}