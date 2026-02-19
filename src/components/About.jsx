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
            I'm a backend focused Java Developer with hands on experience building scalable applications and designing reliable server side systems for real world usage.
          </p>
          <p>
            My core expertise lies in Java and Spring Boot, where I build RESTful APIs, implement authentication flows, handle business logic, and ensure strong data integrity. 
            I actively work with databases like MySQL and PostgreSQL, focusing on schema design, query efficiency, and performance optimization. 
            I also explore modern backend capabilities using Spring AI to integrate intelligent features into applications.
          </p>
          <p>
           On the cloud and deployment side, I work with AWS services such as EC2, S3, and CloudFront, along with GitHub and Vercel for version control and delivery workflows.
          </p>
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
