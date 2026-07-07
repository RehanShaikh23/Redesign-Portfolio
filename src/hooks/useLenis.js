import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function useLenis(isLoading = false) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    if (isLoading) {
      lenis.stop()
    }

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!lenisRef.current) return
    if (isLoading) {
      lenisRef.current.stop()
    } else {
      lenisRef.current.start()
    }
  }, [isLoading])

  return lenisRef
}
