"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CreativeHero } from "@/components/creative-hero"
import { links } from "@/data/links"
import { profile } from "@/data/profile"
import { content } from "@/data/content"

export function HeroSection() {
  return (
    <section id="hero" aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div id="hero-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div id="hero-content" className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          id="hero-text"
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className="inline-block"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <div id="hero-tagline-badge" className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
              <span className="relative z-10">{profile.tagline}</span>
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bold tracking-tight"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="block">{content.hero.greeting}</span>
            <span id="hero-name" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            id="hero-description"
            className="text-xl text-zinc-400 max-w-[600px]"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            id="hero-cta-buttons"
            className="flex flex-wrap gap-4 pt-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <Button id="hero-btn-experience" className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0" asChild>
              <Link href="#experience" aria-label="View work experience">
                <span className="relative z-10 flex items-center">
                  {content.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </Button>
            <Button id="hero-btn-contact" variant="outline" className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500" asChild>
              <Link href="#contact" aria-label="Go to contact section">{content.hero.ctaSecondary}</Link>
            </Button>
          </motion.div>

          <motion.div
            id="hero-social-links"
            className="flex gap-4 pt-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <Link id="hero-link-github" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link id="hero-link-linkedin" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link id="hero-link-email" href={`mailto:${links.email}`} aria-label="Send email">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          id="hero-animation"
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <CreativeHero />
        </motion.div>
      </div>

      <div id="hero-scroll-indicator" aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
