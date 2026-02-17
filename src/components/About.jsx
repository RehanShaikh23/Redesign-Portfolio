import { MicOff, Video, PhoneOff } from 'lucide-react'
import rehanPic from '../assets/Rehan_Pic-removebg-preview.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const header = useScrollReveal()
  const text = useScrollReveal()
  const image = useScrollReveal()

  return (
    <section id="about" className="py-20 lg:py-32">
      <div
        ref={header.ref}
        className={`flex items-center gap-4 mb-12 reveal ${header.isVisible ? 'visible' : ''}`}
      >
        <span className="font-mono text-2xl lg:text-3xl text-pink-500">
          01.
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight">
          About Me
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs ml-4 hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Text Content */}
        <div
          ref={text.ref}
          className={`space-y-6 text-lg lg:text-xl text-slate-400 leading-relaxed reveal-left ${text.isVisible ? 'visible' : ''}`}
        >
          <p>
            I'm an experienced Software Engineer with over 5 years of
            programming experience and 4 years of professional experience
            building elegant UIs and crafting great APIs.
          </p>
          <p>
            On the frontend, I I use frameworks like Vue.js and React.js to
            consume APIs and build scalable applications and on the backend, I'm
            skilled in building RESTful APIs, implementing continuous integration
            and delivery using Github Actions and Circle CI.
          </p>
          <p>
            I'm an avid fan of test-driven development and I believe that no
            feature is complete unless it is adequately tested.
          </p>
          <p>I love programming, coffee, gaming and everything in-between.</p>
        </div>

        {/* Image/Video Call Mockup */}
        <div
          ref={image.ref}
          className={`w-full relative group reveal-right ${image.isVisible ? 'visible' : ''}`}
        >
          <div className="relative bg-[#0A1628] border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            {/* Window Controls */}
            <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>

            {/* Image Area */}
            <div className="relative aspect-[5/3] w-full bg-slate-800">
              {/* Profile Image */}
              <img
                src={rehanPic}
                alt="Rehan Shaikh"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Video Call Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50">
                <button className="p-2.5 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition">
                  <MicOff strokeWidth={1.5} className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition">
                  <Video strokeWidth={1.5} className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white transition">
                  <PhoneOff strokeWidth={1.5} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
