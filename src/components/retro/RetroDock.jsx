import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Code, Sparkles, Folder, Terminal } from 'lucide-react'

export default function RetroDock({
  openWindows = {},
  activeWindowId,
  onToggleWindow,
}) {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const socials = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rehan-shaikh23-5a1206318/',
      bg: '#2D7FBA',
      content: <span className="font-space font-bold text-sm text-white">in</span>,
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/RehanShaikh23',
      bg: '#282C34',
      content: <Github className="w-5 h-5 text-white" />,
    },
    {
      id: 'behance',
      label: 'Behance',
      url: 'https://github.com/RehanShaikh23',
      bg: '#0056FF',
      content: <span className="font-space font-bold text-xs text-white">Bē</span>,
    },
    {
      id: 'dribbble',
      label: 'Dribbble',
      url: 'https://github.com/RehanShaikh23',
      bg: '#E74D89',
      content: (
        <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 rounded-full border border-white" />
        </div>
      ),
    },
    {
      id: 'email',
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&to=rehanshaikh.dev@gmail.com',
      bg: '#E85A58',
      content: <Mail className="w-4 h-4 text-white" />,
    },
  ]

  const windowIcons = [
    { id: 'profile', label: 'profile', icon: Terminal },
    { id: 'works', label: 'works', icon: Folder },
    { id: 'tools', label: 'tools', icon: Code },
    { id: 'contact', label: 'contact', icon: Mail },
  ]

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl bg-[#5A633F] border-2 border-[#2A2A2A] rounded-2xl px-3 sm:px-6 py-2.5 retro-dock-shadow flex items-center justify-between gap-2 sm:gap-4">
      {/* Active Windows Quick Bar */}
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
        {windowIcons.map((win) => {
          const isOpen = openWindows[win.id]?.isOpen
          const isFocused = activeWindowId === win.id && isOpen
          const IconComp = win.icon

          return (
            <button
              key={win.id}
              onClick={() => onToggleWindow(win.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-space transition-all cursor-pointer select-none ${
                isFocused
                  ? 'bg-[#FAF7F0] text-[#2A2A2A] border-[#2A2A2A] font-bold shadow-xs scale-105'
                  : isOpen
                  ? 'bg-[#474E31] text-white border-white/40 hover:bg-[#3D4428]'
                  : 'bg-black/10 text-white/70 border-transparent hover:bg-black/20 hover:text-white'
              }`}
              title={`Toggle ${win.label} window`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">{win.label}</span>
              {isOpen && (
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isFocused ? 'bg-[#D46B38]' : 'bg-[#F3CB5A]'
                  }`}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Social Brand Tiles (Matching Reference Image) */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="h-6 w-px bg-white/20 hidden xs:block mx-1" />
        {socials.map((soc) => (
          <a
            key={soc.id}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={soc.label}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border-2 border-[#2A2A2A] flex items-center justify-center shadow-xs transform hover:-translate-y-1 hover:scale-110 transition-all cursor-pointer"
            style={{ backgroundColor: soc.bg }}
          >
            {soc.content}
          </a>
        ))}
      </div>

      {/* Retro OS Clock Display */}
      <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-white/20 font-space text-xs font-bold text-white shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-[#F3CB5A]" />
        <span>{timeStr || '12:00 PM'}</span>
      </div>
    </nav>
  )
}
