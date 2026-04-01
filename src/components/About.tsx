"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-pink neon-text-pink">About</span>{" "}
          <span className="text-neon-cyan neon-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 border-2 border-neon-cyan neon-border">
              <h3 className="text-2xl font-bold text-neon-pink mb-4 flex items-center gap-2">
                <GraduationCap className="text-neon-pink" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xl text-neon-cyan font-bold">{education.institution}</p>
                  <p className="text-neon-yellow">{education.degree}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-neon-purple">
                    <Calendar size={14} />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1 text-neon-pink">
                    <span className="font-bold">CGPA:</span> {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-neon-purple neon-border-purple">
              <h3 className="text-2xl font-bold text-neon-cyan mb-2 flex items-center gap-2">
                <MapPin className="text-neon-cyan" />
                Location
              </h3>
              <p className="text-neon-yellow text-lg">{education.institution.split(',')[0]}, Pune</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 border-2 border-neon-pink neon-border-pink"
          >
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">Who I Am</h3>
            <p className="text-lg text-neon-yellow leading-relaxed mb-4">
              I'm an AI & Systems Developer passionate about building scalable solutions 
              that push the boundaries of what's possible. Currently pursuing my B.Tech 
              in AI & Data Science at VIT Pune.
            </p>
            <p className="text-lg text-neon-yellow leading-relaxed">
              My expertise lies in multi-agent AI systems, real-time video streaming infrastructure, 
              and optimizing large language models for production use. I love turning complex 
              problems into elegant, efficient solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["AI/ML", "Systems Design", "Backend Development", "Cloud Architecture"].map((tag, i) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className="px-6 py-3 text-xl border-2 border-neon-cyan text-neon-cyan neon-border"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}