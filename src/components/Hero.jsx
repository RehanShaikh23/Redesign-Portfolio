import BlurText from './BlurText'
import { Tooltip } from './Tooltip'
import TechConstellation from './TechConstellation'
import RehanPhoto from '../assets/RehanShaikh.jpeg'
import PoonaCollegePhoto from '../assets/PoonaCollege.jpg'

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

        {/* Tech Stack Constellation */}
        <TechConstellation />
      </div>
    </section>
  )
}
