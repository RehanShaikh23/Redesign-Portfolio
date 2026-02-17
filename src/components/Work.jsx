import { useScrollReveal } from '../hooks/useScrollReveal'
import { HoverEffect } from './HoverEffect'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard built with modern technologies.',
    link: '#',
  },
  {
    title: 'Project Management Tool',
    description:
      'A collaborative tool for teams to manage tasks, track progress, and communicate with real-time updates and drag-and-drop boards.',
    link: '#',
  },
  {
    title: 'AI Chat Application',
    description:
      'An intelligent chat application powered by machine learning featuring natural language processing, sentiment analysis, and adaptive responses.',
    link: '#',
  },
  {
    title: 'Restaurant POS System',
    description:
      'Full-stack restaurant management system with order tracking, table management, payment integration, and real-time kitchen display.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern developer portfolio built with React and Tailwind CSS featuring smooth animations, scroll reveals, and responsive design.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description:
      'A content management system with Markdown support, SEO optimization, comment system, and analytics dashboard for writers.',
    link: '#',
  },
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
