"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Code2, Cloud, Brain } from "lucide-react";
import { skills } from "@/data/portfolio";

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

const skillCategories = [
  { name: "Languages", icon: Code2, items: skills.languages, color: "neon-pink" },
  { name: "AI / LLM Systems", icon: Brain, items: skills.ai_llm, color: "neon-cyan" },
  { name: "Backend & Data", icon: Database, items: skills.backend_data, color: "neon-purple" },
  { name: "ML / CV", icon: Cpu, items: skills.ml_cv, color: "neon-yellow" },
  { name: "DevOps & Systems", icon: Cloud, items: skills.devops, color: "neon-orange" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-cyan"><GlowText color="#01cdfe">Tech</GlowText></span>{" "}
          <span className="text-neon-pink"><GlowText color="#ff71ce">Stack</GlowText></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border-2 border-neon-purple neon-border-purple group interactive"
              whileHover={{ 
                scale: 1.02, 
                borderColor: "#01cdfe",
                boxShadow: "0 0 20px rgba(1, 205, 254, 0.3)"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`text-${category.color} group-hover:animate-pulse`} size={24} />
                <h3 className={`text-xl font-bold text-${category.color}`}>{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm border border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}