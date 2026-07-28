import React from 'react'

export function ProfileIcon({ size = 'md' }) {
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#3A3D36] border-2 border-[#2A2A2A] flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform">
      <span className="font-space text-2xl sm:text-3xl font-bold text-white tracking-tighter">
        r
      </span>
    </div>
  )
}

export function FolderIcon({ size = 'md' }) {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transform group-hover:scale-105 transition-transform">
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
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transform group-hover:scale-105 transition-transform">
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
}) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all cursor-pointer select-none focus:outline-hidden ${
        isSelected
          ? 'bg-[#5A633F]/15 ring-2 ring-[#5A633F] ring-offset-2 ring-offset-[#ECE6D8]'
          : 'hover:bg-[#5A633F]/10'
      }`}
      aria-label={`Open ${title} window`}
    >
      {type === 'profile' && <ProfileIcon />}
      {type === 'folder' && <FolderIcon />}
      {type === 'tools' && <ToolsFolderIcon />}

      <span className="font-space text-xs sm:text-sm font-semibold text-[#2A2A2A] tracking-tight group-hover:text-black">
        {title}
      </span>
    </button>
  )
}
