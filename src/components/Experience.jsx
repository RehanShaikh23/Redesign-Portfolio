import { useEffect, useRef, useCallback, useState } from 'react'
import { Calendar, Briefcase, MapPin, ExternalLink, ChevronRight, Building2, Globe } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

/* ─── Experience Data ─── */
const experiences = [
  {
    role: 'Full Stack Java Intern',
    company: 'Code B Solutions Pvt Ltd',
    period: 'Jan 2025 — Apr 2025',
    location: 'Remote',
    type: 'Internship',
    description:
      'Developed a Group Management Dashboard for adding, updating, and deleting groups. Built RESTful APIs with Spring Boot and created a responsive React front-end with real-time state management.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    highlights: [
      'Built full CRUD dashboard from scratch',
      'Designed RESTful API architecture',
      'Implemented real-time state management',
    ],
    color: '#10b981',
    icon: 'code',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Accenture Nordics',
    period: 'July 2025',
    location: 'Virtual (Forage)',
    type: 'Virtual Internship',
    description:
      'Completed virtual internship in Software Engineering with Accenture Nordics (Forage). Explored cloud service models and enterprise architecture patterns.',
    tech: ['IaaS', 'PaaS', 'SaaS', 'Cloud Architecture'],
    highlights: [
      'Explored enterprise cloud architectures',
      'Studied IaaS, PaaS & SaaS patterns',
      'Gained industry-level engineering mindset',
    ],
    color: '#8b5cf6',
    icon: 'globe',
  },
]

/* ─── Scroll-triggered reveal hook (per-item) ─── */
function useItemReveal() {
  const refs = useRef([])

  const setRef = useCallback((el, index) => {
    if (el) refs.current[index] = el
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('exp-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return setRef
}

/* ─── Icon Renderer ─── */
function RoleIcon({ type, color }) {
  const iconProps = { size: 20, strokeWidth: 1.5, color }
  if (type === 'globe') return <Globe {...iconProps} />
  return <Building2 {...iconProps} />
}

/* ─── Experience Card ─── */
function ExperienceCard({ exp, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="exp-card" style={{ '--accent': exp.color }}>
      {/* Accent gradient border top */}
      <div className="exp-card-accent" />

      {/* Card Header */}
      <div className="exp-card-header">
        <div className="exp-card-icon" style={{ '--accent': exp.color }}>
          <RoleIcon type={exp.icon} color={exp.color} />
        </div>
        <div className="exp-card-meta">
          <span className="exp-type-badge" style={{ '--accent': exp.color }}>
            {exp.type}
          </span>
          <div className="exp-period-row">
            <Calendar size={13} />
            <span>{exp.period}</span>
          </div>
        </div>
      </div>

      {/* Role & Company */}
      <h3 className="exp-role">{exp.role}</h3>
      <div className="exp-company-row">
        <span className="exp-company">{exp.company}</span>
        <span className="exp-location">
          <MapPin size={12} />
          {exp.location}
        </span>
      </div>

      {/* Description */}
      <p className="exp-description">{exp.description}</p>

      {/* Highlights */}
      <div className={`exp-highlights ${isExpanded ? 'exp-highlights--open' : ''}`}>
        <button
          className="exp-highlights-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <ChevronRight size={14} className={`exp-chevron ${isExpanded ? 'exp-chevron--open' : ''}`} />
          Key Highlights
        </button>
        {isExpanded && (
          <ul className="exp-highlights-list">
            {exp.highlights.map((h, i) => (
              <li key={i}>
                <span className="exp-highlight-dot" style={{ background: exp.color }} />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech Stack */}
      <div className="exp-tech-stack">
        {exp.tech.map((t) => (
          <span key={t} className="exp-tech-pill" style={{ '--accent': exp.color }}>
            {t}
          </span>
        ))}
      </div>

      {/* Sequence Number */}
      <div className="exp-card-number" style={{ '--accent': exp.color }}>
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  )
}

/* ─── Main Experience Section ─── */
export default function Experience() {
  const header = useScrollReveal()
  const setRef = useItemReveal()

  return (
    <section id="experience" className="exp-section">
      {/* Ambient Orbs */}
      <div className="exp-orb exp-orb--1" aria-hidden="true" />
      <div className="exp-orb exp-orb--2" aria-hidden="true" />

      {/* ── Section Header ── */}
      <div
        ref={header.ref}
        className={`exp-header reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <div className="exp-header-label">
          <Briefcase size={14} />
          Career Journey
        </div>
        <h2 className="exp-header-title">
          Professional <span>Experience</span>
        </h2>
        <p className="exp-header-subtitle">
          A timeline of roles that shaped my engineering mindset and technical depth.
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="exp-timeline">
        {/* Animated vertical line */}
        <div className="exp-timeline-track" aria-hidden="true">
          <div className="exp-timeline-line" />
          <div className="exp-timeline-glow" />
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => setRef(el, index)}
            className="exp-item exp-reveal"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Timeline Node */}
            <div className="exp-node" style={{ '--accent': exp.color }}>
              <div className="exp-node-dot" />
              <div className="exp-node-ring" />
              <div className="exp-node-connector" />
            </div>

            {/* Card */}
            <ExperienceCard exp={exp} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}
