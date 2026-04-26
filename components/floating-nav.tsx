"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { links } from "@/data/links"
import { profile } from "@/data/profile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" }, // hidden until NDA clears
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      <motion.div
        id="floating-nav"
        aria-label="Floating navigation"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div id="nav-pill" className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
          <div aria-hidden="true" className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div id="nav-mobile-bar" className="relative flex items-center justify-between">
              <Link id="nav-logo-mobile" href="/" aria-label={`${profile.name} — home`} className="font-bold text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{profile.firstName}</span>
                <span className="text-white">.QA</span>
              </Link>
              <Button
                id="nav-mobile-menu-toggle"
                variant="ghost"
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="nav-mobile-menu"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <nav id="nav-desktop" aria-label="Desktop navigation" className="relative flex items-center gap-1">
              <Link id="nav-logo-desktop" href="/" aria-label={`${profile.name} — home`} className="font-bold text-lg mr-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{profile.firstName}</span>
                <span className="text-white">.QA</span>
              </Link>
              <ul id="nav-links" role="list" className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      id={`nav-link-${item.name.toLowerCase()}`}
                      href={item.href}
                      className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <a id="nav-resume-link" href={links.resume} download={profile.resumeFilename} aria-label="Download resume">
                <Button
                  id="nav-resume-btn"
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                >
                  Resume
                </Button>
              </a>
            </nav>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          id="nav-mobile-menu"
          aria-label="Mobile navigation menu"
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul id="nav-mobile-links" role="list" className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  id={`nav-mobile-link-${item.name.toLowerCase()}`}
                  href={item.href}
                  className="px-8 py-4 text-2xl font-medium text-white hover:text-purple-400 transition-colors block"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a id="nav-mobile-resume-link" href={links.resume} download={profile.resumeFilename} aria-label="Download resume">
                <Button
                  id="nav-mobile-resume-btn"
                  className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                >
                  Resume
                </Button>
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  )
}
