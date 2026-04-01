"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";

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

export default function Projects() {
  const isOdd = projects.length % 2 !== 0;
  
  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-purple"><GlowText color="#b967ff">My</GlowText></span>{" "}
          <span className="text-neon-yellow"><GlowText color="#fffb96">Projects</GlowText></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            const shouldCenter = isOdd && isLast;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: -2,
                  boxShadow: "0 0 40px rgba(255,113,206,0.4)"
                }}
                className={`p-6 border-2 border-neon-purple neon-border-purple hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,113,206,0.3)] transition-all group interactive ${shouldCenter ? 'md:col-span-2 md:max-w-xl mx-auto' : ''}`}
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm border border-neon-cyan text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-pink hover:text-neon-cyan transition-colors text-sm font-bold"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}