import React, { useState, useRef } from 'react'
import { X, Minus, Square, Copy } from 'lucide-react'

export default function RetroWindow({
  id,
  path = 'C:\\REHAN\\portfolio',
  children,
  isOpen = true,
  isMinimized = false,
  zIndex = 10,
  initialPosition = { x: 50, y: 80 },
  onClose,
  onMinimize,
  onFocus,
  accentColor,
}) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0 })

  if (!isOpen) return null

  // Mouse Drag Handlers for Desktop Window Moving
  const handleMouseDown = (e) => {
    if (isMaximized) return
    onFocus?.()
    setIsDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    }

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - dragRef.current.startX
      const deltaY = moveEvent.clientY - dragRef.current.startY
      setPosition({
        x: Math.max(10, dragRef.current.posX + deltaX),
        y: Math.max(10, dragRef.current.posY + deltaY),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  // Touch Drag Handlers for Mobile / Touchscreens
  const handleTouchStart = (e) => {
    if (isMaximized || !e.touches[0]) return
    onFocus?.()
    const touch = e.touches[0]
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      posX: position.x,
      posY: position.y,
    }

    const handleTouchMove = (moveEvent) => {
      if (!moveEvent.touches[0]) return
      const t = moveEvent.touches[0]
      const deltaX = t.clientX - dragRef.current.startX
      const deltaY = t.clientY - dragRef.current.startY
      setPosition({
        x: Math.max(5, dragRef.current.posX + deltaX),
        y: Math.max(5, dragRef.current.posY + deltaY),
      })
    }

    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }

    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex,
        ...(isMaximized
          ? { top: '1rem', left: '1rem', right: '1rem', bottom: '5rem', width: 'calc(100% - 2rem)', height: 'calc(100% - 6rem)' }
          : { top: `${position.y}px`, left: `${position.x}px` }),
      }}
      className={`fixed ${isMinimized ? 'hidden' : 'block'} ${
        isMaximized ? '' : 'w-[92vw] max-w-2xl sm:w-[620px] lg:w-[680px]'
      } bg-[#FAF7F0] border-2 border-[#2A2A2A] rounded-xl retro-window-shadow overflow-hidden transition-shadow duration-200 flex flex-col`}
    >
      {/* Window Header / Titlebar */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`px-3.5 py-2.5 bg-[#5A633F] select-none flex items-center justify-between border-b-2 border-[#2A2A2A] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden pr-2">
          {/* Subtle OS status dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#F3CB5A] border border-[#2A2A2A]/40 shrink-0" />
          <span className="font-space text-xs sm:text-sm font-bold text-white tracking-wide truncate">
            {path}
          </span>
        </div>

        {/* Window Controls (Minimize, Maximize, Close) */}
        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onMinimize}
            className="w-5 h-5 rounded-xs bg-[#474E31] border border-[#2A2A2A]/60 flex items-center justify-center text-white/80 hover:bg-[#3A4027] hover:text-white transition-colors cursor-pointer"
            aria-label="Minimize Window"
            title="Minimize"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-5 h-5 rounded-xs bg-[#474E31] border border-[#2A2A2A]/60 flex items-center justify-center text-white/80 hover:bg-[#3A4027] hover:text-white transition-colors cursor-pointer hidden sm:flex"
            aria-label="Maximize Window"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? <Copy className="w-2.5 h-2.5" /> : <Square className="w-2.5 h-2.5" />}
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 rounded-xs bg-[#E85A58] border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-[#D04543] transition-colors cursor-pointer"
            aria-label="Close Window"
            title="Close"
          >
            <X className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Top Accent Strip (Optional Highlight Bar) */}
      {accentColor && (
        <div className="h-1.5 w-full border-b border-[#2A2A2A]" style={{ backgroundColor: accentColor }} />
      )}

      {/* Window Body Container */}
      <div className="p-4 sm:p-6 overflow-y-auto max-h-[70vh] sm:max-h-[65vh] custom-retro-scroll bg-[#FAF7F0] text-[#2A2A2A]">
        {children}
      </div>
    </div>
  )
}
