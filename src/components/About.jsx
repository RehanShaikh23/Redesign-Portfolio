import { useState, useEffect } from 'react'
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Play, 
  RefreshCw, 
  ArrowRight,
  Server
} from 'lucide-react'
import rehanPic from '../assets/My_Pic.jpeg'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MovingBorderButton from './MovingBorderButton'

export default function About() {
  const header = useScrollReveal()
  const content = useScrollReveal()

  // State for active workbench tab: 0 = console, 1 = request pipeline, 2 = JVM telemetry
  const [activeTab, setActiveTab] = useState(0)

  // ─── Tab 1: Console state & animation ───
  const [visibleLines, setVisibleLines] = useState([])
  const [isPrinting, setIsPrinting] = useState(false)
  const [triggerCount, setTriggerCount] = useState(0)

  const logLines = [
    { level: 'INFO', time: '19:28:24.081', logger: 'r.s.p.PersonalPortfolioApplication', msg: 'Starting PersonalPortfolioApplication on localhost using Java 21...' },
    { level: 'INFO', time: '19:28:24.085', logger: 'r.s.p.PersonalPortfolioApplication', msg: 'No active profile set, falling back to default profiles: prod' },
    { level: 'INFO', time: '19:28:24.620', logger: 'org.hibernate.Version             ', msg: 'HCANN000001: Hibernate Commons Annotations {6.0.6.Final}' },
    { level: 'INFO', time: '19:28:25.105', logger: 'r.s.p.s.DatabaseService            ', msg: 'Database connection established: postgresql://localhost:5432/portfolio' },
    { level: 'INFO', time: '19:28:25.290', logger: 'r.s.p.s.HikariPool                 ', msg: 'HikariPool-1 - Connection pool initialized (max=10, timeout=30s)' },
    { level: 'INFO', time: '19:28:25.430', logger: 'r.s.p.s.SpringAIService            ', msg: 'Spring AI: loaded vector database indexing service.' },
    { level: 'INFO', time: '19:28:25.610', logger: 'o.s.b.w.e.t.TomcatWebServer        ', msg: 'Tomcat initialized on port(s): 8080 (http)' },
    { level: 'INFO', time: '19:28:25.801', logger: 'o.s.a.e.m.MvcRequestMatcher        ', msg: 'Mapped URL path [/api/about] onto method getAbout()' },
    { level: 'INFO', time: '19:28:25.803', logger: 'o.s.a.e.m.MvcRequestMatcher        ', msg: 'Mapped URL path [/api/projects] onto method getProjects()' },
    { level: 'INFO', time: '19:28:25.998', logger: 'r.s.p.PersonalPortfolioApplication', msg: 'Started PersonalPortfolioApplication in 1.917 seconds (JVM running)' }
  ]

  // Run sequence when component mounts, activeTab switches to Console, or triggerCount changes
  useEffect(() => {
    let interval
    if (activeTab === 0) {
      setIsPrinting(true)
      setVisibleLines([])
      let i = 0
      interval = setInterval(() => {
        if (i < logLines.length) {
          const line = logLines[i]
          setVisibleLines(prev => [...prev, line])
          i++
        } else {
          clearInterval(interval)
          setIsPrinting(false)
        }
      }, 120)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeTab, triggerCount])

  const runStartupSequence = () => {
    if (isPrinting) return
    setTriggerCount(prev => prev + 1)
  }

  // ─── Tab 2: Request Flow Pipeline state ───
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      title: '1. Client Browser',
      tech: 'React 19, Tailwind, Lenis Scroll',
      role: 'GET /api/about',
      desc: 'Beautiful frontend client layer utilizing modern component architectures, smooth custom scrolling, and responsive styling optimized for all device sizes.'
    },
    {
      title: '2. Controller Layer',
      tech: 'Spring REST Controller, JWT Auth',
      role: 'Endpoint Mapping',
      desc: 'RestControllers exposed on secure endpoints. Implements JWT validation, custom Filters, CORS management, and robust API response mappings.'
    },
    {
      title: '3. Service Layer',
      tech: 'Spring Service, Hibernate, Spring AI',
      role: 'Business Logic',
      desc: 'Encapsulates core business processes. Integrates Hibernate ORM for entity mapping, and interfaces intelligent tools using Spring AI framework.'
    },
    {
      title: '4. Database Tier',
      tech: 'PostgreSQL, MySQL, HikariCP Pool',
      role: 'Data Persistence',
      desc: 'Handles transactional integrity management, query optimization, index configurations, and efficient HikariCP database connection pooling.'
    }
  ]

  // ─── Tab 3: JVM Telemetry state & uptime ───
  const [uptime, setUptime] = useState(0)
  const [heapMemory, setHeapMemory] = useState(242)

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const memTimer = setInterval(() => {
      // Simulate minor Heap memory oscillations (+/- 3MB)
      setHeapMemory(prev => {
        const diff = Math.floor(Math.random() * 7) - 3
        const next = prev + diff
        return Math.max(220, Math.min(280, next))
      })
    }, 1500)
    return () => clearInterval(memTimer)
  }, [])

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0')
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${h}:${m}:${s}`
  }

  const coreCompetencies = [
    'Java (SE/EE) & Spring Boot',
    'PostgreSQL & MySQL',
    'Spring AI & Vector DBs',
    'REST APIs & Microservices',
    'AWS Deployment (EC2, S3)',
    'React 19 & Tailwind CSS'
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      {/* Redesigned Sleek Header */}
      <div
        ref={header.ref}
        className={`flex flex-col mb-16 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30">
            // Profile.config
          </span>
          <div className="h-px bg-slate-800 flex-grow max-w-[200px] hidden sm:block"></div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-semibold text-slate-100 tracking-tight mt-3">
          About Me
        </h2>
      </div>

      <div
        ref={content.ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start reveal ${content.isVisible ? 'visible' : ''}`}
      >
        {/* Left Column: Bio Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900">
                <img
                  src={rehanPic}
                  alt="Rehan Shaikh"
                  className="w-full h-full object-cover transition duration-500 ease-out"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  width="128"
                  height="128"
                />
              </div>
            </div>
            
            <div className="space-y-2 mt-2 sm:mt-0">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">Developer Profile</span>
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Rehan Shaikh</h3>
              <p className="text-slate-400 font-mono text-sm">
                <span className="text-emerald-400">@status:</span> Building scalable backends
              </p>
            </div>
          </div>

          <div className="space-y-4 text-slate-450 text-base lg:text-lg leading-relaxed">
            <p>
              I'm a backend-focused Java Developer with hands-on experience building scalable applications and designing reliable server-side systems for real-world usage.
            </p>
            <p>
              My core expertise lies in <strong className="text-slate-200">Java</strong> and <strong className="text-slate-200">Spring Boot</strong>, where I build robust RESTful APIs, implement secure token authorization flows, and maintain database efficiency.
            </p>
            <p>
              I actively work with relational databases like <strong className="text-slate-200">PostgreSQL</strong> and <strong className="text-slate-200">MySQL</strong>. I also enjoy exploring modern AI integrations utilizing <strong className="text-slate-200">Spring AI</strong> pipelines.
            </p>
          </div>

          {/* Active Stack */}
          <div className="space-y-4 pt-6 border-t border-slate-800/80">
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest">Active Core Stack</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {coreCompetencies.map((comp, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-350 font-mono">
                  <span className="text-emerald-500 font-bold select-none">❯</span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div className="pt-2 flex justify-center sm:justify-start">
            <MovingBorderButton
              borderRadius="0.75rem"
              className="px-6 py-3 font-semibold text-xs uppercase tracking-wider text-emerald-400"
            >
              <a href="#contact" className="w-full h-full flex items-center justify-center gap-2">
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </MovingBorderButton>
          </div>
        </div>

        {/* Right Column: Workbench Frame */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-[#0b1329] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[460px]">
            {/* Header / Window Controls */}
            <div className="bg-[#060c1c] px-4 py-3.5 border-b border-slate-900/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              
              <span className="text-xs font-mono text-slate-500 select-none">
                rehan-shaikh-app : portfolio-service
              </span>
              
              <div className="w-16"></div>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-slate-900/50 bg-[#081024] overflow-x-auto">
              {[
                { name: 'System.out', icon: Terminal },
                { name: 'Request Flow', icon: Layers },
                { name: 'JVM Metrics', icon: Cpu }
              ].map((tab, idx) => {
                const IconComponent = tab.icon
                const isActive = activeTab === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-5 py-3 text-xs font-mono border-r border-slate-900/50 transition-all select-none duration-150 shrink-0 ${
                      isActive 
                        ? 'bg-[#040a17] text-emerald-400 border-b-2 border-b-emerald-500 font-semibold' 
                        : 'text-slate-500 hover:text-slate-350 hover:bg-[#050b18]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Workspace Area */}
            <div className="p-5 flex-grow font-mono text-[11px] leading-relaxed overflow-y-auto bg-[#040a17] relative select-text min-h-[350px]">
              
              {/* Tab 1: System.out Console */}
              {activeTab === 0 && (
                <div className="space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-1.5 overflow-x-auto">
                    {visibleLines.map((log, idx) => (
                      <div key={idx} className="whitespace-nowrap flex gap-2">
                        <span className="text-slate-650">{log.time}</span>
                        <span className="text-emerald-400 font-bold bg-emerald-950/40 px-1 rounded text-[9px]">{log.level}</span>
                        <span className="text-slate-600">28471</span>
                        <span className="text-slate-650">---</span>
                        <span className="text-slate-600">[main]</span>
                        <span className="text-cyan-400">{log.logger}</span>
                        <span className="text-slate-650">:</span>
                        <span className="text-slate-300 pl-1">{log.msg}</span>
                      </div>
                    ))}
                    
                    {isPrinting && (
                      <div className="flex items-center gap-2 text-slate-500 pl-1 mt-2">
                        <RefreshCw className="w-3 h-3 animate-spin text-emerald-500" />
                        <span>Compiling active developer profile...</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between mt-auto">
                    <div className="text-slate-600 text-[10px]">
                      JVM Status: <span className="text-emerald-500 font-semibold animate-pulse">ONLINE</span>
                    </div>
                    <button
                      onClick={runStartupSequence}
                      disabled={isPrinting}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-[#091024] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition disabled:opacity-50 text-[11px]"
                    >
                      <Play className="w-3 h-3" />
                      <span>Re-run JVM</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Request Flow Pipeline */}
              {activeTab === 1 && (
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {stages.map((stage, idx) => {
                      const isActive = activeStage === idx
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveStage(idx)}
                          className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-300 group cursor-pointer ${
                            isActive 
                              ? 'border-emerald-500/40 bg-[#0c1a35] shadow-[0_0_15px_rgba(16,185,129,0.08)]' 
                              : 'border-slate-800/80 bg-[#080f20] hover:bg-[#0c1730] hover:border-slate-700/50'
                          }`}
                        >
                          <span className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-semibold">Stage {idx + 1}</span>
                          <span className={`text-[12px] font-bold mb-1 transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-250 group-hover:text-slate-100'}`}>{stage.title.split('. ')[1]}</span>
                          <span className="text-[10px] text-slate-450 line-clamp-1 mt-0.5">{stage.tech.split(', ')[0]}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Stage Details Panel */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-[#080f20] min-h-[140px] flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-bold text-slate-200">{stages[activeStage].title}</span>
                        <span className="text-[10px] bg-slate-900/60 text-slate-400 border border-slate-800/80 px-2 py-0.5 rounded-full font-mono w-fit">{stages[activeStage].role}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-xs">
                        {stages[activeStage].desc}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-900/60 text-[10px] text-slate-500 flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Click stages above to trace backend request lifecycle flow</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: JVM Telemetry */}
              {activeTab === 2 && (
                <div className="space-y-6 h-full flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Left details */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Virtual Machine</span>
                        <span className="text-[11px] text-slate-200 font-bold">OpenJDK 64-Bit Server VM (v21.0.2)</span>
                      </div>
                      
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block">Uptime</span>
                        <span className="text-xs text-emerald-400 font-bold font-mono">{formatUptime(uptime)}</span>
                      </div>

                      <div>
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">Heap Memory Usage</span>
                        <div className="flex items-center gap-3">
                          <div className="flex-grow h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                            <div 
                              className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                              style={{ width: `${(heapMemory / 512) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-slate-450 font-mono whitespace-nowrap">{heapMemory}MB / 512MB</span>
                        </div>
                      </div>
                    </div>

                    {/* Right dashboard properties */}
                    <div className="space-y-3 bg-[#080f20] p-4 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-450">Connection Pool (HikariCP):</span>
                        <span className="text-emerald-400 font-bold text-[10px]">ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-450">Garbage Collector (G1 GC):</span>
                        <span className="text-slate-400 text-[10px]">IDLE</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-450">Spring AI Agent Status:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                          <span className="text-emerald-400 font-bold text-[10px]">READY</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-450">Caffeine Level:</span>
                        <span className="text-amber-400 font-bold text-[10px]">98% (Optimal)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-900/60 text-[10px] text-slate-500 flex items-center justify-between">
                    <span>Thread status: 42 running, 0 waiting</span>
                    <span className="flex items-center gap-1">
                      <Server className="w-3 h-3 text-slate-500" />
                      <span>Tomcat:8080</span>
                    </span>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

