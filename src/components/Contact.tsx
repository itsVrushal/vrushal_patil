"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

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

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-neon-pink"><GlowText color="#ff71ce">Get</GlowText></span>{" "}
          <span className="text-neon-cyan"><GlowText color="#01cdfe">In Touch</GlowText></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 border-2 border-neon-pink neon-border-pink">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Contact Info</h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 text-neon-yellow hover:text-neon-pink transition-colors"
                >
                  <Mail className="text-neon-pink" size={24} />
                  <span>{personalInfo.email}</span>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 text-neon-yellow"
                >
                  <Phone className="text-neon-pink" size={24} />
                  <span>{personalInfo.phone}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 text-neon-yellow"
                >
                  <MapPin className="text-neon-pink" size={24} />
                  <span>{personalInfo.location}</span>
                </motion.div>
              </div>
            </div>

            <div className="p-6 border-2 border-neon-cyan neon-border">
              <h3 className="text-2xl font-bold text-neon-pink mb-6">Social Links</h3>
              <div className="flex gap-4">
                <motion.a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 transition-colors"
                >
                  <Linkedin size={28} />
                </motion.a>
                <motion.a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="p-4 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/20 transition-colors"
                >
                  <Github size={28} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border-2 border-neon-purple neon-border-purple"
          >
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-retro-darker border-2 border-neon-purple text-neon-cyan placeholder-neon-purple/50 focus:border-neon-cyan focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-retro-darker border-2 border-neon-purple text-neon-cyan placeholder-neon-purple/50 focus:border-neon-cyan focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 bg-retro-darker border-2 border-neon-purple text-neon-cyan placeholder-neon-purple/50 focus:border-neon-cyan focus:outline-none resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff71ce" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-transparent border-2 border-neon-pink text-neon-pink text-xl neon-border-pink"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-neon-purple"
        >
          <p className="text-lg">
            Made with <span className="text-neon-pink">♥</span> using Next.js & 
            <span className="text-neon-cyan"> Framer Motion</span>
          </p>
          <p className="text-sm mt-2">© 2024 Vrushal Patil. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}