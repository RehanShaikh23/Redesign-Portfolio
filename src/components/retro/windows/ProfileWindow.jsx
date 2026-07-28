import React from 'react'
import RehanPic from '../../../assets/RehanShaikh.jpeg'
import { FileText, MapPin, GraduationCap, Code2, ArrowUpRight } from 'lucide-react'

export default function ProfileWindow({ onOpenWorks }) {
  return (
    <div className="space-y-6">
      {/* Hero Section matching Reference Image layout */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 sm:p-6 bg-[#FFFDF9] border-2 border-[#2A2A2A] rounded-xl shadow-xs">
        {/* Profile Avatar */}
        <div className="relative shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-3 border-[#2A2A2A] shadow-md bg-slate-200">
            <img
              src={RehanPic}
              alt="Rehan Shaikh"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#2A2A2A]" title="Available for work" />
        </div>

        {/* Text Header Details */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <span className="font-space text-sm font-semibold text-[#5A633F] tracking-wide">
            hi! i'm
          </span>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#D46B38] tracking-tight leading-none">
            Rehan Shaikh
          </h1>
          <p className="font-space text-xs sm:text-sm font-bold text-[#2A2A2A] tracking-wider uppercase">
            FULL STACK JAVA DEVELOPER
          </p>

          <p className="italic font-serif text-sm sm:text-base text-slate-700 pt-1">
            "Meaningful code starts with clean architecture & intention"
          </p>
        </div>
      </div>

      {/* Quick Bio Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-[#FFFDF9] border-2 border-[#2A2A2A] rounded-lg space-y-2">
          <div className="flex items-center gap-2 text-[#5A633F] font-space text-xs font-bold uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>
          <p className="font-outfit text-sm font-semibold text-[#2A2A2A]">
            BCA (Bachelor of Computer Applications)
          </p>
          <p className="text-xs text-slate-600">
            AKI's Poona College of Arts, Science & Commerce, Pune
          </p>
          <p className="font-mono text-xs text-[#D46B38] font-bold">
            Expected Graduation: June 2027
          </p>
        </div>

        <div className="p-4 bg-[#FFFDF9] border-2 border-[#2A2A2A] rounded-lg space-y-2">
          <div className="flex items-center gap-2 text-[#5A633F] font-space text-xs font-bold uppercase">
            <MapPin className="w-4 h-4" />
            <span>Location & Status</span>
          </div>
          <p className="font-outfit text-sm font-semibold text-[#2A2A2A]">
            Pune, Maharashtra, India 🇮🇳
          </p>
          <p className="text-xs text-slate-600">
            Open for Full-Stack Developer Roles, Freelance & Collaborations
          </p>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-space text-xs text-emerald-800 font-bold">Actively Building</span>
          </div>
        </div>
      </div>

      {/* Summary Paragraph */}
      <div className="p-4 bg-white border-2 border-[#2A2A2A] rounded-lg space-y-3">
        <h3 className="font-space text-sm font-bold text-[#2A2A2A] uppercase flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#D46B38]" />
          About Me
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed font-outfit">
          I specialize in building robust backend services with <strong className="text-[#2A2A2A]">Java, Spring Boot, PostgreSQL, and Hibernate</strong> alongside modern responsive frontends using <strong className="text-[#2A2A2A]">React, Vite, and TailwindCSS</strong>. I thrive on turning complex business logic into clean, scalable applications.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={onOpenWorks}
          className="px-5 py-2.5 bg-[#5A633F] hover:bg-[#474E31] text-white font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] flex items-center gap-2 shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
        >
          <span>View My Works</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#F3CB5A] hover:bg-[#DFB239] text-[#2A2A2A] font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] flex items-center gap-2 shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  )
}
