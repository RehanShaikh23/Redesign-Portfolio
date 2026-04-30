import { useEffect, useRef, useCallback } from 'react'
import { Calendar, Briefcase } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

/* ─── Experience Data ─── */
const experiences = [
  {
    role: 'Full Stack Java Internship',
    company: 'Code B Solutions Pvt Ltd',
    period: '2025',
    description:
      'Developed a Group Management Dashboard for adding, updating, and deleting groups. Built RESTful APIs with Spring Boot and created a responsive React front-end with real-time state management.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Accenture Nordics',
    period: 'July 2025',
    description:
      'Completed virtual internship in Software Engineering with Accenture Nordics (Forage). Explored cloud service models and enterprise architecture patterns.',
    tech: ['IaaS', 'PaaS', 'SaaS', 'Cloud Architecture'],
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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return setRef
}

/* ─── Timeline Card ─── */
function TimelineCard({ exp }) {
  return (
    <div className="exp-card">
      <div className="exp-duration">
        <Calendar />
        <span>{exp.period}</span>
      </div>

      <h3 className="exp-role">{exp.role}</h3>

      <div className="exp-company">{exp.company}</div>

      <p className="exp-description">{exp.description}</p>

      <div className="exp-tech-stack">
        {exp.tech.map((t) => (
          <span key={t} className="exp-tech-pill">
            {t}
          </span>
        ))}
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
      {/* ── Section Header ── */}
      <div
        ref={header.ref}
        className={`exp-header reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <div className="exp-header-label">
          <Briefcase size={14} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: '-2px' }} />
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
        <div className="exp-timeline-line" aria-hidden="true" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0

          return (
            <div
              key={index}
              className={`exp-item ${isLeft ? 'exp-item--left' : 'exp-item--right'}`}
            >
              {/* LEFT COLUMN */}
              {isLeft ? (
                <div
                  ref={(el) => setRef(el, index * 2)}
                  className={`exp-card-left exp-reveal exp-reveal--left`}
                >
                  <TimelineCard exp={exp} />
                </div>
              ) : (
                <div className="exp-spacer" />
              )}

              {/* CENTER DOT */}
              <div className="exp-dot-col">
                <div
                  ref={(el) => setRef(el, index * 2 + 1)}
                  className="exp-dot exp-dot-reveal"
                />
              </div>

              {/* RIGHT COLUMN */}
              {isLeft ? (
                <div className="exp-spacer" />
              ) : (
                <div
                  ref={(el) => setRef(el, index * 2)}
                  className={`exp-card-right exp-reveal exp-reveal--right`}
                >
                  <TimelineCard exp={exp} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
