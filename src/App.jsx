import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load below-fold sections for better initial load
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Work = lazy(() => import('./components/Work'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))

// Minimal loading placeholder
const SectionFallback = () => (
  <div className="py-20 lg:py-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <div className="bg-[#040D1F] text-slate-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Work />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}

export default App
