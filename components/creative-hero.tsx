"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Alias as a non-nullable type so closures (e.g. Particle class) don't need null checks
    const context: CanvasRenderingContext2D = ctx

    let devicePixelRatio: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      context.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        const hue = Math.random() * 60 + 270 // 270–330: purples and pinks
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          this.x -= forceDirectionX * force * this.density
          this.y -= forceDirectionY * force * this.density
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10
        }
      }

      draw() {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
    }

    // Reduce particle density on mobile to avoid O(n²) perf issues
    const isMobileDevice = window.innerWidth < 768
    const gridSize = isMobileDevice ? 50 : 30

    const particlesArray: Particle[] = []

    function init() {
      particlesArray.length = 0

      // canvas is guaranteed non-null here — it was narrowed above and never reassigned
      const canvasWidth = canvas!.width / devicePixelRatio
      const canvasHeight = canvas!.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Build a spatial grid to avoid O(n²) connection checks
    const connectionDistance = 30
    // Pre-allocated grid — cleared and reused each frame to avoid GC pressure
    const spatialGrid: Map<string, number[]> = new Map()

    function buildGrid() {
      spatialGrid.clear()
      for (let i = 0; i < particlesArray.length; i++) {
        const cx = Math.floor(particlesArray[i].x / connectionDistance)
        const cy = Math.floor(particlesArray[i].y / connectionDistance)
        const key = `${cx},${cy}`
        if (!spatialGrid.has(key)) spatialGrid.set(key, [])
        spatialGrid.get(key)!.push(i)
      }
      return spatialGrid
    }

    // Animation loop
    const animate = () => {
      // Use logical (CSS) pixel dimensions — canvas is scaled by devicePixelRatio
      const logicalWidth = canvas!.width / devicePixelRatio
      const logicalHeight = canvas!.height / devicePixelRatio
      context.clearRect(0, 0, logicalWidth, logicalHeight)

      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Draw connections using spatial grid (O(n) instead of O(n²))
      const grid = buildGrid()

      for (let i = 0; i < particlesArray.length; i++) {
        const cx = Math.floor(particlesArray[i].x / connectionDistance)
        const cy = Math.floor(particlesArray[i].y / connectionDistance)

        for (let nx = cx - 1; nx <= cx + 1; nx++) {
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            const neighbors = grid.get(`${nx},${ny}`)
            if (!neighbors) continue
            for (const j of neighbors) {
              if (j <= i) continue
              const dx = particlesArray[i].x - particlesArray[j].x
              const dy = particlesArray[i].y - particlesArray[j].y
              const distance = Math.sqrt(dx * dx + dy * dy)
              if (distance < connectionDistance) {
                context.beginPath()
                context.strokeStyle = `rgba(180, 120, 255, ${0.2 - distance / 150})`
                context.lineWidth = 0.5
                context.moveTo(particlesArray[i].x, particlesArray[i].y)
                context.lineTo(particlesArray[j].x, particlesArray[j].y)
                context.stroke()
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    let animationFrameId: number
    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
