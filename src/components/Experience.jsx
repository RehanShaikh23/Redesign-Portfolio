import { Calendar } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedList from './AnimatedList'

const experiences = [
  {
    role: 'Full Stack Java InternShip',
    company: 'Code B Solutions Pvt Ltd',
    period: '2025',
    description:
      'Developed a Group Management Dashboard for adding, updating, and deleting groups.',
    tech: ['React', 'Spring Boot', 'MySQL'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Accenture Nordics',
    period: 'July 2025',
    description:
      'Completed virtual internship in Software Engineering with Accenture Nordics (Forage).com',
    tech: ['IaaS', 'PaaS', 'SaaS'],
  },
  
]

export default function Experience() {
  const header = useScrollReveal()

  const renderExperienceItem = (exp, index, isSelected) => (
    <div className="relative pl-8 md:pl-12 group">
      {/* Timeline Dot */}
      <div
        className={`absolute left-0 top-3 w-3 h-3 rounded-full border-2 border-[#040D1F] transition-all duration-500 ease-in-out ${
          isSelected ? 'bg-emerald-400 scale-125' : 'bg-emerald-500'
        }`}
      />

      {/* Vertical Line Segment */}
      <div className="absolute left-[5px] top-6 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />

      {/* Card */}
      <div
        className={`bg-[#0A1628] border rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${
          isSelected
            ? 'border-emerald-500/30'
            : 'border-slate-700/50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold text-slate-100">
              {exp.role}
            </h3>
            <span className="text-emerald-400 font-mono text-sm">
              @ {exp.company}
            </span>
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
  )

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

      {/* Animated Experience List */}
      <AnimatedList
        items={experiences}
        renderItem={renderExperienceItem}
        onItemSelect={(item, index) => console.log('Selected:', item.role)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={false}
      />
    </section>
  )
}
