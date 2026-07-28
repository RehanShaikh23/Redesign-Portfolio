import React, { useState } from 'react'
import { Send, Mail, CheckCircle2, MessageSquare } from 'lucide-react'

export default function ContactWindow() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-3 bg-[#F3CB5A] border-2 border-[#2A2A2A] rounded-lg flex items-center justify-between font-space text-xs font-bold text-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span>CONTACT TERMINAL // C:\REHAN\contact</span>
        </div>
        <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#2A2A2A]">
          STATUS: ONLINE
        </span>
      </div>

      <div className="text-center space-y-1">
        <h2 className="font-outfit text-2xl font-extrabold text-[#2A2A2A] tracking-tight">
          LET'S WORK TOGETHER
        </h2>
        <p className="text-xs text-slate-600 font-space">
          Send a direct message or feel free to reach out via email
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-emerald-50 border-2 border-[#2A2A2A] rounded-xl text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="font-outfit text-xl font-bold text-[#2A2A2A]">
            Message Sent Successfully!
          </h3>
          <p className="text-xs text-slate-600 font-space">
            Thank you for reaching out. Rehan will get back to you shortly!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-4 py-2 bg-[#5A633F] text-white font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] hover:bg-[#474E31] cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-space text-xs font-bold text-[#2A2A2A] uppercase">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white border-2 border-[#2A2A2A] rounded-lg font-outfit text-sm text-[#2A2A2A] focus:outline-hidden focus:ring-2 focus:ring-[#5A633F]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-space text-xs font-bold text-[#2A2A2A] uppercase">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-white border-2 border-[#2A2A2A] rounded-lg font-outfit text-sm text-[#2A2A2A] focus:outline-hidden focus:ring-2 focus:ring-[#5A633F]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-space text-xs font-bold text-[#2A2A2A] uppercase">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Hi Rehan, I loved your portfolio! Let's connect regarding a developer role..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 bg-white border-2 border-[#2A2A2A] rounded-lg font-outfit text-sm text-[#2A2A2A] focus:outline-hidden focus:ring-2 focus:ring-[#5A633F] resize-none"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=rehanshaikh.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-space text-[#D46B38] font-bold underline hover:text-[#5A633F] flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Direct Email Link
            </a>

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#5A633F] hover:bg-[#474E31] text-white font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] flex items-center gap-2 shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Transmit Message</span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
