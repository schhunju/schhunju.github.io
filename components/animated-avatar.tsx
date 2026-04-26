"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedAvatarProps {
  src: string
  alt: string
  availabilityLabel: string
}

export function AnimatedAvatar({ src, alt, availabilityLabel }: AnimatedAvatarProps) {
  return (
    <motion.div
      id="about-avatar"
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div aria-hidden="true" className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
      <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900">
        <Image
          id="about-avatar-photo"
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[100%_60%]"
          priority
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div id="about-availability-badge" className="absolute bottom-0 left-0 w-full p-6">
          <div className="flex items-center gap-2">
            <div aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">{availabilityLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
