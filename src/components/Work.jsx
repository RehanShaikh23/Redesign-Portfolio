import { useScrollReveal } from '../hooks/useScrollReveal'
import { HoverEffect, Card, CardTitle, CardDescription } from './HoverEffect'
import { Github, ExternalLink } from 'lucide-react'

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

/* ── Mobile-only infinite horizontal marquee ── */
function InfiniteWorkScroller() {
  // Duplicate the list so the second copy seamlessly follows the first
  const doubled = [...projects, ...projects]

  return (
    <div className="relative overflow-hidden">
      {/* Left gradient fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10"
        style={{
          background:
            'linear-gradient(to right, #040D1F 0%, transparent 100%)',
        }}
      />
      {/* Right gradient fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10"
        style={{
          background:
            'linear-gradient(to left, #040D1F 0%, transparent 100%)',
        }}
      />

      {/* Scrolling track */}
      <div className="animate-marquee">
        {doubled.map((item, idx) => (
          <div key={idx} className="mx-2 w-[280px] flex-shrink-0">
            <Card>
              <CardTitle>
                <span>{item.title}</span>
                <div className="flex items-center gap-1">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300 cursor-pointer"
                      aria-label={`View live demo of ${item.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 cursor-pointer"
                      aria-label={`View ${item.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

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

      {/* Mobile: Infinite smooth scroller */}
      <div className="block md:hidden">
        <InfiniteWorkScroller />
      </div>

      {/* Desktop: Grid with HoverEffect */}
      <div className="hidden md:block">
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}
