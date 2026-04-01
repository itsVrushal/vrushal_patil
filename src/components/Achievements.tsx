"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, FileText, Lightbulb } from "lucide-react";
import { achievements } from "@/data/portfolio";

const achievementIcons = [Trophy, Medal, FileText, Lightbulb];

export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-yellow neon-text">Achievements</span>{" "}
          <span className="text-neon-purple neon-text-purple">&</span>{" "}
          <span className="text-neon-pink neon-text-pink">Awards</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[index % achievementIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                className="p-6 border-2 border-neon-yellow neon-border flex items-start gap-4 hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,113,206,0.3)] transition-all group"
              >
                <div className="p-3 bg-neon-yellow/20 rounded-lg group-hover:bg-neon-pink/20 transition-colors">
                  <Icon className="text-neon-yellow group-hover:text-neon-pink transition-colors" size={28} />
                </div>
                <p className="text-lg text-neon-cyan group-hover:text-neon-pink transition-colors">
                  {achievement}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}