"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseFollower() {
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Spring-smoothed positions drive the DOM directly via Framer Motion —
  // no React state, no re-renders on every mousemove event
  const springX = useSpring(rawX, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(rawY, { stiffness: 300, damping: 20, mass: 0.5 })

  // Tighter spring for the small dot (follows cursor more closely)
  const dotX = useSpring(rawX, { stiffness: 600, damping: 30, mass: 0.2 })
  const dotY = useSpring(rawY, { stiffness: 600, damping: 30, mass: 0.2 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX - 16)
      rawY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [rawX, rawY])

  return (
    <>
      {/* Large ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-50" />
      </motion.div>

      {/* Small dot — tighter, follows cursor closely */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50"
        style={{ x: dotX, y: dotY, translateX: 14, translateY: 14 }}
      />
    </>
  )
}
