import React from 'react'
import { ExternalLink, Github, FolderGit2, Star } from 'lucide-react'

const projects = [
  {
    title: 'Group Management Tool',
    category: 'Full Stack Web App',
    description:
      'A collaborative management workspace for teams to organize tasks, track sprint progress, and communicate with real-time updates and intuitive drag-and-drop kanban boards.',
    tech: ['React', 'Node.js', 'TailwindCSS', 'Vercel'],
    link: 'https://group-management-final.vercel.app/',
    github: 'https://github.com/RehanShaikh23/GroupManagementFinal.git',
    featured: true,
  },
  {
    title: 'AI RAG ChatBot',
    category: 'AI & Enterprise Backend',
    description:
      'A production-ready RAG system that ingests uploaded enterprise documents and streams contextual answers using Spring Boot, Spring AI, PGVector, and Server-Sent Events.',
    tech: ['Java 21', 'Spring Boot', 'Spring AI', 'PGVector', 'React'],
    link: 'https://ai-rag-chat-bot.vercel.app/',
    github: 'https://github.com/RehanShaikh23/AI_Rag_ChatBot.git',
    featured: true,
  },
  {
    title: 'Restaurant POS System',
    category: 'Cloud & Database Application',
    description:
      'End-to-end POS system for dining establishments featuring live table status tracking, automated invoice generation, payment processing, and kitchen display feeds.',
    tech: ['React', 'Spring Boot', 'MySQL', 'HikariCP'],
    link: 'https://spicefusion.cloud/',
    github: 'https://github.com/RehanShaikh23',
    featured: false,
  },
]

export default function WorksWindow() {
  return (
    <div className="space-y-6">
      {/* Top Banner / Highlight */}
      <div className="p-3 bg-[#F9AC78] border-2 border-[#2A2A2A] rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2 font-space text-xs font-bold text-[#2A2A2A]">
          <FolderGit2 className="w-4 h-4" />
          <span>PROJECT ARCHIVE // C:\REHAN\works</span>
        </div>
        <span className="font-mono text-xs bg-white/80 px-2 py-0.5 rounded border border-[#2A2A2A]">
          {projects.length} Repositories
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-5">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group p-5 bg-[#FFFDF9] hover:bg-white border-2 border-[#2A2A2A] rounded-xl shadow-xs hover:shadow-md transition-all space-y-3"
          >
            {/* Header Title & Action Buttons */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-outfit text-lg font-bold text-[#2A2A2A] group-hover:text-[#D46B38] transition-colors">
                    {proj.title}
                  </h3>
                  {proj.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F3CB5A] border border-[#2A2A2A] rounded-full text-[10px] font-space font-bold text-[#2A2A2A]">
                      <Star className="w-3 h-3 fill-[#2A2A2A]" /> Featured
                    </span>
                  )}
                </div>
                <span className="font-space text-xs text-[#5A633F] font-semibold">
                  {proj.category}
                </span>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 shrink-0">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#EFE9DB] border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#5A633F] hover:text-white transition-colors cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#5A633F] border border-[#2A2A2A] text-white hover:bg-[#D46B38] transition-colors cursor-pointer"
                    title="Visit Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-700 font-outfit leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {proj.tech.map((t, tidx) => (
                <span
                  key={tidx}
                  className="px-2.5 py-1 bg-[#EFE9DB] border border-[#2A2A2A]/40 rounded-md font-space text-[11px] font-medium text-[#2A2A2A]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
