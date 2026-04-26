"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { links } from "@/data/links"
import { profile } from "@/data/profile"

// Defined outside the component so the reference is stable across renders
const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const isMobile = useMobile()

  useEffect(() => {
    const hasHash = !!window.location.hash
    setIsVisible(window.scrollY > 100 || hasHash)

    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsVisible(scrolled)
      if (!scrolled && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname)
        setActiveSection("")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sync active section with URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) setActiveSection(hash)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ href }) => {
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
            // Guard: only push state if the hash actually changed
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`)
            }
          }
        },
        { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    setActiveSection(id)
    if (isMobile) setIsOpen(false)
  }

  const activeLinkClass = "relative px-3 py-1 text-sm font-semibold text-yellow-300 rounded-full z-10"
  const inactiveLinkClass = "relative px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white rounded-full transition-colors duration-200 hover:bg-zinc-700/40"

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{profile.brandName}</span>
                <span className="text-white">{profile.brandSuffix}</span>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{profile.brandName}</span>
                <span className="text-white">{profile.brandSuffix}</span>
              </Link>
              <ul id="nav-links" role="list" className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <li key={item.name} className="relative">
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,215,0,0.3),0_4px_12px_rgba(251,191,36,0.2)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Link
                        id={`nav-link-${item.name.toLowerCase()}`}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={isActive ? activeLinkClass : inactiveLinkClass}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
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
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <li key={item.name}>
                  <Link
                    id={`nav-mobile-link-${item.name.toLowerCase()}`}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-8 py-4 text-2xl font-medium block transition-colors ${isActive ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
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
