import React, { useState, useRef } from 'react'
import backgroundImage from '../../assets/velvex-Image 2.png'
import DesktopIcon from './DesktopIcon'
import RetroWindow from './RetroWindow'
import RetroDock from './RetroDock'

import ProfileWindow from './windows/ProfileWindow'
import WorksWindow from './windows/WorksWindow'
import ToolsWindow from './windows/ToolsWindow'
import ContactWindow from './windows/ContactWindow'
import ResumeWindow from './windows/ResumeWindow'

export default function DesktopWallpaper() {
  const desktopRef = useRef(null)
  const [selectedIconId, setSelectedIconId] = useState(null)
  const [topZIndex, setTopZIndex] = useState(20)

  // State for desktop windows
  const [windows, setWindows] = useState({
    profile: {
      isOpen: true,
      isMinimized: false,
      zIndex: 20,
      path: 'C:\\REHAN\\portfolio',
      initialPosition: { x: 80, y: 70 },
      accentColor: '#F9AC78',
    },
    works: {
      isOpen: false,
      isMinimized: false,
      zIndex: 15,
      path: 'C:\\REHAN\\works',
      initialPosition: { x: 120, y: 90 },
      accentColor: '#F9AC78',
    },
    tools: {
      isOpen: false,
      isMinimized: false,
      zIndex: 12,
      path: 'C:\\REHAN\\tools',
      initialPosition: { x: 140, y: 110 },
      accentColor: '#5A633F',
    },
    contact: {
      isOpen: false,
      isMinimized: false,
      zIndex: 10,
      path: 'C:\\REHAN\\contact',
      initialPosition: { x: 160, y: 130 },
      accentColor: '#F3CB5A',
    },
    resume: {
      isOpen: false,
      isMinimized: false,
      zIndex: 18,
      path: 'C:\\REHAN\\resume',
      initialPosition: { x: 100, y: 60 },
      accentColor: '#F3CB5A',
    },
  })

  // Bring target window to top z-index focus
  const focusWindow = (id) => {
    setTopZIndex((prev) => {
      const nextZ = prev + 1
      setWindows((prevWin) => ({
        ...prevWin,
        [id]: {
          ...prevWin[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      }))
      return nextZ
    })
  }

  // Toggle window open / minimize
  const toggleWindow = (id) => {
    if (!windows[id]?.isOpen) {
      focusWindow(id)
    } else if (windows[id]?.isMinimized) {
      focusWindow(id)
    } else {
      // Minimize if currently focused
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], isMinimized: true },
      }))
    }
  }

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }))
  }

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }))
  }

  // Get currently highest z-index active window
  const activeWindowId = Object.keys(windows).reduce((maxId, id) => {
    if (!windows[id].isOpen || windows[id].isMinimized) return maxId
    if (!maxId) return id
    return windows[id].zIndex > windows[maxId].zIndex ? id : maxId
  }, null)

  return (
    <div
      ref={desktopRef}
      onClick={() => setSelectedIconId(null)}
      className="min-h-screen relative overflow-hidden select-none pb-24 flex flex-col justify-between bg-black"
    >
      {/* Dynamic Fullscreen Image Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src={backgroundImage}
          alt="Desktop Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Overlay to enhance contrast for retro OS elements */}
        <div className="absolute inset-0 bg-black/15 backdrop-brightness-95 pointer-events-none" />
      </div>

      {/* Central Wallpaper Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <h1
          className="font-outfit text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-[0.2em] text-white/20 select-none text-center drop-shadow-md"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
            color: 'transparent',
          }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* Main Desktop Grid Workspace */}
      <div className="relative z-10 p-4 sm:p-8 flex justify-between items-start max-w-7xl mx-auto w-full">
        {/* Left Desktop Shortcuts Column */}
        <div className="flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
          <DesktopIcon
            id="profile"
            title="profile"
            type="profile"
            dragConstraintsRef={desktopRef}
            isSelected={selectedIconId === 'profile'}
            onClick={() => setSelectedIconId('profile')}
            onDoubleClick={() => focusWindow('profile')}
          />

          <DesktopIcon
            id="works"
            title="works"
            type="folder"
            dragConstraintsRef={desktopRef}
            isSelected={selectedIconId === 'works'}
            onClick={() => setSelectedIconId('works')}
            onDoubleClick={() => focusWindow('works')}
          />
        </div>

        {/* Right Desktop Shortcuts Column */}
        <div className="flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
          <DesktopIcon
            id="tools"
            title="tools"
            type="tools"
            dragConstraintsRef={desktopRef}
            isSelected={selectedIconId === 'tools'}
            onClick={() => setSelectedIconId('tools')}
            onDoubleClick={() => focusWindow('tools')}
          />

          <DesktopIcon
            id="contact"
            title="contact"
            type="folder"
            dragConstraintsRef={desktopRef}
            isSelected={selectedIconId === 'contact'}
            onClick={() => setSelectedIconId('contact')}
            onDoubleClick={() => focusWindow('contact')}
          />

          <DesktopIcon
            id="resume"
            title="resume"
            type="folder"
            dragConstraintsRef={desktopRef}
            isSelected={selectedIconId === 'resume'}
            onClick={() => setSelectedIconId('resume')}
            onDoubleClick={() => focusWindow('resume')}
          />
        </div>
      </div>

      {/* Retro OS Windows Layer */}
      <div className="relative z-20">
        {/* Profile / About Window */}
        <RetroWindow
          id="profile"
          path={windows.profile.path}
          isOpen={windows.profile.isOpen}
          isMinimized={windows.profile.isMinimized}
          zIndex={windows.profile.zIndex}
          initialPosition={windows.profile.initialPosition}
          accentColor={windows.profile.accentColor}
          onClose={() => closeWindow('profile')}
          onMinimize={() => minimizeWindow('profile')}
          onFocus={() => focusWindow('profile')}
        >
          <ProfileWindow onOpenWorks={() => focusWindow('works')} />
        </RetroWindow>

        {/* Works / Projects Window */}
        <RetroWindow
          id="works"
          path={windows.works.path}
          isOpen={windows.works.isOpen}
          isMinimized={windows.works.isMinimized}
          zIndex={windows.works.zIndex}
          initialPosition={windows.works.initialPosition}
          accentColor={windows.works.accentColor}
          onClose={() => closeWindow('works')}
          onMinimize={() => minimizeWindow('works')}
          onFocus={() => focusWindow('works')}
        >
          <WorksWindow />
        </RetroWindow>

        {/* Tools / Tech Stack Window */}
        <RetroWindow
          id="tools"
          path={windows.tools.path}
          isOpen={windows.tools.isOpen}
          isMinimized={windows.tools.isMinimized}
          zIndex={windows.tools.zIndex}
          initialPosition={windows.tools.initialPosition}
          accentColor={windows.tools.accentColor}
          onClose={() => closeWindow('tools')}
          onMinimize={() => minimizeWindow('tools')}
          onFocus={() => focusWindow('tools')}
        >
          <ToolsWindow />
        </RetroWindow>

        {/* Contact Terminal Window */}
        <RetroWindow
          id="contact"
          path={windows.contact.path}
          isOpen={windows.contact.isOpen}
          isMinimized={windows.contact.isMinimized}
          zIndex={windows.contact.zIndex}
          initialPosition={windows.contact.initialPosition}
          accentColor={windows.contact.accentColor}
          onClose={() => closeWindow('contact')}
          onMinimize={() => minimizeWindow('contact')}
          onFocus={() => focusWindow('contact')}
        >
          <ContactWindow />
        </RetroWindow>

        {/* Resume Window */}
        <RetroWindow
          id="resume"
          path={windows.resume.path}
          isOpen={windows.resume.isOpen}
          isMinimized={windows.resume.isMinimized}
          zIndex={windows.resume.zIndex}
          initialPosition={windows.resume.initialPosition}
          accentColor={windows.resume.accentColor}
          onClose={() => closeWindow('resume')}
          onMinimize={() => minimizeWindow('resume')}
          onFocus={() => focusWindow('resume')}
        >
          <ResumeWindow />
        </RetroWindow>
      </div>

      {/* Retro OS Bottom Dock */}
      <RetroDock
        openWindows={windows}
        activeWindowId={activeWindowId}
        onToggleWindow={toggleWindow}
      />
    </div>
  )
}
