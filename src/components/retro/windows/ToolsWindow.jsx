import React from 'react'
import {
  Github,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Terminal,
  FileCode,
  Globe,
  Wrench,
} from 'lucide-react'

const tools = [
  {
    name: 'Java / Spring Boot',
    category: 'Backend Core',
    bg: '#E76F51',
    icon: Cpu,
  },
  {
    name: 'React 19 & Vite',
    category: 'Frontend',
    bg: '#2A9D8F',
    icon: Code2,
  },
  {
    name: 'GitHub & Git',
    category: 'Version Control',
    bg: '#264653',
    icon: Github,
  },
  {
    name: 'PostgreSQL & MySQL',
    category: 'Databases',
    bg: '#0077B6',
    icon: Database,
  },
  {
    name: 'VS Code & IntelliJ',
    category: 'IDE Workspace',
    bg: '#0096C7',
    icon: Terminal,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling & UI',
    bg: '#38BDF8',
    icon: Layers,
  },
  {
    name: 'Spring AI & PGVector',
    category: 'AI & RAG',
    bg: '#D46B38',
    icon: Sparkles,
  },
  {
    name: 'Hibernate ORM',
    category: 'Data Mapping',
    bg: '#5A633F',
    icon: FileCode,
  },
  {
    name: 'Vercel & Cloud',
    category: 'Deployment',
    bg: '#111827',
    icon: Globe,
  },
]

export default function ToolsWindow() {
  return (
    <div className="space-y-6">
      {/* Top Banner / Highlight */}
      <div className="p-3 bg-[#F9AC78] border-2 border-[#2A2A2A] rounded-lg text-center font-space text-sm font-bold text-[#2A2A2A]">
        TECH STACK & DEVELOPER TOOLKIT
      </div>

      <div className="text-center space-y-1">
        <h2 className="font-outfit text-2xl font-extrabold text-[#2A2A2A] tracking-tight uppercase">
          TOOLS & TECHNOLOGIES
        </h2>
        <p className="text-xs text-slate-600 font-space">
          Core languages, frameworks, and instruments I build with daily
        </p>
      </div>

      {/* Grid of Tools matching Reference Image */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
        {tools.map((tool, idx) => {
          const IconComponent = tool.icon
          return (
            <div
              key={idx}
              className="p-4 bg-[#FFFDF9] hover:bg-white border-2 border-[#2A2A2A] rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-[#2A2A2A] flex items-center justify-center shadow-xs transform group-hover:scale-110 transition-transform"
                style={{ backgroundColor: tool.bg }}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="font-outfit text-sm font-bold text-[#2A2A2A] group-hover:text-[#D46B38] transition-colors">
                {tool.name}
              </span>
              <span className="font-space text-[10px] text-slate-500 font-semibold uppercase">
                {tool.category}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
