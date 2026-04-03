"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, FileText, Lightbulb } from "lucide-react";
import { achievements } from "@/data/portfolio";

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

const achievementIcons = [Trophy, Medal, FileText, Lightbulb];

export default function Achievements() {
  const isOdd = achievements.length % 2 !== 0;
  
  return (
    <section id="achievements" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-yellow"><GlowText color="#fffb96">Achievements</GlowText></span>{" "}
          <span className="text-neon-purple"><GlowText color="#b967ff">&</GlowText></span>{" "}
          <span className="text-neon-pink"><GlowText color="#ff71ce">Awards</GlowText></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[index % achievementIcons.length];
            const isLast = index === achievements.length - 1;
            const shouldCenter = isOdd && isLast;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`p-6 border-2 border-neon-yellow neon-border flex items-start gap-4 hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,113,206,0.3)] transition-all group interactive ${shouldCenter ? 'md:col-span-2 md:max-w-xl mx-auto' : ''}`}
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