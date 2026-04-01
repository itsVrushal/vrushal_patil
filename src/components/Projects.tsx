"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-purple neon-text-purple">My</span>{" "}
          <span className="text-neon-yellow neon-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 border-2 border-neon-purple neon-border-purple hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,113,206,0.3)] transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-neon-purple/20 rounded-lg">
                  <FolderGit2 className="text-neon-purple group-hover:text-neon-pink transition-colors" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neon-cyan group-hover:text-neon-pink transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-neon-yellow">{project.organization}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {project.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-neon-pink mt-0.5">◆</span>
                    <span className="text-neon-cyan">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-neon-cyan text-neon-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}