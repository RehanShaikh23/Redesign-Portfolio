import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './TechConstellation.css'

const techStack = [
  {
    name: 'Java',
    color: '#f87171',
    glow: 'rgba(248, 113, 113, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    desc: 'Enterprise-grade OOP language powering scalable backends.',
  },
  {
    name: 'React',
    color: '#61dafb',
    glow: 'rgba(97, 218, 251, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    desc: 'Declarative UI library for fast, interactive interfaces.',
  },
  {
    name: 'Spring Boot',
    color: '#6adc6a',
    glow: 'rgba(106, 220, 106, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    desc: 'Production-ready framework for microservices & REST APIs.',
  },
  {
    name: 'Spring AI',
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    desc: 'AI/LLM integration with familiar Spring patterns.',
  },
  {
    name: 'MySQL',
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    desc: 'Reliable open-source relational database at scale.',
  },
  {
    name: 'Docker',
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    desc: 'Containerization for consistent deployments everywhere.',
  },
  {
    name: 'AWS',
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    desc: 'Cloud infrastructure for scalable, global applications.',
  },
  {
    name: 'Git',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.6)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    desc: 'Distributed version control for collaborative development.',
  },
]

// Calculate positions in a circle around center
function getNodePositions(count, radiusX, radiusY) {
  const positions = []
  const startAngle = -Math.PI / 2 // Start from top
  for (let i = 0; i < count; i++) {
    const angle = startAngle + (2 * Math.PI * i) / count
    positions.push({
      x: 50 + radiusX * Math.cos(angle),
      y: 50 + radiusY * Math.sin(angle),
      angle,
    })
  }
  return positions
}

export default function TechConstellation() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const nodePositions = getNodePositions(techStack.length, 36, 38)
  const centerX = 50
  const centerY = 50

  return (
    <div
      ref={containerRef}
      className="tech-constellation w-full max-w-lg ml-auto relative animate-hero-code"
      style={{ aspectRatio: '1 / 1' }}
    >


      {/* SVG Layer for beams */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Beam gradients for each tech */}
          {techStack.map((tech, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`beam-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={centerX}
              y1={centerY}
              x2={nodePositions[i].x}
              y2={nodePositions[i].y}
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="50%" stopColor={tech.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={tech.color} stopOpacity="0.15" />
            </linearGradient>
          ))}


        </defs>

        {/* Beam lines */}
        {nodePositions.map((pos, i) => {
          const isHovered = hoveredIndex === i
          const isAnyHovered = hoveredIndex !== null
          const opacity = isHovered ? 1 : isAnyHovered ? 0.15 : 0.5
          return (
            <g key={`beam-${i}`}>
              {/* Base beam line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke={`url(#beam-grad-${i})`}
                strokeWidth={isHovered ? '0.4' : '0.2'}
                opacity={opacity}
                className="beam-line"
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />

              {/* Pulse traveling from node to center */}
              <circle r={isHovered ? '0.8' : '0.5'} fill={techStack[i].color} opacity={opacity}>
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M${pos.x},${pos.y} L${centerX},${centerY}`}
                />
              </circle>
            </g>
          )
        })}

        {/* Central core rings */}
        <circle
          cx={centerX}
          cy={centerY}
          r="5"
          fill="none"
          stroke="rgba(56,189,248,0.15)"
          strokeWidth="0.15"
          className="core-ring-1"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="8"
          fill="none"
          stroke="rgba(16,185,129,0.08)"
          strokeWidth="0.1"
          className="core-ring-2"
        />


      </svg>



      {/* Tech Stack Nodes */}
      {techStack.map((tech, i) => {
        const pos = nodePositions[i]
        const isHovered = hoveredIndex === i
        const isAnyHovered = hoveredIndex !== null

        return (
          <motion.div
            key={tech.name}
            className="absolute z-20"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="tech-node relative cursor-pointer flex flex-col items-center gap-1"
              animate={{
                scale: isHovered ? 1.15 : isAnyHovered && !isHovered ? 0.9 : 1,
                opacity: isAnyHovered && !isHovered ? 0.4 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >


              {/* Node circle */}
              <div
                className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500"
                style={{
                  background: isHovered
                    ? `radial-gradient(circle at 35% 35%, ${tech.color}22, rgba(4,13,31,0.95) 100%)`
                    : 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.04), rgba(4,13,31,0.95) 100%)',
                  border: `1px solid ${isHovered ? tech.color + '44' : 'rgba(148,163,184,0.12)'}`,
                }}
              >
                <img src={tech.logo} alt={tech.name} className="w-6 h-6 lg:w-7 lg:h-7 select-none object-contain" draggable={false} loading="lazy" />
              </div>

              {/* Tech name label */}
              <span
                className="text-[10px] lg:text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-300"
                style={{
                  color: isHovered ? tech.color : 'rgba(148,163,184,0.7)',
                }}
              >
                {tech.name}
              </span>
            </motion.div>

            {/* Hover tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 pointer-events-none"
                  style={{
                    top: pos.y > 50 ? 'auto' : '100%',
                    bottom: pos.y > 50 ? '100%' : 'auto',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: pos.y > 50 ? 0 : '8px',
                    marginBottom: pos.y > 50 ? '8px' : 0,
                  }}
                >
                  <div
                    className="px-3 py-2 rounded-lg text-xs max-w-[180px] text-center leading-relaxed"
                    style={{
                      background: 'rgba(4,13,31,0.95)',
                      border: `1px solid ${tech.color}33`,
                      color: 'rgba(203,213,225,0.9)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    }}
                  >
                    {tech.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
