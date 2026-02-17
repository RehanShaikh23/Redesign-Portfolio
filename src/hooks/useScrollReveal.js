import { useEffect, useRef, useState } from 'react'

/**
 * Hook that detects when an element enters the viewport using IntersectionObserver.
 * Returns a ref to attach and a boolean indicating visibility.
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(element) // Only animate once
                }
            },
            {
                threshold: options.threshold ?? 0.1,
                rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return { ref, isVisible }
}

/**
 * Hook for staggered children animations.
 * Returns a ref for the parent and isVisible state.
 */
export function useStaggerReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(element)
                }
            },
            {
                threshold: options.threshold ?? 0.05,
                rootMargin: options.rootMargin ?? '0px 0px -30px 0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return { ref, isVisible }
}
