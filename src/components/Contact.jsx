import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'motion/react'

const socials = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/RehanShaikh23', hoverColor: '#ffffff', hoverBorder: 'rgba(255,255,255,0.3)' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/rehan-shaikh23-5a1206318/', hoverColor: '#0A66C2', hoverBorder: 'rgba(10,102,194,0.3)' },
  { icon: Mail, label: 'Email', url: 'https://mail.google.com/mail/?view=cm&to=rehanshaikh.dev@gmail.com', hoverColor: '#EA4335', hoverBorder: 'rgba(234,67,53,0.3)' },
]

export default function Contact() {
  const header = useScrollReveal()
  const content = useScrollReveal()

  return (
    <section id="contact" className="pt-20 pb-10 lg:pt-32 lg:pb-16">
      {/* Section Header */}
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-16 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">05.</span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          Contact Me
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      <div
        ref={content.ref}
        className={`max-w-2xl mx-auto text-center reveal-scale ${content.isVisible ? 'visible' : ''}`}
      >
        {/* Heading */}
        <motion.h3
          animate={{
            backgroundPosition: ['200% center', '-200% center'],
          }}
          className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 bg-[length:200%_100%] bg-gradient-to-r from-white via-neutral-600 to-white bg-clip-text text-transparent"
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          Let's Work Together<span className="text-pink-500">.</span>
        </motion.h3>
        <p className="text-lg text-slate-400 leading-relaxed mb-10">
          I'm currently open to new opportunities and collaborations. Whether you have a
          question, a project idea, or just want to say hi ~ my inbox is always open!
        </p>

        {/* CTA Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=rehanshaikh.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-emerald-500 text-emerald-400 font-mono text-sm hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group cursor-pointer relative z-10"
        >
          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          Say Hello
        </a>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 relative z-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-icon-link p-3 rounded-full bg-[#0A1628] border border-slate-700/50 text-slate-400 transition-all duration-300 cursor-pointer"
              style={{
                '--hover-color': social.hoverColor,
                '--hover-border': social.hoverBorder,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = social.hoverColor
                e.currentTarget.style.borderColor = social.hoverBorder
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 font-mono text-xs">
          Designed & Built by <span className="text-emerald-400">Rehan Shaikh</span>
        </p>
      </div>
    </section>
  )
}
