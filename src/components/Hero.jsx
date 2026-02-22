import BlurText from './BlurText'
import { Tooltip } from './Tooltip'
import RehanPhoto from '../assets/RehanShaikh.jpeg'
import PoonaCollegePhoto from '../assets/PoonaCollege.jpg'

const stackItems = [
  { line: 1, text: '<stack>', color: 'text-slate-100', indent: false },
  {
    line: 2,
    text: '<Java>',
    color: 'text-red-400',
    indent: true,
    tooltip: 'A robust, object-oriented language powering enterprise backends and Android apps worldwide.',
  },
  {
    line: 3,
    text: '<React>',
    color: 'text-emerald-400',
    indent: true,
    tooltip: 'A declarative JavaScript library for building fast, interactive user interfaces with a component-driven approach.',
  },
  {
    line: 4,
    text: '<Spring Boot>',
    color: 'text-yellow-400',
    indent: true,
    tooltip: 'An opinionated Java framework that makes building production-ready REST APIs and microservices effortless.',
  },
  {
    line: 5,
    text: '<Spring AI>',
    color: 'text-pink-400',
    indent: true,
    tooltip: 'A Spring module for integrating AI models and LLMs into Java applications with familiar Spring patterns.',
  },
  {
    line: 6,
    text: '<MYSQL>',
    color: 'text-blue-400',
    indent: true,
    tooltip: 'The world\'s most popular open-source relational database, trusted for reliable data storage at scale.',
  },
  { line: 7, text: '<and more...>', color: 'text-slate-400', indent: false },
]

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <BlurText
            text="I'm Rehan Shaikh."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl lg:text-7xl font-semibold text-slate-100 tracking-tight leading-[1.1]"
          />

          <div className="space-y-6 max-w-xl animate-hero-subtitle">
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
              I'm{' '}
              <Tooltip content={
                <div className="flex flex-col items-center gap-3">
                  <img src={RehanPhoto} alt="Rehan Shaikh" className="w-28 h-28 rounded-full object-cover object-top ring-2 ring-white/10" loading="lazy" width="112" height="112" />
                  <p>A passionate Full Stack Java Developer from Pune, India — driven by clean code, scalable architecture, and building products that make an impact.</p>
                </div>
              }>
                <span className="text-slate-200 cursor-pointer hover:text-white transition-colors duration-200">Rehan Shaikh</span>
              </Tooltip>, a passionate Full Stack Java Developer and BCA student at{' '}
              <Tooltip content={
                <div className="flex flex-col items-center gap-3">
                  <img src={PoonaCollegePhoto} alt="AKI's Poona College" className="w-full rounded-md object-cover" loading="lazy" width="400" height="250" />
                  <p>A well-known college in Pune, Maharashtra, affiliated with Savitribai Phule Pune University, offering diverse programs in arts, science, and commerce.</p>
                </div>
              }>
                <span className="text-slate-200 cursor-pointer hover:text-white transition-colors duration-200">AKI's Poona College of Arts, Science & Commerce</span>
              </Tooltip>,{' '}
              Pune graduating in June 2027. 
              I specialize in building efficient, scalable, and user-focused web applications that blend clean code with real-world impact.
            </p>

            <p className="text-lg lg:text-xl text-slate-400">
              The world is better with my code in it.
            </p>
          </div>
        </div>

        {/* Hero Code Block */}
        <div className="w-full max-w-lg ml-auto relative group animate-hero-code">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-[#0A1628] border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            {/* Window Controls */}
            <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm lg:text-base overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {stackItems.map((item) => (
                    <tr key={item.line} className="leading-7">
                      <td className="text-slate-600 select-none pr-4 text-right w-8">
                        {item.line}
                      </td>
                      <td className={item.indent ? 'pl-4' : ''}>
                        {item.tooltip ? (
                          
                            <span className={`${item.color} cursor-pointer hover:brightness-125 transition-all duration-200`}>
                              {item.text}
                            </span>
                        ) : (
                          <span className={item.color}>{item.text}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
