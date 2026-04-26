"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { motion } from "framer-motion"

type AnimatedImageProps = ImageProps & {
  shimmerClassName?: string
}

export function AnimatedImage({ shimmerClassName, className, onLoad, ...props }: AnimatedImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* Shimmer skeleton shown while image loads */}
      {!loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-zinc-800 animate-pulse ${shimmerClassName ?? ""}`}
        />
      )}

      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          {...props}
          className={className}
          onLoad={(e) => {
            setLoaded(true)
            onLoad?.(e)
          }}
        />
      </motion.div>
    </div>
  )
}
