import { useRef } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const posts = [
  {
    title: 'Spring Boot Production Fixes — Lessons from Live Incidents',
    excerpt:
      'How I diagnosed and resolved critical production issues in Spring Boot microservices, from memory leaks and thread pool exhaustion to misconfigured health checks.',
    date: 'Apr 2026',
    readTime: '7 min read',
    tags: ['Spring Boot', 'Production', 'Debugging'],
    url: '#',
  },
  {
    title: 'Getting Started with Spring AI for Intelligent Backends',
    excerpt:
      "Exploring Spring AI's integration with large language models — building prompt-driven APIs, embedding pipelines, and RAG-powered features in Java.",
    date: 'Mar 2026',
    readTime: '9 min read',
    tags: ['Spring AI', 'LLM', 'Java'],
    url: '#',
  },
  {
    title: 'Database Optimization Strategies That Actually Work',
    excerpt:
      'Practical techniques for query tuning, index design, connection pooling, and schema refactoring that cut response times by 60% in production systems.',
    date: 'Feb 2026',
    readTime: '11 min read',
    tags: ['Database', 'SQL', 'Performance'],
    url: '#',
  },
  {
    title: 'Deploying Enterprise Workloads on AWS VMware Cloud',
    excerpt:
      'A hands-on guide to migrating and managing VMware workloads on AWS VCloud — covering hybrid architecture, networking, and cost optimization patterns.',
    date: 'Jan 2026',
    readTime: '10 min read',
    tags: ['AWS', 'VMware Cloud', 'Infrastructure'],
    url: '#',
  },
]

export default function Blog() {
  const header = useScrollReveal()
  const grid = useStaggerReveal()

  return (
    <section id="news" className="py-20 lg:py-32">
      {/* Section Header */}
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-16 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">04.</span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          News
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      {/* News Posts - CSS-only hover effects */}
      <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            className={`group block bg-[#0A1628] border border-slate-700/50 rounded-xl p-6 lg:p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 reveal ${grid.isVisible ? 'visible' : ''} stagger-${index + 1}`}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {/* Hover glow effect - pure CSS */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.06), transparent 40%)',
              }}
            />

            {/* Meta */}
            <div className="flex items-center gap-4 text-slate-500 font-mono text-xs mb-4 relative z-10">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
              <h3 className="text-lg lg:text-xl font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
            </div>

            {/* Excerpt */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
