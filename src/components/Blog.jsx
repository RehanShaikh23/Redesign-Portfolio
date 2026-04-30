import { Clock } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import { Tilt } from './unlumen-ui/tilt'

const posts = [
  {
    title: 'Spring Boot Production Fixes Lessons from Live Incidents',
    excerpt:
      'How I resolved critical production issues in Spring Boot microservices, from memory leaks and thread pool exhaustion to misconfigured health checks.',
    date: 'Apr 2026',
    readTime: '7 min read',
    tags: ['Spring Boot', 'Production', 'Debugging'],
    url: '#',
  },
  {
    title: 'Getting Started with Spring AI for Intelligent Backends',
    excerpt:
      "Exploring Spring AI's integration with large language models building prompt-driven APIs, embedding pipelines, and RAG-powered features in Java.",
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
    title: 'Deploying Enterprise Workloads on AWS Cloud',
    excerpt:
      'A hands-on guide to migrating and managing workloads on AWS VCloud covering hybrid architecture, networking, and cost optimization patterns.',
    date: 'Jan 2026',
    readTime: '10 min read',
    tags: ['AWS', 'Cloud', 'Infrastructure'],
    url: '#',
  },
]

function NewsCard({ post }) {
  return (
    <a href={post.url} className="block cursor-pointer">
      <Tilt
        rotationFactor={8}
        className="relative group overflow-hidden bg-[#0A1628] border border-slate-700/50 rounded-xl flex flex-col gap-0 w-full hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:scale-[1.02] transition-all duration-400 ease-out"
      >
        <div className="p-6 lg:p-8">
          {/* Meta */}
          <div className="flex items-center gap-4 text-slate-500 font-mono text-xs mb-4">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg lg:text-xl font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug mb-3">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </a>
  )
}

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

      {/* News Posts - Tilt Cards */}
      <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`reveal ${grid.isVisible ? 'visible' : ''} stagger-${index + 1}`}
          >
            <NewsCard post={post} />
          </div>
        ))}
      </div>
    </section>
  )
}
