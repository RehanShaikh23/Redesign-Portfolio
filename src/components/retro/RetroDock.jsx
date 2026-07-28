import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Code, Sparkles, Folder, Terminal, FileText } from 'lucide-react'
import { Dock } from '../ui/Dock'

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
    { id: 'resume', label: 'resume', icon: FileText },
  ]

  const items = [
    ...windowIcons.map((win, idx) => {
      const isOpen = openWindows[win.id]?.isOpen
      const isFocused = activeWindowId === win.id && isOpen
      const IconComp = win.icon
      const isLastWindow = idx === windowIcons.length - 1

      return {
        id: win.id,
        label: win.label,
        onClick: () => onToggleWindow(win.id),
        separator: isLastWindow,
        className: isFocused
          ? 'bg-[#FAF7F0] text-[#2A2A2A] border-2 border-[#2A2A2A] font-bold shadow-md'
          : isOpen
          ? 'bg-[#474E31] text-white border border-white/40 hover:bg-[#3D4428]'
          : 'bg-black/20 text-white/80 border border-white/10 hover:bg-black/30 hover:text-white',
        icon: (
          <div className="relative flex items-center justify-center w-full h-full">
            <IconComp className="w-5 h-5" />
            {isOpen && (
              <span
                className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full ${
                  isFocused ? 'bg-[#D46B38] ring-2 ring-white/50' : 'bg-[#F3CB5A]'
                }`}
              />
            )}
          </div>
        ),
      }
    }),
    ...socials.map((soc) => ({
      id: soc.id,
      label: soc.label,
      href: soc.url,
      style: { backgroundColor: soc.bg },
      className:
        'border-2 border-[#2A2A2A] text-white flex items-center justify-center shadow-xs cursor-pointer',
      icon: soc.content,
    })),
  ]

  return (
    <Dock
      items={items}
      magnification={1.7}
      distance={140}
      iconSize={42}
      borderRadius={16}
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 bg-[#5A633F] border-2 border-[#2A2A2A] retro-dock-shadow max-w-[95vw] px-3 py-2 flex items-center justify-between"
    >
      {/* Retro OS Clock Display */}
      <div className="hidden md:flex items-center gap-1.5 pl-3 ml-1 border-l border-white/20 font-space text-xs font-bold text-white shrink-0 self-center h-8">
        <Sparkles className="w-3.5 h-3.5 text-[#F3CB5A]" />
        <span>{timeStr || '12:00 PM'}</span>
      </div>
    </Dock>
  )
}
