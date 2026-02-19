import { AlignRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const navItems = [
  { num: '01', label: 'about me', color: '#FF6B6B', href: '#about', sectionId: 'about' },
  { num: '02', label: 'experience', color: '#C6F135', href: '#experience', sectionId: 'experience' },
  { num: '03', label: 'work', color: '#64FFDA', href: '#work', sectionId: 'work' },
  { num: '04', label: 'blog', color: '#FF6B6B', href: '#blog', sectionId: 'blog' },
  { num: '05', label: 'contact me', color: '#C6F135', href: '#contact', sectionId: 'contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredNav, setHoveredNav] = useState(null)

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.sectionId)
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <header className="w-full py-8 px-6 lg:px-12 sticky top-0 z-50 bg-[#040D1F]/80 backdrop-blur-md border-b border-slate-800/50 animate-header">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-xl tracking-tight font-semibold text-slate-100 hover:text-emerald-400 transition-colors"
          >
            rehan.shaikh
          </a>

          {/* Desktop Navigation */}
          <ul
            className="hidden lg:flex items-center space-x-1 font-mono text-sm"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item) => (
              <li key={item.num} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.num)}
                  className={`relative z-10 flex items-center gap-1 px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeSection === item.sectionId
                      ? 'text-emerald-400'
                      : ''
                  }`}
                >
                  <span style={{ color: activeSection === item.sectionId ? '#64FFDA' : item.color }}>
                    {item.num}.
                  </span>
                  <span
                    className={
                      activeSection === item.sectionId
                        ? 'text-emerald-400'
                        : hoveredNav === item.num
                          ? 'text-emerald-400'
                          : 'text-slate-100'
                    }
                    style={{ transition: 'color 0.2s ease' }}
                  >
                    {item.label}
                  </span>
                </a>

                {/* Sliding pill hover background */}
                {hoveredNav === item.num && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Active indicator dot */}
                {activeSection === item.sectionId && !hoveredNav && (
                  <motion.div
                    layoutId="navActiveDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-emerald-400 relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X strokeWidth={1.5} className="w-8 h-8" />
            ) : (
              <AlignRight strokeWidth={1.5} className="w-8 h-8" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 bg-[#0A1628] border-l border-slate-700/50 z-50 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <X strokeWidth={1.5} className="w-8 h-8" />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col px-8 space-y-2 font-mono text-sm">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                        activeSection === item.sectionId
                          ? 'bg-emerald-500/10 border border-emerald-500/30'
                          : 'hover:bg-slate-700/30 border border-transparent'
                      }`}
                    >
                      <span
                        style={{ color: activeSection === item.sectionId ? '#64FFDA' : item.color }}
                        className="text-base"
                      >
                        {item.num}.
                      </span>
                      <span
                        className={`text-base ${
                          activeSection === item.sectionId
                            ? 'text-emerald-400 font-medium'
                            : 'text-slate-100'
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
