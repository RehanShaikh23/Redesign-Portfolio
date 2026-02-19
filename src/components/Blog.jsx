import { useRef } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import {
  ParticleCard,
  GlobalSpotlight,
  BentoCardGrid,
  useMobileDetection,
} from './MagicBento'

const GLOW_COLOR = '16, 185, 129'

const posts = [
  {
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt:
      'A deep dive into designing RESTful APIs that can handle thousands of concurrent requests while maintaining clean architecture.',
    date: 'Jan 2026',
    readTime: '8 min read',
    tags: ['Node.js', 'API Design', 'Backend'],
    url: '#',
  },
  {
    title: 'Why TypeScript is a Game Changer for Large Projects',
    excerpt:
      'Exploring how TypeScript improves developer experience, reduces bugs, and makes refactoring large codebases a breeze.',
    date: 'Dec 2025',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    url: '#',
  },
  {
    title: 'Mastering React Performance Optimization',
    excerpt:
      'Practical techniques for profiling and optimizing React applications — from memoization to code splitting and lazy loading.',
    date: 'Nov 2025',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Frontend'],
    url: '#',
  },
  {
    title: 'CI/CD Pipelines: From Zero to Production',
    excerpt:
      'A hands-on guide to setting up continuous integration and delivery pipelines using GitHub Actions and Docker.',
    date: 'Oct 2025',
    readTime: '12 min read',
    tags: ['DevOps', 'CI/CD', 'Docker'],
    url: '#',
  },
]

export default function Blog() {
  const header = useScrollReveal()
  const grid = useStaggerReveal()
  const gridRef = useRef(null)
  const isMobile = useMobileDetection()
  const shouldDisableAnimations = isMobile

  return (
    <section id="blog" className="py-20 lg:py-32">
      {/* Section Header */}
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-16 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">04.</span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          Blog
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      {/* Spotlight effect */}
      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={shouldDisableAnimations}
        enabled={true}
        spotlightRadius={400}
        glowColor={GLOW_COLOR}
      />

      {/* Blog Posts with MagicBento */}
      <BentoCardGrid gridRef={gridRef}>
        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridColumn: '1 / -1' }}>
          {posts.map((post, index) => (
            <ParticleCard
              key={index}
              className={`magic-bento-card magic-bento-card--border-glow reveal ${grid.isVisible ? 'visible' : ''} stagger-${index + 1}`}
              style={{
                backgroundColor: '#0A1628',
                '--glow-color': GLOW_COLOR,
                minHeight: 'auto',
                aspectRatio: 'unset',
                borderRadius: '12px',
                border: '1px solid rgba(51, 65, 85, 0.5)',
              }}
              disableAnimations={shouldDisableAnimations}
              particleCount={12}
              glowColor={GLOW_COLOR}
              enableTilt={false}
              clickEffect={true}
              enableMagnetism={false}
            >
              <a
                href={post.url}
                className="group block p-6 lg:p-8 relative z-10"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 font-mono text-xs mb-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </div>

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
              </a>
            </ParticleCard>
          ))}
        </div>
      </BentoCardGrid>
    </section>
  )
}
