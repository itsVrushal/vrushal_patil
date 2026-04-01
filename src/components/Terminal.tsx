"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon, ChevronRight } from "lucide-react";
import { personalInfo, skills, projects, experience } from "@/data/portfolio";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  output: React.ReactNode;
}

function GlowText({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
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

const commands: Record<string, React.ReactNode> = {
  help: (
    <div className="space-y-2">
      <p className="text-neon-yellow">Available commands:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-neon-pink">about</span> - Learn about me
        </div>
        <div>
          <span className="text-neon-pink">skills</span> - View my tech stack
        </div>
        <div>
          <span className="text-neon-pink">projects</span> - See my projects
        </div>
        <div>
          <span className="text-neon-pink">experience</span> - Work history
        </div>
        <div>
          <span className="text-neon-pink">contact</span> - Get in touch
        </div>
        <div>
          <span className="text-neon-pink">clear</span> - Clear terminal
        </div>
        <div>
          <span className="text-neon-pink">whoami</span> - Current user
        </div>
        <div>
          <span className="text-neon-pink">date</span> - Current date
        </div>
      </div>
    </div>
  ),
  whoami: (
    <p className="text-neon-cyan">
      visitor@portfolio:~$ You are a curious visitor exploring Vrushal's digital
      space!
    </p>
  ),
  date: <p className="text-neon-cyan">{new Date().toString()}</p>,
  clear: "CLEAR",
  about: (
    <div className="space-y-3">
      <p className="text-neon-yellow text-xl font-bold">
        <span>
          <GlowText color="#fffb96">About Me</GlowText>
        </span>
      </p>
      <p>
        Hi! I'm <span className="neon-text-pink">Vrushal Patil</span>, an AI &
        Systems Developer from Pune, India.
      </p>
      <p>
        Currently pursuing B.Tech in Artificial Intelligence and Data Science at
        Vishwakarma Institute of Technology.
      </p>
      <p>
        I specialize in building scalable AI systems, multi-agent orchestration,
        and real-time video streaming platforms.
      </p>
    </div>
  ),
  skills: (
    <div className="space-y-3">
      <p className="text-neon-yellow text-xl font-bold">
        <span>
          <GlowText color="#fffb96">Skills</GlowText>
        </span>
      </p>
      <div>
        <p className="text-neon-pink mb-2">Languages:</p>
        <p className="text-neon-cyan">{skills.languages.join(", ")}</p>
      </div>
      <div>
        <p className="text-neon-pink mb-2">AI / LLM Systems:</p>
        <p className="text-neon-cyan">{skills.ai_llm.join(", ")}</p>
      </div>
      <div>
        <p className="text-neon-pink mb-2">Backend & Data:</p>
        <p className="text-neon-cyan">{skills.backend_data.join(", ")}</p>
      </div>
      <div>
        <p className="text-neon-pink mb-2">ML / CV:</p>
        <p className="text-neon-cyan">{skills.ml_cv.join(", ")}</p>
      </div>
      <div>
        <p className="text-neon-pink mb-2">DevOps:</p>
        <p className="text-neon-cyan">{skills.devops.join(", ")}</p>
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-4">
      <p className="text-neon-yellow text-xl font-bold">
        <span>
          <GlowText color="#fffb96">Projects</GlowText>
        </span>
      </p>
      {projects.map((project, i) => (
        <div key={i} className="border-l-2 border-neon-purple pl-4">
          <p className="text-neon-pink text-lg">{project.name}</p>
          <p className="text-neon-cyan text-sm">{project.organization}</p>
          <p className="text-neon-yellow text-xs mt-1">
            {project.tech.join(" | ")}
          </p>
        </div>
      ))}
    </div>
  ),
  experience: (
    <div className="space-y-4">
      <p className="text-neon-yellow text-xl font-bold">
        <span>
          <GlowText color="#fffb96">Experience</GlowText>
        </span>
      </p>
      {experience.map((exp, i) => (
        <div key={i} className="border-l-2 border-neon-cyan pl-4">
          <p className="text-neon-pink text-lg">{exp.company}</p>
          <p className="text-neon-cyan">{exp.role}</p>
        </div>
      ))}
    </div>
  ),
  contact: (
    <div className="space-y-3">
      <p className="text-neon-yellow text-xl font-bold">
        <span>
          <GlowText color="#fffb96">Contact</GlowText>
        </span>
      </p>
      <p>
        <span className="text-neon-pink">Email:</span>{" "}
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-neon-cyan hover:underline"
        >
          {personalInfo.email}
        </a>
      </p>
      <p>
        <span className="text-neon-pink">Phone:</span>{" "}
        <span className="text-neon-cyan">{personalInfo.phone}</span>
      </p>
      <p>
        <span className="text-neon-pink">Location:</span>{" "}
        <span className="text-neon-cyan">{personalInfo.location}</span>
      </p>
      <p>
        <span className="text-neon-pink">LinkedIn:</span>{" "}
        <a
          href={`https://${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:underline"
        >
          {personalInfo.linkedin}
        </a>
      </p>
    </div>
  ),
};

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { cmd: string; output: React.ReactNode }[]
  >([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-2 mb-4">
          <p className="text-neon-yellow">╔════════════════════════╗</p>
          <p className="text-neon-yellow">
            ║ WELCOME TO VRUSHAL'S TERMINAL v1.0
          </p>
          <p className="text-neon-yellow">
            ║ Type 'help' to see available commands
          </p>
          <p className="text-neon-yellow">╚════════════════════════╝</p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();

    if (cmd === "clear") {
      setHistory([
        {
          cmd: "welcome",
          output: (
            <div className="space-y-2 mb-4">
              <p className="text-neon-yellow">
                ╔═══════════════════════════════════════╗
              </p>
              <p className="text-neon-yellow">
                ║ WELCOME TO VRUSHAL'S TERMINAL v1.0
              </p>
              <p className="text-neon-yellow">
                ║ Type 'help' to see available commands
              </p>
              <p className="text-neon-yellow">
                ╚═══════════════════════════════════════╝
              </p>
            </div>
          ),
        },
      ]);
    } else if (commands[cmd]) {
      setHistory([...history, { cmd: input, output: commands[cmd] }]);
    } else if (cmd) {
      setHistory([
        ...history,
        {
          cmd: input,
          output: (
            <p className="text-neon-orange">
              Command not found: {cmd}. Type 'help' for available commands.
            </p>
          ),
        },
      ]);
    }

    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8"
        >
          <div className="w-full max-w-6xl h-[85vh] sm:h-full max-h-[90vh] bg-retro-darker border-2 border-neon-cyan neon-border rounded-lg overflow-hidden flex flex-col overflow-x-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-neon-cyan/10 border-b-2 border-neon-cyan">
              <div className="flex items-center gap-2">
                <TerminalIcon className="text-neon-cyan" size={20} />
                <span className="text-neon-cyan font-[family-name:var(--font-press-start-2p)] text-xs">
                  VRUSHAL TERMINAL v1.0
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-neon-pink hover:text-neon-pink/70 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div
              ref={terminalRef}
              className="flex-1 p-2 sm:p-4 overflow-y-auto font-[family-name:var(--font-press-start-2p)] text-[10px] sm:text-xs md:text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="mb-2">
                  {item.cmd !== "welcome" && (
                    <div className="flex items-center gap-2 text-neon-pink">
                      <span>visitor@portfolio:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                  )}
                  <div className="text-neon-cyan mt-1">{item.output}</div>
                </div>
              ))}

              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 mt-4"
              >
                <span className="text-neon-pink">visitor@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-neon-cyan font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
