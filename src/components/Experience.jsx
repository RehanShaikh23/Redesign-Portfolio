import { Calendar } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    role: 'Senior Fullstack Developer',
    company: 'Second Company',
    companyUrl: '#',
    period: '2023 — Present',
    description:
      'Lead development of scalable web applications using React, Node.js, and TypeScript. Architected microservices infrastructure serving 100K+ daily users.',
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Fullstack Developer',
    company: 'First Company',
    companyUrl: '#',
    period: '2021 — 2023',
    description:
      'Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 60%.',
    tech: ['Vue.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions'],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    companyUrl: '#',
    period: '2019 — 2021',
    description:
      'Developed responsive web interfaces and collaborated with design teams to implement pixel-perfect UI components.',
    tech: ['React', 'JavaScript', 'SASS', 'REST APIs', 'Figma'],
  },
]

export default function Experience() {
  const header = useScrollReveal()
  const timeline = useStaggerReveal()

  return (
    <section id="experience" className="py-20 lg:py-32">
      {/* Section Header */}
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-16 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">02.</span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          Experience
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      {/* Timeline */}
      <div ref={timeline.ref} className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-slate-700/50 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 md:pl-20 group reveal ${timeline.isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#040D1F] group-hover:scale-150 transition-transform duration-300"></div>

              {/* Card */}
              <div className="bg-[#0A1628] border border-slate-700/50 rounded-xl p-6 lg:p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      className="text-emerald-400 hover:underline decoration-emerald-400/30 underline-offset-4 font-mono text-sm"
                    >
                      @ {exp.company}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
