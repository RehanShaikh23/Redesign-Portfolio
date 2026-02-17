import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#040D1F] text-slate-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
