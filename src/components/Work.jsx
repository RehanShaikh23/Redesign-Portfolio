import { useScrollReveal } from '../hooks/useScrollReveal'
import { HoverEffect } from './HoverEffect'

const projects = [
  {
    title: 'Group Management Tool',
    description:
      'A collaborative tool for teams to manage tasks, track progress, and communicate with real-time updates and drag-and-drop boards.',
    link: 'https://group-management-final.vercel.app/',
    github: 'https://github.com/RehanShaikh23/GroupManagementFinal.git',
  },
  {
    title: 'AI Rag ChatBot',
    description:
      'A full-stack RAG chatbot that answers questions from your own uploaded documents built with Spring Boot, Spring AI, PGVector, and real-time SSE streaming.',
    link: 'https://ai-rag-chat-bot.vercel.app/',
    github: 'https://github.com/RehanShaikh23/AI_Rag_ChatBot.git',
  },
  {
    title: 'Restaurant POS System',
    description:
      'Full-stack restaurant management system with order tracking, table management, payment integration, and real-time kitchen display.',
    link: 'https://spicefusion.cloud/',
    github: 'https://github.com/RehanShaikh23',
  }
]

export default function Work() {
  const header = useScrollReveal()

  return (
    <section id="work" className="py-20 lg:py-32">
      {/* Section Header */}
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-8 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">03.</span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          Work
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      {/* Projects with HoverEffect */}
      <HoverEffect items={projects} />
    </section>
  )
}
