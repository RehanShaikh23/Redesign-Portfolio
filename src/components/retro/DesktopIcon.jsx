import React from 'react'
import { motion } from 'framer-motion'

export function ProfileIcon({ size = 'md' }) {
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#3A3D36] border-2 border-[#2A2A2A] flex items-center justify-center shadow-md pointer-events-none">
      <span className="font-space text-2xl sm:text-3xl font-bold text-white tracking-tighter">
        r
      </span>
    </div>
  )
}

export function FolderIcon({ size = 'md' }) {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-none">
      {/* Folder Back Tab */}
      <div className="absolute top-1 left-1.5 w-7 h-3 bg-[#DFB239] rounded-t-sm border-t-2 border-l-2 border-r-2 border-[#2A2A2A]" />
      
      {/* Document Peeking Out */}
      <div className="absolute top-2 right-2.5 w-8 h-9 bg-white border-2 border-[#2A2A2A] rounded-xs shadow-xs transform rotate-3 flex flex-col p-1 gap-1">
        <div className="w-full h-1 bg-blue-400 rounded-full" />
        <div className="w-3/4 h-1 bg-slate-300 rounded-full" />
        <div className="w-1/2 h-1 bg-slate-300 rounded-full" />
      </div>

      {/* Main Folder Front Body */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-13 h-10 sm:w-14 sm:h-11 bg-[#F3CB5A] border-2 border-[#2A2A2A] rounded-sm shadow-md flex items-center justify-center">
        <div className="w-10 h-0.5 bg-[#DFB239]/80 rounded-full" />
      </div>
    </div>
  )
}

export function ToolsFolderIcon() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-none">
      {/* Folder Back Tab */}
      <div className="absolute top-1 left-1.5 w-7 h-3 bg-[#D46B38] rounded-t-sm border-t-2 border-l-2 border-r-2 border-[#2A2A2A]" />
      
      {/* Tools Emblem */}
      <div className="absolute top-2 right-2 w-8 h-9 bg-emerald-100 border-2 border-[#2A2A2A] rounded-xs shadow-xs transform -rotate-3 flex items-center justify-center">
        <span className="text-xs font-mono font-bold text-emerald-800">{'</>'}</span>
      </div>

      {/* Main Folder Front Body */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-13 h-10 sm:w-14 sm:h-11 bg-[#F9AC78] border-2 border-[#2A2A2A] rounded-sm shadow-md flex items-center justify-center">
        <div className="w-10 h-0.5 bg-[#D46B38]/60 rounded-full" />
      </div>
    </div>
  )
}

export default function DesktopIcon({
  id,
  title,
  type = 'folder',
  onClick,
  onDoubleClick,
  isSelected,
  dragConstraintsRef,
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      dragConstraints={dragConstraintsRef || false}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{
        scale: 1.12,
        zIndex: 50,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
      }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg cursor-grab active:cursor-grabbing select-none touch-none relative z-10 ${
        isSelected
          ? 'bg-white/20 ring-2 ring-white/80 ring-offset-1 ring-offset-black/40'
          : 'hover:bg-white/10'
      }`}
      aria-label={`Open ${title} window`}
      role="button"
      tabIndex={0}
    >
      {type === 'profile' && <ProfileIcon />}
      {type === 'folder' && <FolderIcon />}
      {type === 'tools' && <ToolsFolderIcon />}

      <span className="font-space text-xs sm:text-sm font-semibold text-white tracking-tight group-hover:text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] pointer-events-none">
        {title}
      </span>
    </motion.div>
  )
}

